import DesktopIconLayer from "./DesktopIconLayer";
import { useDesktopStore } from "../../state/desktopStore";
import { useContextMenuStore } from "../../state/contextMenuStore";
import DesktopInteractionManager from "./DesktopInteractionManager";
import DesktopWallpaper from "./DesktopWallpaper";
import OverlayLayer from "./OverlayLayer";
import DesktopSelectionLayer from "./DesktopSelectionLayer";
import WindowLayer from "./WindowLayer";
import DockLayer from "./DockLayer";
import DesktopDragPreview from "./DesktopDragPreview";


function Desktop() {
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
            <DesktopWallpaper />

            <DesktopInteractionManager />

            <DesktopDragPreview />

            <OverlayLayer />

            <DesktopSelectionLayer />

            <DesktopIconLayer />

            <WindowLayer />

            <DockLayer />
        </section>
    );
}

export default Desktop;