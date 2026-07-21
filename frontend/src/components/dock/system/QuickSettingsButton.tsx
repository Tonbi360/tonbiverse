import { useSystemRailStore } from "../../../state/systemRailStore";

import SystemRailButton from "./SystemRailButton";

function QuickSettingsButton() {
    const toggle = useSystemRailStore(
        (state) => state.toggle
    );

    return (
        <SystemRailButton
            onClick={() => toggle("settings")}
        >
            <span className="text-lg">⚙️</span>
        </SystemRailButton>
    );
}

export default QuickSettingsButton;


