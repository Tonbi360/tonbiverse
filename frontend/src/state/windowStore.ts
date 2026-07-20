import { create } from "zustand";

export type OpenWindow = {
    id: string;
    title: string;
    icon?: string;

    x: number;
    y: number;

    width: number;
    height: number;

    minWidth: number;
    minHeight: number;

    previousX: number;
    previousY: number;

    previousWidth: number;
    previousHeight: number;

    minimized: boolean;
    maximized: boolean;

    active: boolean;

    zIndex: number;
};

type NewWindow = Pick<OpenWindow, "id" | "title"> &
    Partial<Omit<OpenWindow, "id" | "title" | "zIndex" | "active">>;

type WindowStore = {
    windows: OpenWindow[];

    openWindow: (window: NewWindow) => void;

    closeWindow: (id: string) => void;

    minimizeWindow: (id: string) => void;

    restoreWindow: (id: string) => void;

    focusWindow: (id: string) => void;

    focusNextWindow: () => void;

    toggleMaximize: (id: string) => void;

    moveWindow: (
        id: string,
        x: number,
        y: number
    ) => void;

    resizeWindow: (
        id: string,
        width: number,
        height: number
    ) => void;
};

const DEFAULT_WINDOW = {
    x: 160,
    y: 80,

    width: 900,
    height: 600,

    minWidth: 400,
    minHeight: 250,
};

function getHighestZIndex(windows: OpenWindow[]) {
    return Math.max(0, ...windows.map((w) => w.zIndex));
}

export const useWindowStore = create<WindowStore>((set) => ({
    windows: [],

    openWindow: (window) =>
        set((state) => {
            const existing = state.windows.find(
                (w) => w.id === window.id
            );

            if (existing) {
                const highest = getHighestZIndex(state.windows);

                return {
                    windows: state.windows.map((w) =>
                        w.id === window.id
                            ? {
                                  ...w,
                                  minimized: false,
                                  active: true,
                                  zIndex: highest + 1,
                              }
                            : {
                                  ...w,
                                  active: false,
                              }
                    ),
                };
            }

            return {
                windows: [
                    ...state.windows.map((w) => ({
                        ...w,
                        active: false,
                    })),

                    {
                        id: window.id,
                        title: window.title,
                        icon: window.icon,

                        x: DEFAULT_WINDOW.x,
                        y: DEFAULT_WINDOW.y,

                        width: DEFAULT_WINDOW.width,
                        height: DEFAULT_WINDOW.height,

                        minWidth: DEFAULT_WINDOW.minWidth,
                        minHeight: DEFAULT_WINDOW.minHeight,

                        previousX: DEFAULT_WINDOW.x,
                        previousY: DEFAULT_WINDOW.y,

                        previousWidth: DEFAULT_WINDOW.width,
                        previousHeight: DEFAULT_WINDOW.height,

                        minimized: false,
                        maximized: false,

                        active: true,

                        zIndex: state.windows.length + 1,
                    },
                ],
            };
        }),

    closeWindow: (id) =>
        set((state) => ({
            windows: state.windows.filter(
                (w) => w.id !== id
            ),
        })),

    minimizeWindow: (id) =>
        set((state) => ({
            windows: state.windows.map((w) =>
                w.id === id
                    ? {
                          ...w,
                          minimized: true,
                          active: false,
                      }
                    : w
            ),
        })),

    restoreWindow: (id) =>
        set((state) => {
            const highest = getHighestZIndex(state.windows);

            return {
                windows: state.windows.map((w) =>
                    w.id === id
                        ? {
                              ...w,
                              minimized: false,
                              active: true,
                              zIndex: highest + 1,
                          }
                        : {
                              ...w,
                              active: false,
                          }
                ),
            };
        }),

    focusWindow: (id) =>
        set((state) => {
            const highest = getHighestZIndex(state.windows);

            return {
                windows: state.windows.map((w) =>
                    w.id === id
                        ? {
                              ...w,
                              active: true,
                              zIndex: highest + 1,
                          }
                        : {
                              ...w,
                              active: false,
                          }
                ),
            };
        }),

    focusNextWindow: () =>
        set((state) => {
            const windows = state.windows.filter(
                (w) => !w.minimized
            );

            if (windows.length === 0) {
                return state;
            }

            const current = windows.find((w) => w.active);
            const index = current
                ? windows.indexOf(current)
                : 0;
            const next = windows[(index + 1) % windows.length];
            const highest = getHighestZIndex(windows);

            return {
                windows: state.windows.map((w) =>
                    w.id === next.id
                        ? {
                              ...w,
                              active: true,
                              zIndex: highest + 1,
                          }
                        : {
                              ...w,
                              active: false,
                          }
                ),
            };
        }),

    toggleMaximize: (id) =>
        set((state) => ({
            windows: state.windows.map((w) => {
                if (w.id !== id) return w;

                if (w.maximized) {
                    return {
                        ...w,
                        x: w.previousX,
                        y: w.previousY,

                        width: w.previousWidth,
                        height: w.previousHeight,

                        maximized: false,
                    };
                }

                const desktop =
                    typeof document !== "undefined"
                        ? document.getElementById("desktop")
                        : null;

                const desktopWidth =
                    desktop?.clientWidth ?? w.width;

                const desktopHeight =
                    desktop?.clientHeight ?? w.height;

                return {
                    ...w,

                    previousX: w.x,
                    previousY: w.y,

                    previousWidth: w.width,
                    previousHeight: w.height,

                    x: 0,
                    y: 0,

                    width: desktopWidth,

                    height: desktopHeight,

                    maximized: true,
                };
            }),
        })),

    moveWindow: (id, x, y) =>
        set((state) => ({
            windows: state.windows.map((w) =>
                w.id === id && !w.maximized
                    ? {
                          ...w,
                          x,
                          y,
                      }
                    : w
            ),
        })),
    resizeWindow: (id, width, height) =>
        set((state) => ({
            windows: state.windows.map((w) => {
                if (w.id !== id) return w;

                return {
                    ...w,
                    width: Math.max(w.minWidth, width),
                    height: Math.max(w.minHeight, height),
                };
            }),
        })),
}));