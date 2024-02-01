"use client";
import Logo from "@/components/Logo";
import Link from "next/link";
import React, { MouseEventHandler, useEffect, useState } from "react";

import dynamic from "next/dynamic";
import ThemeSwitcher from "@/components/ThemeSwitcher";
const Audio = dynamic(() => import("@/components/Audio"), { ssr: false });

const Page = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState("#000"); // Initial color
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

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    setMouse({ x: e.clientX, y: e.clientY });

    // Generate color based on mouse coordinates
    const newColor = `rgb(${100 + (mouse.x % 256)}, ${100 + (mouse.y % 256)}, ${(mouse.x + mouse.y) % 256})`;

    // Check if the generated color is valid
    setColor(newColor);
    const newRandomText = generateRandomText();
    setRandomText(newRandomText);
  };

  useEffect(() => {
    console.log(color);
  }, [color]);

  return (
    <div onMouseMove={handleMouseMove}>
      <iframe
        src="/time-ticking.mp3"
        allow="autoplay"
        id="audio"
        className="hidden"
      ></iframe>
      <p className="absolute text-2xl opacity-10 text-justify -z-10 max-h-screen overflow-hidden">
        {randomText}
      </p>
      <div className="flex min-h-screen flex-col justify-between">
        <div className="flex items-center font-bold justify-between px-4">
          <div className="w-20 p-2">
            <Logo />
          </div>
          <div className="flex gap-4">
            <Link href="" className="">
              About
            </Link>
            <Link href="" className="">
              Blogs
            </Link>
            <Link href="" className="">
              Work
            </Link>
          </div>
          <div>
            <ThemeSwitcher />
          </div>
        </div>

        <div className="text-7xl font-bold text-center max-w-[90%] mx-auto">
          <span style={{ color: color }} className="text-[20rem]">
            Hi
          </span>{" "}
          I am <br /> John Doe
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Page;
