import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function WindowContent({ children }: Props) {
  return (
    <div className="flex-1 bg-zinc-900 p-6 text-white overflow-auto">
      {children}
    </div>
  );
}

export default WindowContent;