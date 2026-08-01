import type { SettingsPage } from "./types";

export const SETTINGS_SECTIONS: Array<{
    id: SettingsPage;
    title: string;
    icon: string;
}> = [
    {
        id: "appearance",
        title: "Appearance",
        icon: "🎨",
    },
    {
        id: "desktop",
        title: "Desktop",
        icon: "🖥️",
    },
    {
        id: "dock",
        title: "Dock",
        icon: "📌",
    },
    {
        id: "system",
        title: "System",
        icon: "⚙️",
    },
    {
        id: "about",
        title: "About",
        icon: "ℹ️",
    },
];

