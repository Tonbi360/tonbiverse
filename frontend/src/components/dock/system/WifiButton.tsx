import { useSystemRailStore } from "../../../state/systemRailStore";

import SystemRailButton from "./SystemRailButton";

function WifiButton() {
    const toggle = useSystemRailStore(
        (state) => state.toggle
    );

    return (
        <SystemRailButton
            onClick={() => toggle("network")}
        >
            <span className="text-lg">📶</span>
        </SystemRailButton>
    );
}

export default WifiButton;


