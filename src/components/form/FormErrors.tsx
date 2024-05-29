import React, { ReactNode } from "react";

const FormErrors = ({ children }: { children: ReactNode }) => {
  return <p className="text-destructive text-xs">{children}</p>;
};

export default FormErrors;
