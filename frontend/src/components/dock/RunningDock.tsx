import { useWindowStore } from "../../state/windowStore";
import DockItem from "./DockItem";

function RunningDock() {
    const windows = useWindowStore((state) => state.windows);

    return (
        <div
            className={[
                "absolute",
                "flex",
                "items-center",
                "gap-3",
                "rounded-3xl",
                "border",
                "border-white/10",
                "px-4",
                "py-3",
                "shadow-2xl",
                "bg-zinc-900",
                "pointer-events-auto",
                "left-1/2",
                "-translate-x-1/2",
                "bottom-4",
                "flex-row",
            ].join(" ")}
        >
            {windows.length === 0 && (
                <span className="text-zinc-500 text-sm px-2">No open apps</span>
            )}
            {windows.map((window) => (
                <DockItem
                    key={window.id}
                    id={window.id}
                    icon={window.icon}
                    active={window.active}
                    minimized={window.minimized}
                />
            ))}
        </div>
    );
}

export default RunningDock;
