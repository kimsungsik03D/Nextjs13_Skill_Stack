"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const BoardPage = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  useEffect(() => {}, [page]);

  return (
    <span id="BoardPage">
      <button onClick={() => (page == 1 ? setPage(1) : setPage(page - 1))}>
        -
      </button>
      {page}
      <button
        onClick={() => {
          setPage(page + 1);

          router.push(`http://localhost:3000/board?page=${page}`, {
            scroll: false,
          });
        }}
      >
        +
      </button>
    </span>
  );
};

export default BoardPage;
