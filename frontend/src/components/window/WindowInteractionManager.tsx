import { useEffect } from "react";

import { useInteractionStore } from "../../state/interactionStore";
import { useWindowStore } from "../../state/windowStore";

function WindowInteractionManager() {
    const moveWindow = useWindowStore(
        (state) => state.moveWindow
    );

    const resizeWindow = useWindowStore(
        (state) => state.resizeWindow
    );

    const endInteraction = useInteractionStore(
        (state) => state.endInteraction
    );

    useEffect(() => {
        function handleMouseMove(
            event: MouseEvent
        ) {
            const interaction =
                useInteractionStore.getState();

            if (
                interaction.mode === "idle" ||
                !interaction.windowId
            ) {
                return;
            }

            const win = useWindowStore
                .getState()
                .windows.find(
                    (w) => w.id === interaction.windowId
                );

            if (!win) return;

            const dx =
                event.clientX - interaction.startMouseX;

            const dy =
                event.clientY - interaction.startMouseY;

            switch (interaction.mode) {
                case "dragging":
                    moveWindow(
                        win.id,
                        interaction.startWindowX + dx,
                        interaction.startWindowY + dy
                    );
                    break;

                case "resizing": {
                    let newX = interaction.startWindowX;
                    let newY = interaction.startWindowY;

                    let newWidth = interaction.startWidth;
                    let newHeight = interaction.startHeight;

                    const edge = interaction.edge;

                    if (edge.includes("right")) {
                        newWidth = interaction.startWidth + dx;
                    }

                    if (edge.includes("left")) {
                        newWidth = interaction.startWidth - dx;
                        newX = interaction.startWindowX + dx;
                    }

                    if (edge.includes("bottom")) {
                        newHeight = interaction.startHeight + dy;
                    }

                    if (edge.includes("top")) {
                        newHeight = interaction.startHeight - dy;
                        newY = interaction.startWindowY + dy;
                    }

                    moveWindow(win.id, newX, newY);
                    resizeWindow(win.id, newWidth, newHeight);

                    break;
                }
            }
        }

        function handleMouseUp() {
            endInteraction();
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
    }, [endInteraction, moveWindow, resizeWindow]);

    return null;
}

export default WindowInteractionManager;