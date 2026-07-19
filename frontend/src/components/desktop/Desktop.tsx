import DesktopIcons from "./DesktopIcons";
import Window from "../window/Window";
import { useWindowStore } from "../../state/windowStore";
import ApplicationRenderer from "../../core/applications/ApplicationRenderer";

function Desktop() {
  const windows = useWindowStore((state) => state.windows);

  return (
    <section className="relative flex-1 overflow-hidden">
      <DesktopIcons />

      {windows.map((window) => (
  <Window
    id={window.id}
    title={window.title}
>
    <ApplicationRenderer id={window.id} />
</Window>
))}
    </section>
  );
}

export default Desktop;