import { create } from "zustand";

export type IconSize = "small" | "medium" | "large";

type DesktopStore = {
    selectedIcon: string | null;

    showIcons: boolean;

    iconSize: IconSize;

    selectIcon: (id: string) => void;

    clearSelection: () => void;

    setShowIcons: (showIcons: boolean) => void;

    setIconSize: (size: IconSize) => void;
};

export const useDesktopStore =
create<DesktopStore>((set) => ({

    selectedIcon: null,

    showIcons: true,

    iconSize: "medium",

    selectIcon: (id) =>
        set({
            selectedIcon: id,
        }),

    clearSelection: () =>
        set({
            selectedIcon: null,
        }),

    setShowIcons: (showIcons) =>
        set({ showIcons }),

    setIconSize: (iconSize) =>
        set({ iconSize }),
}));
