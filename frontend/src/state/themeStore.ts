import { create } from "zustand";

export type ThemeMode = "dark" | "light";

type ThemeStore = {
    theme: ThemeMode;

    accentColor: string;

    transparency: number;

    setTheme: (theme: ThemeMode) => void;

    setAccentColor: (color: string) => void;

    setTransparency: (value: number) => void;

    toggleTheme: () => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
    theme: "dark",

    accentColor: "#3B82F6",

    transparency: 0.85,

    setTheme: (theme) => set({ theme }),

    setAccentColor: (accentColor) =>
        set({ accentColor }),

    setTransparency: (transparency) =>
        set({ transparency }),

    toggleTheme: () =>
        set((state) => ({
            theme:
                state.theme === "dark"
                    ? "light"
                    : "dark",
        })),
}));

