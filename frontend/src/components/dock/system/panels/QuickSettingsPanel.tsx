import { useWindowStore } from "../../../../state/windowStore";
import { useDockStore } from "../../../../state/dockStore";
import { useThemeStore } from "../../../../state/themeStore";

function QuickSettingsPanel() {
    const openWindow = useWindowStore((state) => state.openWindow);
    const position = useDockStore((state) => state.position);
    const setPosition = useDockStore((state) => state.setPosition);
    const iconSize = useDockStore((state) => state.iconSize);
    const setIconSize = useDockStore((state) => state.setIconSize);
    const toggleAnimations = useDockStore((state) => state.setAnimations);
    const animations = useDockStore((state) => state.animations);
    const theme = useThemeStore((state) => state.theme);
    const toggleTheme = useThemeStore((state) => state.toggleTheme);

    const openSettings = () => {
        openWindow({
            id: "settings",
            title: "Settings",
            icon: "⚙️",
        });
    };

    return (
        <div className="w-72 p-4 space-y-4">
            <h2 className="text-lg font-semibold text-white">Quick Settings</h2>

            {/* Theme toggle */}
            <button
                onClick={toggleTheme}
                className="w-full flex items-center justify-between rounded-xl bg-zinc-800 px-4 py-3 hover:bg-zinc-700 transition"
            >
                <span className="text-white">Theme</span>
                <span className="text-zinc-300">{theme === "dark" ? "🌙 Dark" : "☀️ Light"}</span>
            </button>

            {/* Dock position */}
            <div className="space-y-2">
                <span className="text-sm text-zinc-400">Dock Position</span>
                <div className="flex gap-2">
                    {(["left", "bottom", "right"] as const).map((p) => (
                        <button
                            key={p}
                            onClick={() => setPosition(p)}
                            className={`flex-1 rounded-lg px-3 py-2 text-sm capitalize transition ${
                                position === p
                                    ? "bg-zinc-700 text-white"
                                    : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                            }`}
                        >
                            {p}
                        </button>
                    ))}
                </div>
            </div>

            {/* Icon size */}
            <div className="space-y-2">
                <span className="text-sm text-zinc-400">Icon Size</span>
                <input
                    type="range"
                    min={32}
                    max={96}
                    value={iconSize}
                    onChange={(e) => setIconSize(Number(e.target.value))}
                    className="w-full accent-blue-500"
                />
            </div>

            {/* Animations toggle */}
            <button
                onClick={() => toggleAnimations(!animations)}
                className="w-full flex items-center justify-between rounded-xl bg-zinc-800 px-4 py-3 hover:bg-zinc-700 transition"
            >
                <span className="text-white">Animations</span>
                <span className="text-zinc-300">{animations ? "✨ On" : "🚫 Off"}</span>
            </button>

            {/* Open full settings */}
            <button
                onClick={openSettings}
                className="w-full rounded-xl bg-zinc-800 px-4 py-3 text-center hover:bg-zinc-700 transition font-medium text-white"
            >
                ⚙️ Open Settings
            </button>
        </div>
    );
}

export default QuickSettingsPanel;

