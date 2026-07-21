import { create } from "zustand";
import type { SettingsPage } from "../types";

type SettingsStore = {
    page: SettingsPage;

    setPage: (page: SettingsPage) => void;
};

export const useSettingsStore =
create<SettingsStore>((set) => ({
    page: "appearance",
    setPage: (page) =>
        set({
            page,
        }),
}));

