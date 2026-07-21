import { useEffect } from "react";

import { useDesktopDragStore } from "../../state/desktopDragStore";
import { useDesktopLayoutStore } from "../../state/desktopLayoutStore";

function DesktopInteractionManager() {
    const moveIcon = useDesktopLayoutStore(
        (state) => state.moveIcon
    );

    const endDrag = useDesktopDragStore(
        (state) => state.endDrag
    );

    const startDragging = useDesktopDragStore(
        (state) => state.startDragging
    );

    useEffect(() => {
        function handleMouseMove(
            event: MouseEvent
        ) {
            const drag =
                useDesktopDragStore.getState();

            drag.updateMouse(
                event.clientX,
                event.clientY
            );

            const dx =
                event.clientX -
                drag.startMouseX;

            const dy =
                event.clientY -
                drag.startMouseY;

            const distance =
                Math.sqrt(dx * dx + dy * dy);

            if (
                !drag.dragging &&
                drag.iconId &&
                distance > 5
            ) {
                startDragging();
            }

            if (!drag.iconId) {
                return;
            }

            if (!drag.dragging) {
                return;
            }


            // Temporary conversion
            const column =
                drag.startColumn +
                Math.round(dx / 120);

            const row =
                drag.startRow +
                Math.round(dy / 120);

            moveIcon(
                drag.iconId,
                Math.max(0, column),
                Math.max(0, row)
            );
        }

        function handleMouseUp() {
            endDrag();
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
    }, [moveIcon, endDrag]);

    return null;
}

export default DesktopInteractionManager;