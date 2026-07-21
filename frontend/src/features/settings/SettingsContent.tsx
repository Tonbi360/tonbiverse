import { useSettingsStore } from "./state/settingsStore";

import AppearancePage from "./pages/AppearancePage";
import DesktopPage from "./pages/DesktopPage";
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
            "
        >
            {page === "appearance" && (
                <AppearancePage />
            )}

            {page === "desktop" && (
                <DesktopPage />
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

