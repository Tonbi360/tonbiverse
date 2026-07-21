import { useSystemRailStore } from "../../../state/systemRailStore";

import SystemRailButton from "./SystemRailButton";

function VolumeButton() {
    const toggle = useSystemRailStore(
        (state) => state.toggle
    );

    return (
        <SystemRailButton
            onClick={() => toggle("volume")}
        >
            <span className="text-lg">🔊</span>
        </SystemRailButton>
    );
}

export default VolumeButton;


