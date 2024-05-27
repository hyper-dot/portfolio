import BackButton from "@/components/BackButton";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-3xl px-2 mx-auto">
      <div className="pb-8 pt-8">
        <BackButton />
      </div>
      {children}
    </div>
  );
};

export default layout;
