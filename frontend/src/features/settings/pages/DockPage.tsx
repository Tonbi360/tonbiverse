import { useDockStore } from "../../../state/dockStore";

function DockPage() {
    const {
        autoHide,
        position,
        iconSize,
        transparency,
        magnification,
        animations,

        setAutoHide,
        setPosition,
        setIconSize,
        setTransparency,
        setMagnification,
        setAnimations,
    } = useDockStore();

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">
                Dock
            </h1>

            {/* Auto Hide */}
            <label className="flex items-center gap-3">
                <input
                    type="checkbox"
                    checked={autoHide}
                    onChange={(e) =>
                        setAutoHide(e.target.checked)
                    }
                />

                <span>Auto Hide Dock</span>
            </label>

            {/* Position */}
            <div className="space-y-2">
                <h2 className="font-semibold">
                    Position
                </h2>

                {(["left", "right", "bottom"] as const).map(
                    (value) => (
                        <label
                            key={value}
                            className="flex items-center gap-3"
                        >
                            <input
                                type="radio"
                                checked={position === value}
                                onChange={() =>
                                    setPosition(value)
                                }
                            />

                            <span className="capitalize">
                                {value}
                            </span>
                        </label>
                    )
                )}
            </div>

            {/* Icon Size */}
            <div className="space-y-2">
                <h2 className="font-semibold">
                    Icon Size
                </h2>

                <input
                    type="range"
                    min={40}
                    max={80}
                    value={iconSize}
                    onChange={(e) =>
                        setIconSize(Number(e.target.value))
                    }
                />

                <p>{iconSize}px</p>
            </div>

            {/* Transparency */}
            <div className="space-y-2">
                <h2 className="font-semibold">
                    Transparency
                </h2>

                <input
                    type="range"
                    min={0.5}
                    max={1}
                    step={0.05}
                    value={transparency}
                    onChange={(e) =>
                        setTransparency(
                            Number(e.target.value)
                        )
                    }
                />

                <p>
                    {Math.round(
                        transparency * 100
                    )}
                    %
                </p>
            </div>

            {/* Magnification */}
            <label className="flex items-center gap-3">
                <input
                    type="checkbox"
                    checked={magnification}
                    onChange={(e) =>
                        setMagnification(
                            e.target.checked
                        )
                    }
                />

                <span>
                    Enable Magnification
                </span>
            </label>

            {/* Animations */}
            <label className="flex items-center gap-3">
                <input
                    type="checkbox"
                    checked={animations}
                    onChange={(e) =>
                        setAnimations(
                            e.target.checked
                        )
                    }
                />

                <span>
                    Enable Animations
                </span>
            </label>
        </div>
    );
}

export default DockPage;

