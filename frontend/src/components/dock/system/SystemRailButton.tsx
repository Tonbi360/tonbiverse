type Props = {
    children: React.ReactNode;
    onClick?: () => void;
};

function SystemRailButton({ children, onClick }: Props) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-zinc-900
                border
                border-white/10
                transition
                hover:bg-zinc-700
                active:scale-95
            "
        >
            {children}
        </button>
    );
}

export default SystemRailButton;

