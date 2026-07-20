import { useWindowStore } from "../../state/windowStore";

type Props = {
    id: string;
    icon?: string;
    active: boolean;
    minimized: boolean;
};

function DockItem({ id, icon, active, minimized }: Props) {
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
            className={[
                "relative",
                "flex",
                "h-14",
                "w-14",
                "items-center",
                "justify-center",
                "rounded-2xl",
                "border",
                "border-white/10",
                "text-white",
                "transition-all",
                "duration-200",
                active ? "scale-110 bg-white/20" : "bg-zinc-800/80",
                minimized ? "opacity-50" : "",
                "hover:scale-110",
            ].join(" ")}
        >
            <span className="text-2xl">{icon ?? "•"}</span>

            {active ? (
                <span className="absolute -bottom-1 h-1 w-6 rounded-full bg-blue-400" />
            ) : null}
        </button>
    );
}

export default DockItem;