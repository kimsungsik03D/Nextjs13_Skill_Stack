import React from "react";
import { Input } from "@/components";

const page = () => {
  return (
    <div className="mt-4 ml-5">
      <Input type="current" label="current" />
      <br />
      <Input type="text" label="text" />
    </div>
  );
};

export default page;
