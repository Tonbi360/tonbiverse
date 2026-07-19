import WindowControls from "./WindowControls";

type Props = {
  title: string;
  onClose: () => void;
};

function WindowHeader({ title, onClose }: Props) {
  return (
    <header
      className="
        flex
        h-12
        items-center
        justify-between
        border-b
        border-white/10
        bg-zinc-950
        px-4
      "
    >
      <span className="text-sm text-white">
        {title}
      </span>

      <WindowControls onClose={onClose} />
    </header>
  );
}

export default WindowHeader;