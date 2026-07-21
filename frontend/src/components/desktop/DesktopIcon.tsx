import React from "react";
import { useDesktopStore } from "../../state/desktopStore";
import { useDesktopDragStore } from "../../state/desktopDragStore";
import { useDesktopLayoutStore } from "../../state/desktopLayoutStore";


type DesktopIconProps = {
    id: string;
    icon: string;
    label: string;
    onOpen?: () => void;

    onMouseDown?: React.MouseEventHandler<HTMLButtonElement>;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

function DesktopIcon({
    id,
    icon,
    label,
    onOpen,
    onMouseDown,
    onClick,
}: DesktopIconProps) {
    const beginDrag = useDesktopDragStore(
        (state) => state.beginDrag
    );
    const icons = useDesktopLayoutStore(
        (state) => state.icons
    );

    const layout = icons.find(
        (icon) => icon.id === id
    );

    const selectedIcon = useDesktopStore(
        (state) => state.selectedIcon
    );

    const selectIcon = useDesktopStore(
        (state) => state.selectIcon
    );

    const selected = selectedIcon === id;

    return (
        <button
            draggable={false}
            onDragStart={(event) => {
                event.preventDefault();
            }}

            onMouseDown={(event) => {
                // Prevent native/browser drag visuals when we start our custom preview.
                event.preventDefault();

                onMouseDown?.(event);

                if (!layout) return;

                beginDrag(
                    id,
                    event.clientX,
                    event.clientY,
                    layout.column,
                    layout.row
                );
            }}
            onClick={(event) => {
                onClick?.(event);
                event.stopPropagation();
                selectIcon(id);
            }}
            onDoubleClick={onOpen}
            className={`

                flex
                w-24
                flex-col
                items-center
                gap-2
                rounded-lg
                p-2
                transition

                ${
                    selected
                        ? "bg-blue-500/30 ring-1 ring-blue-400"
                        : "hover:bg-white/10"
                }
            `}
        >
            <div className="text-5xl">{icon}</div>

            <span className="text-center text-sm">
                {label}
            </span>
        </button>
    );
}

export default DesktopIcon;
