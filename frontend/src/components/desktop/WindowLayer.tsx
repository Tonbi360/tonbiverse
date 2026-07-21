import Window from "../window/Window";
import WindowInteractionManager from "../window/WindowInteractionManager";
import SnapPreview from "../window/SnapPreview";
import ApplicationRenderer from "../../core/applications/ApplicationRenderer";
import { useWindowStore } from "../../state/windowStore";

function WindowLayer() {
    const windows = useWindowStore(
        (state) => state.windows
    );

    return (
        <>
            <WindowInteractionManager />

            <SnapPreview />

            {[...windows]
                .sort((a, b) => a.zIndex - b.zIndex)
                .map((window) => (
                    <Window
                        key={window.id}
                        window={window}
                    >
                        <ApplicationRenderer
                            id={window.id}
                        />
                    </Window>
                ))}
        </>
    );
}

export default WindowLayer;