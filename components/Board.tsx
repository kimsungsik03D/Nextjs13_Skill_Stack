import { BoardProps } from "@/types";

interface boardDataProps {
  boardData: BoardProps;
}

const Board = ({ boardData }: boardDataProps) => {
  return (
    <div className="flex flex-row mb-4">
      <div className="flex-none px-5 w-14 bg-purple-800 py-2 mr-1 text-center">
        {boardData.no}
      </div>
      <div className="flex-1 px-5 w-64 bg-zinc-300 py-2 mr-1">
        {`${boardData.content}`}
      </div>
      <div
        className={`flex-1 px-5 w-32 bg-teal-200 py-2 ${
          typeof boardData.no === "number" ? "mr-1" : ""
        }`}
      >
        {boardData.regtId}
      </div>
      <div className="flex-1 px-5 w-20 bg-teal-200 py-2 ">
        {typeof boardData.no === "number" && <button>test</button>}
      </div>
    </div>
  );
};

export default Board;
