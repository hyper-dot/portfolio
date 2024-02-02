"use client";
import React, { MouseEventHandler, useEffect, useState } from "react";

const RandomText = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [randomText, setRandomText] = useState("");

  // Generage random text
  // Function to generate random text
  const generateRandomText = () => {
    const characters =
      "ABCDE FGHIJKLM NOPQRSTU VWXYZa bcdefg h ij klmn opqr stuv wxyz 012 34 56 789";
    const textLength = 10000; // Adjust the length of the random text as needed
    let newText = "";

    for (let i = 0; i < textLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newText += characters.charAt(randomIndex);
    }

    return newText;
  };

  const handleMouseMove = (e: MouseEvent) => {
    setMouse({ x: e.clientX, y: e.clientY });
    const newRandomText = generateRandomText();
    setRandomText(newRandomText);
  };

  useEffect(() => {
    document.body.addEventListener("mousemove", handleMouseMove);

    // Remove event listener when component unmounts
    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <p className="absolute text-2xl opacity-[0.02] text-justify -z-10 max-h-screen overflow-hidden">
      {randomText}
    </p>
  );
};

export default RandomText;
