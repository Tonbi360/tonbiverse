import DesktopIcons from "./DesktopIcons";
import { useDesktopStore } from "../../state/desktopStore";

function DesktopIconLayer() {
    const showIcons = useDesktopStore((state) => state.showIcons);

    if (!showIcons) {
        return null;
    }

    return <DesktopIcons />;
}

export default DesktopIconLayer;
