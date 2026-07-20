import type { MouseEvent as ReactMouseEvent } from "react";

export type ResizeDirection =
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";

export type ResizeEdge = "none" | ResizeDirection;

type Props = {
    direction: ResizeDirection;
    onMouseDown: (
        event: ReactMouseEvent<HTMLDivElement>,
        direction: ResizeDirection
    ) => void;
};

function WindowResizeHandle({
    direction,
    onMouseDown,
}: Props) {
    const positionClasses = {
        top: "top-0 left-2 right-2 h-2 cursor-ns-resize",
        bottom: "bottom-0 left-2 right-2 h-2 cursor-ns-resize",
        left: "left-0 top-2 bottom-2 w-2 cursor-ew-resize",
        right: "right-0 top-2 bottom-2 w-2 cursor-ew-resize",
        "top-left": "top-0 left-0 h-3 w-3 cursor-nwse-resize",
        "top-right": "top-0 right-0 h-3 w-3 cursor-nesw-resize",
        "bottom-left": "bottom-0 left-0 h-3 w-3 cursor-nesw-resize",
        "bottom-right": "bottom-0 right-0 h-3 w-3 cursor-nwse-resize",
    } as const;

    return (
        <div
            onMouseDown={(event) => {
                event.stopPropagation();
                onMouseDown(event, direction);
            }}
            className={`absolute z-20 ${positionClasses[direction]}`}
        />
    );
}

export default WindowResizeHandle;