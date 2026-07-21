import { useEffect } from "react";
import { useDesktopSelectionStore } from "../../state/desktopSelectionStore";

function DesktopSelectionLayer() {
    const {
        selecting,
        startX,
        startY,
        currentX,
        currentY,
        updateSelection,
        endSelection,
    } = useDesktopSelectionStore();

    useEffect(() => {
        function handleMouseMove(event: MouseEvent) {
            if (!useDesktopSelectionStore.getState().selecting)
                return;

            updateSelection(
                event.clientX,
                event.clientY
            );
        }

        function handleMouseUp() {
            endSelection();
        }

        window.addEventListener(
            "mousemove",
            handleMouseMove
        );

        window.addEventListener(
            "mouseup",
            handleMouseUp
        );

        return () => {
            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );

            window.removeEventListener(
                "mouseup",
                handleMouseUp
            );
        };
    }, [updateSelection, endSelection]);

    if (!selecting) return null;

    const left = Math.min(startX, currentX);
    const top = Math.min(startY, currentY);

    const width = Math.abs(currentX - startX);
    const height = Math.abs(currentY - startY);

    return (
        <div
            className="
                absolute
                pointer-events-none
                border
                border-sky-400
                bg-sky-400/20
            "
            style={{
                left,
                top,
                width,
                height,
            }}
        />
    );
}

export default DesktopSelectionLayer;