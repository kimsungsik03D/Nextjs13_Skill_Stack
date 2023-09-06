// "use client";
import React, { useState, useEffect } from "react";
import { Board, BoardFrom, BoardPage } from "@/components";
import { fetchGetBoader } from "@/utils";
import { boardSampleData } from "@/constants";
import { BoardProps } from "@/types";

export default async function Test({ searchParams }) {
  const { page, no } = searchParams;
  const boardData = await fetchGetBoader(page);

  return (
    <div className="p-20">
      {/* page : {page} */}
      <BoardFrom />
      <BoardPage page={page || 0} />
      <div className="p-20">
        {boardData &&
          boardData.map((value: BoardProps, index: number) => (
            <Board boardData={value} />
          ))}
      </div>
    </div>
  );
}
