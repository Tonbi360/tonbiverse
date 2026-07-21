import RunningDock from "./RunningDock";
import SystemDock from "./SystemDock";

function DockManager() {
    return (
        <div className="absolute bottom-0 left-0 right-0 z-50">
            <RunningDock />
            <SystemDock />
        </div>
    );
}

export default DockManager;

