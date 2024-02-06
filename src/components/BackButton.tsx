"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { MoveLeft } from "lucide-react";

const BackButton = () => {
  const router = useRouter();
  return (
    <button className="flex gap-2" onClick={() => router.back()}>
      <MoveLeft />
      Go Back
    </button>
  );
};

export default BackButton;
