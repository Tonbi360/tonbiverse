import { create } from "zustand";

type DesktopDragState = {
    dragging: boolean;
    iconId: string | null;

    startMouseX: number;
    startMouseY: number;

    startColumn: number;
    startRow: number;

    currentMouseX: number;
    currentMouseY: number;

    updateMouse: (x: number, y: number) => void;

    beginDrag: (
        id: string,
        mouseX: number,
        mouseY: number,
        column: number,
        row: number
    ) => void;

    startDragging: () => void;

    endDrag: () => void;
};


export const useDesktopDragStore =
create<DesktopDragState>((set)=>({

    dragging:false,

    iconId:null,

    startMouseX:0,

    startMouseY:0,

    startColumn:0,

    startRow:0,

    currentMouseX:0,

    currentMouseY:0,

    updateMouse:(x,y)=>
        set({
            currentMouseX:x,
            currentMouseY:y,
        }),

    beginDrag:(
        iconId,
        mouseX,
        mouseY,
        column,
        row
    )=>set({

        // Prepare phase: set up coordinates, but don't mark as dragging yet.
        dragging:false,

        iconId,

        startMouseX:mouseX,
        startMouseY:mouseY,

        startColumn:column,
        startRow:row,

        currentMouseX:mouseX,
        currentMouseY:mouseY,

    }),

    startDragging:()=>set({
        dragging:true,
    }),

    endDrag:()=>set({

        dragging:false,
        iconId:null,
        currentMouseX:0,
        currentMouseY:0,

    })

}));

