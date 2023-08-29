"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BoardPageProps } from "@/types";
import { updateSearchParams, removeSearchParams } from "@/utils";

const BoardPage = ({ page }: BoardPageProps) => {
  const router = useRouter();

  const handlePage = (state: boolean) => {
    let newPage = page;
    if (state) {
      newPage++;
    } else {
      if (newPage > 0) {
        newPage--;
      }
      if (newPage <= 0) {
        newPage = 0;

        const newPathName = removeSearchParams("page");
        router.push(newPathName, { scroll: false });
        return;
      }
    }
    const newPathName = updateSearchParams("page", `${newPage}`);
    router.push(newPathName, { scroll: false });
  };

  return (
    <span id="BoardPage">
      <button onClick={() => handlePage(false)}>-</button>
      {page}
      <button onClick={() => handlePage(true)}>+</button>
    </span>
  );
};

export default BoardPage;
