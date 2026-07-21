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
                bg-black/40
                border
                border-white/10
                backdrop-blur-xl
                transition
                hover:bg-white/10
                active:scale-95
            "
        >
            {children}
        </button>
    );
}

export default SystemRailButton;

