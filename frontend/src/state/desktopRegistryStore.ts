import { create } from "zustand";

export type RegisteredDesktopIcon = {
    id: string;

    element: HTMLButtonElement | null;

    left: number;
    top: number;

    width: number;
    height: number;
};


type DesktopRegistryState = {
    icons: RegisteredDesktopIcon[];

    registerIcon: (
        id: string,
        element: HTMLButtonElement | null
    ) => void;

    unregisterIcon: (
        id: string
    ) => void;

    updateBounds: (
        id: string,
        bounds: {
            left: number;
            top: number;
            width: number;
            height: number;
        }
    ) => void;
};


export const useDesktopRegistryStore =
create<DesktopRegistryState>((set, get) => ({


    icons:[],

    registerIcon:(id,element)=>{

        const exists =
            get().icons.some(
                icon=>icon.id===id
            );

        if(exists){

            set({
                icons:get().icons.map(icon=>
                    icon.id===id
                        ?{
                            ...icon,
                            element
                        }
                        :icon
                )
            });

            return;
        }

        set({
            icons:[
                ...get().icons,
                {
                    id,
                    element,
                    left:0,
                    top:0,
                    width:0,
                    height:0,
                }
            ]
        });

    },


    unregisterIcon:(id)=>{

        set({
            icons:get().icons.filter(
                icon=>icon.id!==id
            )
        });

    },

    updateBounds:(id,bounds)=>{
        set((state)=>({
            icons: state.icons.map((icon)=>
                icon.id===id
                    ?{
                        ...icon,
                        left: bounds.left,
                        top: bounds.top,
                        width: bounds.width,
                        height: bounds.height,
                    }
                    : icon
            )
        }));
    }

}));
