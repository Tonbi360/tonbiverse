import DesktopIcon from "./DesktopIcon";

import { useWindowStore } from "../../state/windowStore";
import { useDesktopStore } from "../../state/desktopStore";
import { useDesktopDragStore } from "../../state/desktopDragStore";

type Props = {
    id: string;
    icon: string;
    label: string;

    column: number;
    row: number;
};

function DesktopIconContainer({
    id,
    icon,
    label,
    column,
    row,
}: Props) {
    const openWindow =
        useWindowStore(
            state => state.openWindow
        );

    const selectIcon =
        useDesktopStore(
            state => state.selectIcon
        );

    const beginDrag =
        useDesktopDragStore(
            state => state.beginDrag
        );

    return (
        <DesktopIcon
            id={id}
            icon={icon}
            label={label}

            onMouseDown={(event)=>{

                beginDrag(
                    id,
                    event.clientX,
                    event.clientY,
                    column,
                    row
                );

            }}

            onClick={()=>{
                selectIcon(id);
            }}

            onOpen={()=>
                openWindow({
                    id,
                    title:label,
                    icon
                })
            }
        />
    );
}

export default DesktopIconContainer;