import { create } from "zustand";

type OpenWindow = {
  id: string;
  title: string;
};

type WindowStore = {
  windows: OpenWindow[];

  openWindow: (window: OpenWindow) => void;

  closeWindow: (id: string) => void;
};

export const useWindowStore = create<WindowStore>((set) => ({
  windows: [],

  openWindow: (window) =>
  set((state) => {
    const alreadyOpen = state.windows.some(
      (w) => w.id === window.id
    );

    if (alreadyOpen) {
      return state;
    }

    return {
      windows: [...state.windows, window],
    };
  }),

  closeWindow: (id) =>
    set((state) => ({
      windows: state.windows.filter((w) => w.id !== id),
    })),
}));