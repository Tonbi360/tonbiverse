import { useDesktopStore } from "../../state/desktopStore";

type DesktopIconProps = {
    id: string;
    icon: string;
    label: string;
    onOpen?: () => void;
};

function DesktopIcon({
    id,
    icon,
    label,
    onOpen,
}: DesktopIconProps) {
  const selectedIcon = useDesktopStore(
    (state) => state.selectedIcon
);

const selectIcon = useDesktopStore(
    (state) => state.selectIcon
);

const selected = selectedIcon === id;

  return (
    <button
    onClick={(event) => {
  event.stopPropagation();
  selectIcon(id);
}}
    onDoubleClick={onOpen}
    className={`
        flex
        w-24
        flex-col
        items-center
        gap-2
        rounded-lg
        p-2
        transition

        ${
            selected
                ? "bg-blue-500/30 ring-1 ring-blue-400"
                : "hover:bg-white/10"
        }
    `}
>
      <div className="text-5xl">{icon}</div>

      <span className="text-center text-sm">
        {label}
      </span>
    </button>
  );
}

export default DesktopIcon;