"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "./styles.module.css";

const page = () => {
  const pRef1 = useRef(null);
  const pRef2 = useRef(null);
  const pRef3 = useRef(null);
  const pRef4 = useRef(null);
  const pRef5 = useRef(null);
  const pRef6 = useRef(null);

  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let count4 = 0;
  let count5 = 0;
  let count6 = 0;

  const textArr1 =
    "Yummy Tasty Delicious Useful Coding Yummy Yummmmy Yummmmmmmmmy yum".split(
      " "
    );
  const textArr2 =
    "Chicken Hamburger Pizza Salad Sushi Bibimbab Gimbab JJajangmyeon".split(
      " "
    );
  const textArr3 =
    "Let's Dive Into This Tutorial Take It Easy! Don't Worry".split(" ");
  const textArr4 =
    "Pure Moral Conscientious Meritorious Worthy Exemplary Upright ".split(" ");
  const textArr5 =
    "Let's Dive Into This Tutorial Take It Easy! Don't Worry".split(" ");
  const textArr6 =
    "Chicken Hamburger Pizza Salad Sushi Bibimbab Gimbab JJajangmyeon".split(
      " "
    );

  /** 초기 Text 지정 */
  const initTexts = (textArray: any) => {
    let innerText = "";
    textArray.push(...textArray);
    for (let i = 0; i < textArray.length; i++) {
      innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`;
    }
    return innerText;
  };

  /** 글자에따른 스크롤 동작 제어 */
  const marqueeText = (count: any, element: any, direction: any) => {
    if (count > element?.scrollWidth / 2) {
      count = 0;
    }
    element
      ? (element.style.transform = `translateX(${count * direction}px)`)
      : null;
    return count;
  };

  /** 글자 흐르는 애니메이션 추가 */
  const animate = () => {
    count1++;
    count2++;
    count3++;
    count4++;
    count5++;
    count6++;

    count1 = marqueeText(count1, pRef1.current, -1);
    count2 = marqueeText(count2, pRef2.current, 1);
    count3 = marqueeText(count3, pRef3.current, -1);
    count4 = marqueeText(count4, pRef4.current, 1);
    count5 = marqueeText(count5, pRef5.current, -1);
    count6 = marqueeText(count6, pRef6.current, 1);

    requestAnimationFrame(animate);
  };

  /** scroll 시 흐르는 속도 추가 */
  function scrollHandler() {
    count1 += 5;
    count2 += 5;
    count3 += 5;
    count4 += 5;
    count5 += 5;
    count6 += 5;
  }

  useEffect(() => {
    addEventListener("scroll", scrollHandler);
    requestAnimationFrame(animate);

    return () => cancelAnimationFrame(0);
  }, []);

  return (
    <div id={styles.auto_scroll_text_row_move}>
      <div className={styles.cover}>
        <p ref={pRef1} className={styles.first_parallel}>
          {initTexts(textArr1)}
        </p>
      </div>
      <div className={styles.cover}>
        <p ref={pRef2} className={styles.second_parallel}>
          {initTexts(textArr2)}
        </p>
      </div>
      <div className={styles.cover}>
        <p ref={pRef3} className={styles.second_parallel}>
          {initTexts(textArr3)}
        </p>
      </div>
      <div className={styles.cover}>
        <p ref={pRef4} className={styles.second_parallel}>
          {initTexts(textArr4)}
        </p>
      </div>
      <div className={styles.cover}>
        <p ref={pRef5} className={styles.second_parallel}>
          {initTexts(textArr5)}
        </p>
      </div>
      <div className={styles.cover}>
        <p ref={pRef6} className={styles.second_parallel}>
          {initTexts(textArr6)}
        </p>
      </div>
    </div>
  );
};

export default page;
