import { useSystemRailStore } from "../../../state/systemRailStore";

import NetworkPanel from "./panels/NetworkPanel";
import VolumePanel from "./panels/VolumePanel";
import BatteryPanel from "./panels/BatteryPanel";
import NotificationPanel from "./panels/NotificationPanel";
import QuickSettingsPanel from "./panels/QuickSettingsPanel";

function SystemRailPanel() {
    const openPanel = useSystemRailStore(
        (state) => state.openPanel
    );

    switch (openPanel) {
        case "network":
            return <NetworkPanel />;

        case "volume":
            return <VolumePanel />;

        case "battery":
            return <BatteryPanel />;

        case "notifications":
            return <NotificationPanel />;

        case "settings":
            return <QuickSettingsPanel />;

        default:
            return null;
    }
}

export default SystemRailPanel;

