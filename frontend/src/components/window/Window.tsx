import WindowHeader from "./WindowHeader";
import WindowContent from "./WindowContent";
import { useWindowStore } from "../../state/windowStore";
import { ReactNode } from "react";

type WindowProps = {
  id: string;
  title: string;
  children: ReactNode;
};

function Window({
  id,
  title,
  children,
}: WindowProps){
    const closeWindow = useWindowStore((state) => state.closeWindow);
  return (
    <div
      className="
        absolute
        left-40
        top-20
        flex
        h-[600px]
        w-[900px]
        flex-col
        overflow-hidden
        rounded-xl
        border
        border-white/10
        bg-zinc-900
        shadow-2xl
      "
    >
      <WindowHeader
  title={title}
  onClose={() => closeWindow(id)}
/>
      <WindowContent>
  {children}
</WindowContent>
    </div>
  );
}

export default Window;