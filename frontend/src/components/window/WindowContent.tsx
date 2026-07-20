import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function WindowContent({ children }: Props) {
  return (
    <div className="min-h-0 flex-1 overflow-auto bg-zinc-900 p-6 text-white">
      {children}
    </div>
  );
}

export default WindowContent;