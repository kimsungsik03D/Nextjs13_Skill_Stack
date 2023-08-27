// "use client";
import React, { useState, useEffect } from "react";
import { Board, BoardFrom, BoardPage } from "@/components";
import { fetchGetBoader } from "@/utils";
import { boardSampleData } from "@/constants";
import { BoardProps } from "@/types";

export default async function Test() {
  const boardData = await fetchGetBoader();

  return (
    <div className="p-20">
      <BoardFrom />
      <BoardPage />
      <div className="p-20">
        {boardData &&
          boardData.map((value: BoardProps, index: number) => (
            <Board boardData={value} />
          ))}
      </div>
    </div>
  );
}
