import { create } from "zustand";

type DesktopStore = {
    selectedIcon: string | null;

    selectIcon: (id: string) => void;

    clearSelection: () => void;
};

export const useDesktopStore =
create<DesktopStore>((set) => ({

    selectedIcon: null,

    selectIcon: (id) =>
        set({
            selectedIcon: id,
        }),

    clearSelection: () =>
        set({
            selectedIcon: null,
        }),
}));