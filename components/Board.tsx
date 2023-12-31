"use client";
import { useState, useEffect } from "react";
import { BoardProps } from "@/types";
import { fetchGetBoader, fetchPutBoader, fetchDeleteBoader } from "@/utils";
import { useRouter } from "next/navigation";

interface boardDataProps {
  boardData: BoardProps;
}

const Board = ({ boardData }: boardDataProps) => {
  const router = useRouter();
  const [initBoard, setInitBoard] = useState(boardData);
  const [board, setBoard] = useState(boardData);

  useEffect(() => {
    setBoard(boardData);
  }, [boardData]);

  /** Action to Form Submit */
  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (board.content == initBoard.content) {
      alert("수정된 값이 없습니다.");

      return;
    }
    await fetchPutBoader(board.no, board.content, board.regtId);
  };
  const handleDelete = async () => {
    await fetchDeleteBoader(board.no);

    const searchParams = new URLSearchParams(window.location.search);
    const page = searchParams.get("page");

    router.replace(`/board?page=${page}`);
  };

  return (
    <div className="flex flex-row mb-4">
      <form
        className="contents"
        onSubmit={handleUpdate}
        onReset={() => setBoard(initBoard)}
      >
        <div className="flex-none px-5 w-14 bg-purple-800 py-2 mr-1 text-center">
          <span className="flex w-full h-full items-center">{board.no}</span>
        </div>
        <div className="flex-1 px-5 w-64 bg-zinc-300 py-2 mr-1">
          <span className="flex w-full h-full items-center">
            {!board.editState ? (
              board.content
            ) : (
              <input
                name="name"
                type="text"
                className="w-50 border-solid border mr-3"
                value={board.content}
                onChange={(e) =>
                  setBoard({ ...board, content: e.target.value })
                }
              />
            )}
          </span>
        </div>
        <div
          className={`flex-1 px-5 w-32 bg-teal-200 py-2  ${
            typeof board.no === "number" ? "mr-1" : ""
          }`}
        >
          <span className="flex w-full h-full items-center">
            {board.regtId}
          </span>
        </div>
        <div className="flex-1 px-5 w-20 bg-teal-200 py-2 mr-1 ">
          <span className="flex w-full h-full items-center">
            {typeof board.no === "number" && <button>test</button>}
          </span>
        </div>
        <div className="flex-none px-5 w-120 bg-teal-200 py-2 ">
          <span className="flex w-full h-full items-center">
            {/* {board.editState ? "1" : "2"} */}
            <button
              className="bg-zinc-300 px-5 py-2"
              type={board.editState ? "button" : "submit"}
              onClick={() =>
                setBoard({ ...board, editState: !board.editState })
              }
            >
              수정
            </button>

            {board.editState ? (
              <button className="bg-zinc-300 px-5 py-2 ml-3" type="reset">
                취소
              </button>
            ) : (
              <button
                className="bg-zinc-300 px-5 py-2 ml-3"
                type="button"
                onClick={() => handleDelete()}
              >
                삭제
              </button>
            )}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Board;
