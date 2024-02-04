import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <div className="min-h-[80vh]">{children}</div>;
};

export default layout;
