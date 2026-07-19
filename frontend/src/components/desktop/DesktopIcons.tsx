import DesktopIcon from "./DesktopIcon";
import { applicationManager } from "../../core/applications/ApplicationManager";
import { useWindowStore } from "../../state/windowStore";

function DesktopIcons() {
  const openWindow = useWindowStore((state) => state.openWindow);

  return (
    <div className="grid grid-cols-2 gap-6 p-8">
      {applicationManager.getDesktopApps().map((app) => (
        <DesktopIcon
          key={app.id}
          icon={app.icon}
          label={app.name}
          onOpen={() =>
            openWindow({
              id: app.id,
              title: app.name,
            })
          }
        />
      ))}
    </div>
  );
}

export default DesktopIcons;