"use client";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

const FormSubmitBtn = ({
  isSubmitting,
  children,
}: {
  isSubmitting: boolean;
  children: ReactNode;
}) => {
  return (
    <Button disabled={isSubmitting} className="inline-flex gap-2">
      {isSubmitting && <Loader size={20} className="animate-spin" />} {children}
    </Button>
  );
};

export default FormSubmitBtn;
