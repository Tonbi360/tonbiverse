import { useEffect } from "react";
import { useWindowStore } from "../../state/windowStore";


function KeyboardManager(){

    const closeWindow =
        useWindowStore(
            state => state.closeWindow
        );

    const focusNextWindow =
        useWindowStore(
            state => state.focusNextWindow
        );


    useEffect(()=>{


        function handleKeyDown(
            event: KeyboardEvent
        ){

            const windows =
                useWindowStore
                .getState()
                .windows;


            const activeWindow =
                windows.find(
                    w => w.active
                );


            // Ctrl + Alt + Q
            if (
                event.ctrlKey &&
                event.altKey &&
                event.key.toLowerCase() === "q"
            ) {
                if (!activeWindow) return;

                event.preventDefault();
                event.stopPropagation();

                closeWindow(activeWindow.id);
            }

            // Ctrl + Alt + T
            // Tonbiverse Task Switch
            if (
                event.ctrlKey &&
                event.altKey &&
                event.key.toLowerCase() === "t"
            ) {
                event.preventDefault();
                event.stopPropagation();

                focusNextWindow();
            }


        }



        window.addEventListener(
            "keydown",
            handleKeyDown
        );


        return ()=>{

            window.removeEventListener(
                "keydown",
                handleKeyDown
            );

        };


    },[closeWindow, focusNextWindow]);



    return null;
}


export default KeyboardManager;