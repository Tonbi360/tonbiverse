import { useDesktopStore } from "../../../state/desktopStore";
import type { IconSize } from "../../../state/desktopStore";

const ICON_SIZES: { value: IconSize; label: string }[] = [
    { value: "small", label: "Small" },
    { value: "medium", label: "Medium" },
    { value: "large", label: "Large" },
];

function DesktopPage() {
    const showIcons = useDesktopStore(
        (state) => state.showIcons
    );

    const setShowIcons = useDesktopStore(
        (state) => state.setShowIcons
    );

    const iconSize = useDesktopStore(
        (state) => state.iconSize
    );

    const setIconSize = useDesktopStore(
        (state) => state.setIconSize
    );

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">
                Desktop
            </h2>

            <label className="flex items-center gap-3">
                <input
                    type="checkbox"
                    checked={showIcons}
                    onChange={(e) =>
                        setShowIcons(e.target.checked)
                    }
                />

                <span>Show desktop icons</span>
            </label>

            <fieldset className="space-y-2">
<legend className="text-sm text-inherit text-white/70">
                    Icon Size
                </legend>

                {ICON_SIZES.map(({ value, label }) => (
                    <label
                        key={value}
                        className="flex items-center gap-3"
                    >
                        <input
                            type="radio"
                            name="iconSize"
                            value={value}
                            checked={iconSize === value}
                            onChange={() =>
                                setIconSize(value)
                            }
                        />

                        <span>{label}</span>
                    </label>
                ))}
            </fieldset>
        </div>
    );
}

export default DesktopPage;

