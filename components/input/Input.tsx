"use client";

import { match } from "assert";
import React, {
  ChangeEvent,
  InputHTMLAttributes,
  useEffect,
  useState,
} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  label: string;
}

function numberWithCommas(n: string) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Input = ({ type, label, ...props }: InputProps) => {
  const [data, setData] = useState<any>(0);

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (type == "current") {
      currentHandler(event);
    } else {
      textHandler(event);
    }
  };

  const textHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setData(value);
  };

  const currentHandler = (event: ChangeEvent<HTMLInputElement>) => {
    let replaceValue = "";

    const { value, selectionEnd } = event.target;
    const replaceComma = value.replaceAll(",", "");

    const checkNumber = /^[0-9]*$/; //체크 방식(숫자)
    const isNumber = checkNumber.test(replaceComma);

    if (!isNumber) return;

    if (Number(replaceComma) == 0) {
      replaceValue = "0";
    } else if (data == "0") {
      replaceValue = value.replace("0", "");
    } else {
      replaceValue = numberWithCommas(replaceComma);
    }

    const startPosition = selectionEnd && value.length - selectionEnd;

    let cursorPoint = Math.max(value.length - (startPosition || 0), 0);

    if (value.length != selectionEnd) {
      setTimeout(() => {
        if (selectionEnd == 0) {
          cursorPoint = 1;
        }
        event.target.setSelectionRange(cursorPoint, cursorPoint);
      }, 0); // 1초
    }

    setData(replaceValue);
  };

  useEffect(() => {
    // console.log("init propt");
  }, []);

  return (
    <div>
      <label htmlFor="price">
        {label} : &nbsp;
        <input
          className={`border-4 px-3 py-1 ${
            type == "current" ? "text-right" : ""
          }`}
          name="price"
          type="type"
          value={data}
          {...props}
          onChange={inputHandler}
        />
      </label>
    </div>
  );
};

export default Input;
