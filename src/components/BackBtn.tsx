"use client";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackBtn = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className="flex items-center gap-2">
      <MoveLeft strokeWidth={1} />
      Back
    </button>
  );
};

export default BackBtn;
