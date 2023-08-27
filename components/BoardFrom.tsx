"use client";

import React, { useState } from "react";

const SearchButton = () => (
  <button type="submit" className=" w-36 border-solid border">
    {" "}
    전송
  </button>
);

const BoardFrom = () => {
  const [content, setContent] = useState("");
  const [regtId, setRegtId] = useState("");

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target);
    console.log("content : ", content, "\nregtId : ", regtId);
  };
  return (
    <div>
      <form onSubmit={handleSave}>
        <input
          name="name"
          type="text"
          className="w-50 border-solid border mr-3"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <select
          className="w-50 border-solid border mr-3"
          value={regtId}
          onChange={(e) => setRegtId(e.target.value)}
        >
          <option value="">선택</option>
          <option value="홍길동">홍길동</option>
          <option value="이길동">이길동</option>
          <option value="김길동">김길동</option>
          <option value="박길동">박길동</option>
        </select>
        <SearchButton />
      </form>
    </div>
  );
};

export default BoardFrom;
