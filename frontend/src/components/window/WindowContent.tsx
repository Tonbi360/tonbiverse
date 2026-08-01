import type { ReactNode } from "react";
import { ui } from "../../utils/theme";

type Props = {
  children: ReactNode;
};

function WindowContent({ children }: Props) {
  return (
    <div className={ui.windowContent}>
      {children}
    </div>
  );
}

export default WindowContent;
