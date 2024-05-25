"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { MoveLeft } from "lucide-react";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      className="flex hover:text-green-600 dark:hover:text-green-400 gap-2 transition-all duration-200 text-sm items-center"
      onClick={() => router.back()}
    >
      <MoveLeft strokeWidth={1} />
      Go Back
    </button>
  );
};

export default BackButton;
