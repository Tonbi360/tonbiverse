import { useWindowStore } from "../../state/windowStore";
import { useDockStore } from "../../state/dockStore";

type Props = {
    id: string;
    icon?: string;
    active: boolean;
    minimized: boolean;
};

function DockItem({ id, icon, active, minimized }: Props) {
    const iconSize = useDockStore(
        (state) => state.iconSize
    );

    const focusWindow = useWindowStore(
        (state) => state.focusWindow
    );
    const minimizeWindow = useWindowStore(
        (state) => state.minimizeWindow
    );
    const restoreWindow = useWindowStore(
        (state) => state.restoreWindow
    );

    const handleClick = () => {
        if (active) {
            minimizeWindow(id);
            return;
        }

        if (minimized) {
            restoreWindow(id);
            return;
        }

        focusWindow(id);
    };

    return (
        <button
            onClick={handleClick}
            style={{
                width: iconSize,
                height: iconSize,
            }}
            className={[
                "relative",
                "flex",
                "items-center",
                "justify-center",
                "rounded-2xl",
                "border",
                "border-white/10",
                "text-white",
                "transition-all",
                "duration-200",
                active ? "scale-110 bg-zinc-700" : "bg-zinc-800",
                minimized ? "opacity-50" : "",
                "hover:scale-110",
            ].join(" ")}
        >
            <span
                style={{
                    fontSize: iconSize * 0.45,
                }}
            >{icon ?? "•"}</span>

            {active ? (
                <span
                    className="absolute -bottom-1 h-1 w-6 rounded-full"
                    style={{ backgroundColor: "var(--accent)" }}
                />
            ) : null}
        </button>
    );
}

export default DockItem;
