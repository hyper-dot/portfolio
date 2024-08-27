"use client";
import { ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleVisibility = () => {
    console.log(window.scrollY, window.innerHeight);
    if (window.scrollY > window.innerHeight / 2) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scrollend", toggleVisibility);
    return () => window.removeEventListener("scrollend", toggleVisibility);
  }, []);

  if (isVisible) {
    return (
      <button
        onClick={handleClick}
        className="fixed bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground md:right-8 2xl:bottom-8 2xl:right-8"
      >
        <ChevronUp strokeWidth={1.2} />
      </button>
    );
  } else {
    return null;
  }
};

export default ScrollButton;
