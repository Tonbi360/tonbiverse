import { useEffect } from "react";

import { useInteractionStore } from "../../state/interactionStore";
import { useWindowStore } from "../../state/windowStore";
import { useSnapStore } from "../../state/snapStore";

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

    const snapWindow = useWindowStore(
        (state) => state.snapWindow
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
                case "dragging": {
                    const clampedX = interaction.startWindowX + dx;
                    const clampedY = interaction.startWindowY + dy;

                    moveWindow(win.id, clampedX, clampedY);

                    const SNAP_DISTANCE = 30;
                    const desktop = document.getElementById("desktop");

                    if (!desktop) return;

                    const snapStore = useSnapStore.getState();

                    if (clampedY <= SNAP_DISTANCE) {
                        snapStore.setTarget("top");
                    } else if (clampedX <= SNAP_DISTANCE) {
                        snapStore.setTarget("left");
                    } else if (
                        clampedX + win.width >=
                        desktop.clientWidth - SNAP_DISTANCE
                    ) {
                        snapStore.setTarget("right");
                    } else {
                        snapStore.setTarget("none");
                    }

                    break;
                }

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
                        const desiredWidth =
                            interaction.startWidth - dx;

                        newWidth = Math.max(
                            win.minWidth,
                            desiredWidth
                        );
                        newX =
                            interaction.startWindowX +
                            (interaction.startWidth - newWidth);
                    }

                    if (edge.includes("bottom")) {
                        newHeight = interaction.startHeight + dy;
                    }

                    if (edge.includes("top")) {
                        const desiredHeight =
                            interaction.startHeight - dy;

                        newHeight = Math.max(
                            win.minHeight,
                            desiredHeight
                        );
                        newY =
                            interaction.startWindowY +
                            (interaction.startHeight - newHeight);
                    }

                    moveWindow(win.id, newX, newY);
                    resizeWindow(win.id, newWidth, newHeight);

                    break;
                }
            }
        }

        function handleMouseUp() {
            const interaction = useInteractionStore.getState();
            const target = useSnapStore.getState().target;

            if (interaction.windowId) {
                if (target === "left") {
                    snapWindow(interaction.windowId, "left");
                } else if (target === "right") {
                    snapWindow(interaction.windowId, "right");
                } else if (target === "top") {
                    useWindowStore
                        .getState()
                        .toggleMaximize(interaction.windowId);
                }
            }

            useSnapStore.getState().setTarget("none");
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
    }, [endInteraction, moveWindow, resizeWindow, snapWindow]);

    return null;
}

export default WindowInteractionManager;