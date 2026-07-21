import { create } from "zustand";

export type SnapTarget =
    | "none"
    | "left"
    | "right"
    | "top";

type SnapStore = {
    target: SnapTarget;

    setTarget: (
        target: SnapTarget
    ) => void;
};

export const useSnapStore =
    create<SnapStore>((set) => ({
        target: "none",

        setTarget: (target) =>
            set({ target }),
    }));