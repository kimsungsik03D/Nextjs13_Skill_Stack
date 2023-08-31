"use client";
import { useState } from "react";
import { BoardProps } from "@/types";

interface boardDataProps {
  boardData: BoardProps;
}

const Board = ({ boardData }: boardDataProps) => {
  const [board, setBoard] = useState(boardData);
  return (
    <div className="flex flex-row mb-4">
      <div className="flex-none px-5 w-14 bg-purple-800 py-2 mr-1 text-center">
        <span className="flex w-full h-full items-center">{board.no}</span>
      </div>
      <div className="flex-1 px-5 w-64 bg-zinc-300 py-2 mr-1">
        <span className="flex w-full h-full items-center">{`${board.content}`}</span>
      </div>
      <div
        className={`flex-1 px-5 w-32 bg-teal-200 py-2  ${
          typeof board.no === "number" ? "mr-1" : ""
        }`}
      >
        <span className="flex w-full h-full items-center">{board.regtId}</span>
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
            onClick={() => setBoard({ ...board, editState: !board.editState })}
          >
            수정
          </button>
        </span>
      </div>
    </div>
  );
};

export default Board;
