import { create } from "zustand";

type DesktopSelectionState = {
    selecting: boolean;

    startX: number;
    startY: number;

    currentX: number;
    currentY: number;

    beginSelection: (
        x: number,
        y: number
    ) => void;

    updateSelection: (
        x: number,
        y: number
    ) => void;

    endSelection: () => void;
};

export const useDesktopSelectionStore =
    create<DesktopSelectionState>((set) => ({
        selecting: false,

        startX: 0,
        startY: 0,

        currentX: 0,
        currentY: 0,

        beginSelection: (x, y) =>
            set({
                selecting: true,
                startX: x,
                startY: y,
                currentX: x,
                currentY: y,
            }),

        updateSelection: (x, y) =>
            set({
                currentX: x,
                currentY: y,
            }),

        endSelection: () =>
            set({
                selecting: false,
            }),
    }));