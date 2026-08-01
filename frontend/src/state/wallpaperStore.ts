import { create } from "zustand";
import defaultWallpaper from "../assets/wallpapers/wallpaper.jpg";
import wallpaper2Asset from "../assets/wallpapers/wallpaper2.jpg";

export type Wallpaper = {
    id: string;
    name: string;
    path: string;
};

type WallpaperStore = {
    wallpapers: Wallpaper[];

    wallpaper: string;

    setWallpaper: (wallpaper: string) => void;

    addWallpaper: (wallpaper: Wallpaper) => void;
};

export const useWallpaperStore =
create<WallpaperStore>((set) => ({

    wallpapers: [
        {
            id: "default",
            name: "Default",
            path: defaultWallpaper,
        },
        {
            id: "wallpaper2",
            name: "Wallpaper 2",
            path: wallpaper2Asset,
        },
    ],

    wallpaper: defaultWallpaper,

    setWallpaper: (wallpaper) =>
        set({ wallpaper }),

    addWallpaper: (wallpaper) =>
        set((state) => ({
            wallpapers: [
                ...state.wallpapers,
                wallpaper,
            ],
        })),
}));
