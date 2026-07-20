import DesktopIcons from "./DesktopIcons";
import Window from "../window/Window";
import { useWindowStore } from "../../state/windowStore";
import { useDesktopStore } from "../../state/desktopStore";
import ApplicationRenderer from "../../core/applications/ApplicationRenderer";
import WindowInteractionManager from "../window/WindowInteractionManager";
import DockManager from "../dock/DockManager";
import ContextMenu from "../context/ContextMenu";
import { useContextMenuStore } from "../../state/contextMenuStore";

function Desktop() {
    const windows = useWindowStore((state) => state.windows);
    const clearSelection = useDesktopStore(
        (state) => state.clearSelection
    );

    return (
        <section
            id="desktop"
            className="relative h-full w-full overflow-hidden"
            onClick={clearSelection}
            onContextMenu={(event) => {
                event.preventDefault();

                useContextMenuStore.getState().openMenu(
                    event.clientX,
                    event.clientY,
                    "desktop"
                );
            }}
        >
            <ContextMenu />

            <DesktopIcons />

            <WindowInteractionManager />

            {[...windows]
                .sort((a, b) => a.zIndex - b.zIndex)
                .map((window) => (
                    <Window key={window.id} window={window}>
                        <ApplicationRenderer id={window.id} />
                    </Window>
                ))}

            <DockManager />
        </section>
    );
}

export default Desktop;