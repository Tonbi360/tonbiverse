import { useSettingsStore } from "./state/settingsStore";

import AppearancePage from "./pages/AppearancePage";
import DesktopPage from "./pages/DesktopPage";
import DockPage from "./pages/DockPage";
import SystemPage from "./pages/SystemPage";
import AboutPage from "./pages/AboutPage";

function SettingsContent() {
    const page = useSettingsStore(
        (state) => state.page
    );

    return (
        <main
            className="
                flex-1
                overflow-auto
                p-8
                text-inherit
                bg-transparent
            "
        >
            {page === "appearance" && (
                <AppearancePage />
            )}

            {page === "desktop" && (
                <DesktopPage />
            )}

            {page === "dock" && (
                <DockPage />
            )}

            {page === "system" && (
                <SystemPage />
            )}

            {page === "about" && (
                <AboutPage />
            )}
        </main>
    );
}

export default SettingsContent;
