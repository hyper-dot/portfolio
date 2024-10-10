"use client";
import { useEffect } from "react";
import { Toaster, useToasterStore, toast } from "react-hot-toast";

type Props = {
  limit?: number;
};
export const ToasterWithLimit = ({ limit = 3 }: Props) => {
  const { toasts } = useToasterStore();

  useEffect(() => {
    toasts
      .filter((t) => t.visible) // Only consider visible toasts
      .filter((_, i) => i >= limit) // Is toast index over limit?
      .forEach((t) => toast.dismiss(t.id)); // Dismiss – Use toast.remove(t.id) for no exit animation
  }, [toasts, limit]);
  return (
    <Toaster
      toastOptions={{
        duration: 4000,
        position: "top-center",
        style: {
          backgroundColor: "#212121",
          borderRadius: "100px",
          color: "white",
          fontSize: "0.9rem",
          fontWeight: "500",
        },
      }}
    ></Toaster>
  );
};
