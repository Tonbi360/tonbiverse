import { useEffect } from "react";
import DesktopIcon from "./DesktopIcon";
import { applicationManager } from "../../core/applications/ApplicationManager";
import type { Application } from "../../core/applications/types";
import { useWindowStore } from "../../state/windowStore";
import { useDesktopLayoutStore } from "../../state/desktopLayoutStore";
import {
  DESKTOP_GRID_X,
  DESKTOP_GRID_Y,
  DESKTOP_PADDING_X,
  DESKTOP_PADDING_Y,
} from "../../core/desktop/layout";

function DesktopIcons() {
  const openWindow = useWindowStore((state) => state.openWindow);
  const registerIcon = useDesktopLayoutStore((state) => state.registerIcon);
  const icons = useDesktopLayoutStore((state) => state.icons);

  useEffect(() => {
    applicationManager.getDesktopApps().forEach((app) => {
      registerIcon(app.id);
    });
  }, [registerIcon]);

  const layoutLookup = new Map(
    icons.map((icon) => [icon.id, icon])
  );

  console.log(icons);

  return (
    <div className="relative h-full w-full">
      {applicationManager.getDesktopApps().map((app: Application) => {
        const layout = layoutLookup.get(app.id);

        const column = layout?.column ?? 0;
        const row = layout?.row ?? 0;

        const x = DESKTOP_PADDING_X + column * DESKTOP_GRID_X;
        const y = DESKTOP_PADDING_Y + row * DESKTOP_GRID_Y;

        return (
          <div
            key={app.id}
            className="absolute"
            style={{
              left: x,
              top: y,
            }}
          >
            <DesktopIcon
              id={app.id}
              icon={app.icon}
              label={app.name}
              onOpen={() =>
                openWindow({
                  id: app.id,
                  title: app.name,
                  icon: app.icon,
                })
              }
            />
          </div>
        );
      })}
    </div>
  );
}

export default DesktopIcons;