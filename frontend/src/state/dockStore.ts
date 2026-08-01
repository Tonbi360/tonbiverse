import { create } from "zustand";

export type DockPosition = "left" | "right" | "bottom";

type DockStore = {
  autoHide: boolean;
  position: DockPosition;
  iconSize: number;
  transparency: number;
  magnification: boolean;
  animations: boolean;

  setAutoHide: (value: boolean) => void;
  setPosition: (value: DockPosition) => void;
  setIconSize: (value: number) => void;
  setTransparency: (value: number) => void;
  setMagnification: (value: boolean) => void;
  setAnimations: (value: boolean) => void;
};

export const useDockStore = create<DockStore>((set) => ({
  autoHide: false,
  position: "right",
  iconSize: 56,
  transparency: 0.9,
  magnification: true,
  animations: true,

  setAutoHide: (value) => set({ autoHide: value }),
  setPosition: (value) => set({ position: value }),
  setIconSize: (value) => set({ iconSize: value }),
  setTransparency: (value) => set({ transparency: value }),
  setMagnification: (value) => set({ magnification: value }),
  setAnimations: (value) => set({ animations: value }),
}));

