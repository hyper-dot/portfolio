"use client";
import { ReactNode } from "react";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const FormSubmitBtn = ({
  isSubmitting,
  children,
  className,
}: {
  isSubmitting: boolean;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Button
      disabled={isSubmitting}
      className={cn("inline-flex gap-2", className)}
    >
      {isSubmitting && <Loader size={20} className="animate-spin" />} {children}
    </Button>
  );
};

export default FormSubmitBtn;
