"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { MoveLeft } from "lucide-react";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      className="flex gap-2 text-muted-foreground hover:text-primary transition-all duration-200 text-sm items-center"
      onClick={() => router.back()}
    >
      <MoveLeft strokeWidth={1} />
      Go Back
    </button>
  );
};

export default BackButton;
