import { create } from "zustand";


type ContextTarget =
    | "desktop"
    | "icon"
    | "window"
    | null;


type ContextMenuStore = {

    visible:boolean;

    x:number;
    y:number;

    target:ContextTarget;


    openMenu:(
        x:number,
        y:number,
        target:ContextTarget
    )=>void;


    closeMenu:()=>void;

};



export const useContextMenuStore =
create<ContextMenuStore>((set)=>({

    visible:false,

    x:0,
    y:0,

    target:null,


    openMenu:(x,y,target)=>
        set({
            visible:true,
            x,
            y,
            target
        }),


    closeMenu:()=>
        set({
            visible:false,
            target:null
        })

}));