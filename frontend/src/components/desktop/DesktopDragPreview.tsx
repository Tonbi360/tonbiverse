import { useDesktopDragStore } from "../../state/desktopDragStore";

function DesktopDragPreview() {
    const drag = useDesktopDragStore();

    if (!drag.dragging || !drag.iconId) {
        return null;
    }

    return (
        <div
            className="pointer-events-none absolute z-[999] rounded-lg bg-white/20 px-4 py-3 backdrop-blur"
            style={{
                left: drag.currentMouseX + 12,
                top: drag.currentMouseY + 12,
            }}
        >
            {drag.iconId}
        </div>
    );
}

export default DesktopDragPreview;

