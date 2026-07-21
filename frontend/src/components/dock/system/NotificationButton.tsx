import { useSystemRailStore } from "../../../state/systemRailStore";

import SystemRailButton from "./SystemRailButton";

function NotificationButton() {
    const toggle = useSystemRailStore(
        (state) => state.toggle
    );

    return (
        <SystemRailButton
            onClick={() => toggle("notifications")}
        >
            <span className="text-lg">🔔</span>
        </SystemRailButton>
    );
}

export default NotificationButton;


