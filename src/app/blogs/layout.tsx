import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return <div className="background-div flex-1 px-2">{children}</div>;
}
