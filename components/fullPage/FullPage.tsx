"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

const FullPage = ({ pageText }: { pageText: String[] }) => {
  const outerDivRef = useRef<HTMLDivElement>(null);
  const currentPageNumber = useRef<number>(0);
  const canScroll = useRef<boolean>(true);
  const [page, setPage] = useState(0);

  const scrollHandler = (e: Event) => {
    e.preventDefault();
  };
  const scrollDown = () => {
    const pageHeight = outerDivRef.current?.children.item(0)?.clientHeight; // 화면
    const childrenView = outerDivRef.current?.children;
    const childrenCount = outerDivRef.current?.childNodes.length;

    if (outerDivRef.current && pageHeight) {
      if (Number(childrenCount) - 1 > currentPageNumber.current) {
        currentPageNumber.current++;
        setPage(currentPageNumber.current);
      }

      childrenView?.item(currentPageNumber.current)?.scrollIntoView({
        behavior: "smooth",
      });

      canScroll.current = false;
      setTimeout(() => {
        canScroll.current = true;
      }, 500);
    }
  };

  const scrollUp = () => {
    const pageHeight = outerDivRef.current?.children.item(0)?.clientHeight; // 화면
    const childrenView = outerDivRef.current?.children;

    if (outerDivRef.current && pageHeight) {
      if (currentPageNumber.current > 0) {
        currentPageNumber.current--;
        setPage(currentPageNumber.current);
      }
      childrenView?.item(currentPageNumber.current)?.scrollIntoView({
        behavior: "smooth",
      });

      canScroll.current = false;
      setTimeout(() => {
        canScroll.current = true;
      }, 500);
    }
  };
  const wheelHandler = (e: WheelEvent) => {
    e.preventDefault();
    if (!canScroll.current) return;

    const { deltaY } = e;

    if (deltaY > 0 && outerDivRef.current) {
      scrollDown();
    } else {
      scrollUp();
    }
  };
  const dotButtonHandler = (index: number) => {
    if (index > currentPageNumber.current) {
      currentPageNumber.current = index - 1;
      scrollDown();
    } else {
      currentPageNumber.current = index + 1;
      scrollUp();
    }
  };

  useEffect(() => {
    const outer = outerDivRef.current;
    if (!outer) return;

    outer.addEventListener("scroll", scrollHandler);
    outer.addEventListener("wheel", wheelHandler);
    return () => {
      outer.removeEventListener("scroll", scrollHandler);
      outer.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <>
      <div ref={outerDivRef}>
        {pageText &&
          pageText.map((value, index) => (
            <div key={index} className={styles.card}>
              {value}
            </div>
          ))}
      </div>
      <ul className={styles.dot_wrap}>
        {pageText &&
          pageText.map((value, index) => (
            <li
              key={index}
              className={`${styles.dot} ${index == page ? "bg-zinc-300" : ""}`}
              onClick={() => dotButtonHandler(index)}
            />
          ))}
      </ul>
    </>
  );
};

export default FullPage;
