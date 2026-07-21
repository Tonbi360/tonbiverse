import { useSystemRailStore } from "../../../state/systemRailStore";

import SystemRailButton from "./SystemRailButton";

function BatteryButton() {
    const toggle = useSystemRailStore(
        (state) => state.toggle
    );

    return (
        <SystemRailButton
            onClick={() => toggle("battery")}
        >
            <span className="text-lg">🔋</span>
        </SystemRailButton>
    );
}

export default BatteryButton;


