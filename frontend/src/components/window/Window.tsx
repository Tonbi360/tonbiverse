import WindowHeader from "./WindowHeader";
import WindowContent from "./WindowContent";
import { useWindowStore, type OpenWindow } from "../../state/windowStore";
import { useInteractionStore } from "../../state/interactionStore";
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
            }}
            className={[
                "absolute",
                "flex",
                "flex-col",
                "overflow-hidden",
                "rounded-xl",
                "border",
                "border-white/10",
                "bg-zinc-900",
                "shadow-2xl",
                "select-none",
                maximized ? "border-blue-300" : "",
            ].join(" ")}
        >
            <WindowHeader
                title={title}
                onClose={() => closeWindow(id)}
                onMinimize={() => minimizeWindow(id)}
                onMaximize={() => toggleMaximize(id)}
                onMouseDown={handleMouseDown}
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
