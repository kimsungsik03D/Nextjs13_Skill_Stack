"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

const page = () => {
  const outerDivRef = useRef<HTMLDivElement>(null);
  const currentPageNumber = useRef<number>(0);
  const canScroll = useRef<boolean>(true);
  const [page, setPage] = useState(0);

  const scrollHandler = (e: Event) => {
    e.preventDefault();
  };
  const scrollDown = () => {
    setPage(1);
    const pageHeight = outerDivRef.current?.children.item(0)?.clientHeight; // 화면
    const childrenView = outerDivRef.current?.children;
    const childrenCount = outerDivRef.current?.childNodes.length;

    if (outerDivRef.current && pageHeight) {
      if (Number(childrenCount) - 1 > currentPageNumber.current)
        currentPageNumber.current++;

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
    setPage(page - 1);
    const pageHeight = outerDivRef.current?.children.item(0)?.clientHeight; // 화면
    const childrenView = outerDivRef.current?.children;

    if (outerDivRef.current && pageHeight) {
      if (currentPageNumber.current > 0) currentPageNumber.current--;
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
    // <div className="bg-neutral-900 text-white">
    <div>
      <div ref={outerDivRef}>
        <div className={styles.card}>page 1</div>
        <div className={styles.card}>page 2</div>
        <div className={styles.card}>page 3</div>
        <div className={styles.card}>page 4</div>
      </div>
      <ul className={styles.dot_wrap}>
        <li className={`${styles.dot} bg-zinc-300`}></li>
        <li className={`${styles.dot}`}></li>
        <li className={`${styles.dot}`}></li>
        <li className={`${styles.dot}`}></li>
      </ul>
    </div>
  );
};

export default page;
