import { useSettingsStore } from "../../../features/settings/state/settingsStore";
import { SETTINGS_SECTIONS } from "../../../features/settings/settingsSections";


function SettingsSidebar() {
    const page = useSettingsStore(
        (state) => state.page
    );

    const setPage = useSettingsStore(
        (state) => state.setPage
    );

    return (
        <aside
            className="
                w-64
                border-r
                border-white/10
                bg-black/20
                p-4
            "
        >
            <h1
                className="
                    mb-6
                    text-2xl
                    font-bold
                "
            >
                Settings
            </h1>

            <div className="space-y-2">
                {SETTINGS_SECTIONS.map(
                    (section) => (
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
                                        ? "bg-white/15"
                                        : "hover:bg-white/10"
                                }
                            `}
                        >
                            <span className="text-xl">
                                {section.icon}
                            </span>

                            <span>
                                {section.title}
                            </span>
                        </button>
                    )
                )}
            </div>
        </aside>
    );
}

export default SettingsSidebar;

