import WindowControls from "./WindowControls";
import type { MouseEvent as ReactMouseEvent } from "react";
import { ui } from "../../utils/theme";

type Props = {
    title: string;

    onClose: () => void;

    onMinimize: () => void;

    onMaximize: () => void;

    onMouseDown: (
        event: ReactMouseEvent<HTMLDivElement>
    ) => void;

    onDoubleClick: () => void;
};

function WindowHeader({
    title,
    onClose,
    onMinimize,
    onMaximize,
    onMouseDown,
    onDoubleClick,
}: Props) {
    return (
        <header
            onMouseDown={onMouseDown}
            onDoubleClick={onDoubleClick}
            className={ui.windowHeader}
        >
            <span
                className="
                    truncate
                    text-sm
                    font-medium
                    text-window
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