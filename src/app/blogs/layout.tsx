import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return <div className="flex-1 px-2">{children}</div>;
}
