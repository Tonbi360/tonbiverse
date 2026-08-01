import { useSettingsStore } from "./state/settingsStore";
import { SETTINGS_SECTIONS } from "./settingsSections";
import { ui } from "../../utils/theme";

function SettingsSidebar() {
    const page = useSettingsStore(
        (state) => state.page
    );

    const setPage = useSettingsStore(
        (state) => state.setPage
    );

    return (
        <aside
            className={`
                w-64
                border-r
                p-4
                ${ui.panel}
            `}
        >
            <h1
                className="
                    mb-6
                    text-2xl
                    font-bold
                    text-inherit
                "
            >
                Settings
            </h1>

            <div className="space-y-2">
                {SETTINGS_SECTIONS.map((section) => (
                    <button
                        key={section.id}
                        onClick={() =>
                            setPage(section.id)
                        }
                        className={`
                            flex
                            w-full
                            items-center
                            gap-3
                            rounded-xl
                            px-4
                            py-3
                            transition

                            ${
                                page === section.id
                                    ? "bg-white/20"
                                    : "hover:bg-white/10"
                            }
                        `}
                    >
                        <span className="text-xl">
                            {section.icon}
                        </span>

                        <span>{section.title}</span>
                    </button>
                ))}
            </div>
        </aside>
    );
}

export default SettingsSidebar;
