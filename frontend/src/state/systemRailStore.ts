import { create } from "zustand";

export type SystemPanel =
    | "none"
    | "notifications"
    | "network"
    | "volume"
    | "battery"
    | "settings";

type SystemRailState = {
    openPanel: SystemPanel;

    open: (panel: SystemPanel) => void;

    close: () => void;

    toggle: (panel: SystemPanel) => void;
};

export const useSystemRailStore =
create<SystemRailState>((set, get) => ({

    openPanel: "none",

    open: (panel) =>
        set({
            openPanel: panel,
        }),

    close: () =>
        set({
            openPanel: "none",
        }),

    toggle: (panel) =>
        set({
            openPanel:
                get().openPanel === panel
                    ? "none"
                    : panel,
        }),

}));

