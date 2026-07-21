import { create } from "zustand";

export type DesktopIconPosition = {
    id: string;
    column: number;
    row: number;
};

const STORAGE_KEY = "tonbiverse.desktop.layout";

function saveLayout(icons: DesktopIconPosition[]) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(icons)
    );
}

function loadLayout() {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
        return [];
    }

    try {
        return JSON.parse(data) as DesktopIconPosition[];
    } catch {
        return [];
    }
}

type DesktopLayoutState = {
    icons: DesktopIconPosition[];


    registerIcon: (id: string) => void;

    moveIcon: (
        id: string,
        column: number,
        row: number
    ) => void;
};

export const useDesktopLayoutStore =
    create<DesktopLayoutState>((set, get) => ({
        icons: loadLayout(),

        registerIcon: (id) => {
            const exists = get().icons.some(
                (icon) => icon.id === id
            );

            if (exists) return;

            const index = get().icons.length;

            const icons = [
                ...get().icons,
                {
                    id,
                    column: 0,
                    row: index,
                },
            ];

            saveLayout(icons);

            set({ icons });
        },

        moveIcon: (
            id,
            column,
            row
        ) =>
            set((state) => {
                const target = state.icons.find(
                    (icon) =>
                        icon.column === column &&
                        icon.row === row &&
                        icon.id !== id
                );

                if (!target) {
                    const icons = state.icons.map((icon) =>
                        icon.id === id
                            ? {
                                  ...icon,
                                  column,
                                  row,
                              }
                            : icon
                    );

                    saveLayout(icons);

                    return { icons };
                }

                // Swap positions to ensure 1 grid cell = 1 icon.
                const icons = state.icons.map((icon) => {
                    if (icon.id === id) {
                        return {
                            ...icon,
                            column,
                            row,
                        };
                    }

                    if (icon.id === target.id) {
                        const moving = state.icons.find(
                            (i) => i.id === id
                        );

                        return {
                            ...icon,
                            column: moving?.column ?? icon.column,
                            row: moving?.row ?? icon.row,
                        };
                    }

                    return icon;
                });

                saveLayout(icons);

                return { icons };
            }),
    }));