import React, { ReactNode } from "react";

const FormErrors = ({ children }: { children: ReactNode }) => {
  return <p className="text-red-500 text-xs">{children}</p>;
};

export default FormErrors;
