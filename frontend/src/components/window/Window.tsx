import WindowHeader from "./WindowHeader";
import WindowContent from "./WindowContent";
import { useWindowStore, type OpenWindow } from "../../state/windowStore";
import { useInteractionStore } from "../../state/interactionStore";
import { ui } from "../../utils/theme";
import WindowResizeHandle, { type ResizeDirection } from "./WindowResizeHandle";
import type { ReactNode, MouseEvent as ReactMouseEvent } from "react";

type WindowProps = {
    window: OpenWindow;
    children: ReactNode;
};

function Window({ window, children }: WindowProps) {
    const {
        id,
        title,
        x,
        y,
        width,
        height,
        minimized,
        maximized,
        zIndex,
    } = window;

    const closeWindow = useWindowStore((state) => state.closeWindow);
    const minimizeWindow = useWindowStore((state) => state.minimizeWindow);
    const focusWindow = useWindowStore((state) => state.focusWindow);
    const toggleMaximize = useWindowStore((state) => state.toggleMaximize);

    const handleMouseDown = (
        event: ReactMouseEvent<HTMLDivElement>
    ) => {
        if (maximized) return;

        focusWindow(id);

        useInteractionStore.getState().beginDrag(
            id,
            event.clientX,
            event.clientY,
            x,
            y
        );
    };

    const resizeDirections: ResizeDirection[] = [
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "top-right",
        "bottom-left",
        "bottom-right",
    ];

    const handleResizeMouseDown = (
        event: ReactMouseEvent<HTMLDivElement>,
        direction: ResizeDirection
    ) => {
        if (maximized) return;

        event.stopPropagation();

        focusWindow(id);

        useInteractionStore.getState().beginResize(
            id,
            event.clientX,
            event.clientY,
            x,
            y,
            width,
            height,
            direction
        );
    };

    if (minimized) {
        return null;
    }

    return (
        <div
            style={{
                left: x,
                top: y,
                width,
                height,
                zIndex,
                ...(maximized ? { borderColor: "var(--accent)" } : {}),
            }}
            className={ui.window}
        >
            <WindowHeader
                title={title}
                onClose={() => closeWindow(id)}
                onMinimize={() => minimizeWindow(id)}
                onMaximize={() => toggleMaximize(id)}
                onMouseDown={handleMouseDown}
                onDoubleClick={() => toggleMaximize(id)}
            />
            <WindowContent>{children}</WindowContent>
            {resizeDirections.map((direction) => (
                <WindowResizeHandle
                    key={direction}
                    direction={direction}
                    onMouseDown={handleResizeMouseDown}
                />
            ))}
        </div>
    );
}

export default Window;
