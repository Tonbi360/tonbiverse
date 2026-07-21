import SystemRail from "./system/SystemRail";
import SystemRailPanel from "./system/SystemRailPanel";
import ClockWidget from "./system/ClockWidget";
import SystemDivider from "./system/SystemDivider";
import NotificationButton from "./system/NotificationButton";
import WifiButton from "./system/WifiButton";
import VolumeButton from "./system/VolumeButton";
import BatteryButton from "./system/BatteryButton";
import QuickSettingsButton from "./system/QuickSettingsButton";

function SystemDock() {
    return (
        <div
            className="
                absolute
                right-4
                bottom-4

                flex
                items-end
                gap-4

                pointer-events-none
            
            "
        >
            <SystemRailPanel />


            <SystemRail>
                <ClockWidget />

                <SystemDivider />

                <NotificationButton />
                <WifiButton />
                <VolumeButton />
                <BatteryButton />

                <SystemDivider />

                <QuickSettingsButton />
            </SystemRail>
        </div>
    );
}

export default SystemDock;


