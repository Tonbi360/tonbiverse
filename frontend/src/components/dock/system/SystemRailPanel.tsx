import { useSystemRailStore } from "../../../state/systemRailStore";

import NetworkPanel from "./panels/NetworkPanel";
import VolumePanel from "./panels/VolumePanel";
import BatteryPanel from "./panels/BatteryPanel";
import NotificationPanel from "./panels/NotificationPanel";
import QuickSettingsPanel from "./panels/QuickSettingsPanel";

const panelStyles =
    "bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl text-white w-72 max-h-96 overflow-y-auto";

function SystemRailPanel() {
    const openPanel = useSystemRailStore(
        (state) => state.openPanel
    );

    let content = null;

    switch (openPanel) {
        case "network":
            content = <NetworkPanel />;
            break;
        case "volume":
            content = <VolumePanel />;
            break;
        case "battery":
            content = <BatteryPanel />;
            break;
        case "notifications":
            content = <NotificationPanel />;
            break;
        case "settings":
            content = <QuickSettingsPanel />;
            break;
        default:
            return null;
    }

    return <div className={panelStyles}>{content}</div>;
}

export default SystemRailPanel;

