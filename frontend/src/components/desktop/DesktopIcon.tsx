type DesktopIconProps = {
  icon: string;
  label: string;
  onOpen?: () => void;
};

function DesktopIcon({
  icon,
  label,
  onOpen,
}: DesktopIconProps) {
  return (
    <button
      onDoubleClick={onOpen}
      className="
        flex
        w-24
        flex-col
        items-center
        gap-2
        rounded-xl
        p-3
        text-white
        transition-all
        hover:bg-white/10
        active:scale-95
      "
    >
      <div className="text-5xl">{icon}</div>

      <span className="text-center text-sm">
        {label}
      </span>
    </button>
  );
}

export default DesktopIcon;