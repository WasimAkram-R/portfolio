import React from "react";
import { useEffect, useState } from "react";

const TextChange = () => {
  const texts = [
    "MERN STACK DEVELOPER",
    "MERN STACK DEVELOPER",
    "MERN STACK DEVELOPER",
  ];
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(true);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));

      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }
      if (endValue > texts[index].length + 18) {
        setIsForward(false);
      }
      if (endValue < 2.1) {
        setIsForward(true);
        setIndex((prev) => prev & texts.length);
      }
    }, 40);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);
  return (
    <div style={{ transition: "ease", transitionDuration: 300 }}>
      {currentText}
    </div>
  );
};

export default TextChange;
