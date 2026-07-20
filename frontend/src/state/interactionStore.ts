import { create } from "zustand";
import type { ResizeEdge } from "../components/window/WindowResizeHandle";

export type InteractionMode =
    | "idle"
    | "dragging"
    | "resizing";

type InteractionState = {
    mode: InteractionMode;

    windowId: string | null;

    startMouseX: number;
    startMouseY: number;

    startWindowX: number;
    startWindowY: number;

    startWidth: number;
    startHeight: number;

    edge: ResizeEdge;

    beginDrag: (
        windowId: string,
        mouseX: number,
        mouseY: number,
        windowX: number,
        windowY: number
    ) => void;

    beginResize: (
        windowId: string,
        mouseX: number,
        mouseY: number,
        windowX: number,
        windowY: number,
        width: number,
        height: number,
        edge: ResizeEdge
    ) => void;

    endInteraction: () => void;
};

const DEFAULT_INTERACTION: {
    mode: InteractionMode;
    windowId: null;
    startMouseX: number;
    startMouseY: number;
    startWindowX: number;
    startWindowY: number;
    startWidth: number;
    startHeight: number;
    edge: ResizeEdge;
} = {
    mode: "idle",

    windowId: null,

    startMouseX: 0,
    startMouseY: 0,

    startWindowX: 0,
    startWindowY: 0,

    startWidth: 0,
    startHeight: 0,

    edge: "none",
};

export const useInteractionStore =
    create<InteractionState>((set) => ({
        ...DEFAULT_INTERACTION,

        beginDrag: (
            windowId,
            mouseX,
            mouseY,
            windowX,
            windowY
        ) =>
            set({
                mode: "dragging",

                windowId,

                startMouseX: mouseX,
                startMouseY: mouseY,

                startWindowX: windowX,
                startWindowY: windowY,
            }),

        beginResize: (
            windowId,
            mouseX,
            mouseY,
            windowX,
            windowY,
            width,
            height,
            edge
        ) =>
            set({
                mode: "resizing",

                windowId,

                startMouseX: mouseX,
                startMouseY: mouseY,

                startWindowX: windowX,
                startWindowY: windowY,

                startWidth: width,
                startHeight: height,

                edge,
            }),

        endInteraction: () =>
            set(DEFAULT_INTERACTION),
    }));