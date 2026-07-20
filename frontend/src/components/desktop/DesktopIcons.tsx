import DesktopIcon from "./DesktopIcon";
import { applicationManager } from "../../core/applications/ApplicationManager";
import type { Application } from "../../core/applications/types";
import { useWindowStore } from "../../state/windowStore";

function DesktopIcons() {
  const openWindow = useWindowStore((state) => state.openWindow);

  return (
    <div className="grid grid-cols-2 gap-6 p-8">
      {applicationManager.getDesktopApps().map((app: Application) => (
        <DesktopIcon
          key={app.id}
          id={app.id}
          icon={app.icon}
          label={app.name}
          onOpen={() =>
            openWindow({
              id: app.id,
              title: app.name,
              icon: app.icon,
              x: 160,
              y: 80,
            })
          }
        />
      ))}
    </div>
  );
}

export default DesktopIcons;