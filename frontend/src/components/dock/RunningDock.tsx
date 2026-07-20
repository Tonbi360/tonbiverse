import { useWindowStore } from "../../state/windowStore";
import DockItem from "./DockItem";

function RunningDock() {
    const windows = useWindowStore((state) => state.windows);

    return (
        <div
            className="
                absolute
                bottom-6
                left-1/2
                -translate-x-1/2
                flex
                gap-3
                rounded-3xl
                border
                border-white/10
                bg-black/40
                px-4
                py-3
                shadow-2xl
                backdrop-blur-xl
                pointer-events-auto
            "
        >
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