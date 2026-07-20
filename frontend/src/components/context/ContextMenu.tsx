import { useContextMenuStore } from "../../state/contextMenuStore";


function ContextMenu(){

const {
    visible,
    x,
    y,
    target,
    closeMenu
}=useContextMenuStore();


if(!visible)
    return null;



return (

<div
className="
fixed
z-[9999]
w-48
rounded-lg
border
border-white/10
bg-zinc-900
p-2
text-white
shadow-xl
"
style={{
    left:x,
    top:y
}}

onMouseLeave={closeMenu}

>

<div className="
p-2
hover:bg-white/10
rounded
cursor-pointer
">
{
    target === "desktop"
    ? "Refresh"
    : "Open"
}
</div>


<div className="
p-2
hover:bg-white/10
rounded
cursor-pointer
">
Settings
</div>


</div>

);

}

export default ContextMenu;