import WindowControls from "./WindowControls";
import type { MouseEvent as ReactMouseEvent } from "react";

type Props = {
    title: string;

    onClose: () => void;

    onMinimize: () => void;

    onMaximize: () => void;

    onMouseDown: (
        event: ReactMouseEvent<HTMLDivElement>
    ) => void;
};

function WindowHeader({
    title,
    onClose,
    onMinimize,
    onMaximize,
    onMouseDown,
}: Props) {
    return (
        <header
            onMouseDown={onMouseDown}
            onDoubleClick={onMaximize}
            className="
                flex
                h-10
                items-center
                justify-between
                border-b
                border-white/10
                bg-zinc-800
                px-4
                select-none
                cursor-move
            "
        >
            <span
                className="
                    truncate
                    text-sm
                    font-medium
                    text-white
                "
            >
                {title}
            </span>

            <WindowControls
                onClose={onClose}
                onMinimize={onMinimize}
                onMaximize={onMaximize}
            />
        </header>
    );
}

export default WindowHeader;