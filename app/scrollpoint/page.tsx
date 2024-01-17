"use client";
import React from "react";
import { FullPage } from "@/components";

const page = () => {
  const pageText = ["page 1", "page 2", "page 3", "page 4", "page 5", "page 6"];
  return (
    <div>
      <FullPage pageText={pageText} />
    </div>
  );
};

export default page;
