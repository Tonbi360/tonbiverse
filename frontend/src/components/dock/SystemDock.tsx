import Clock from "./Clock";

function SystemDock() {
    return (
        <div
            className="
                absolute
                bottom-4
                right-6
                flex
                items-center
                gap-3
                pointer-events-auto
            "
        >
            <Clock />
        </div>
    );
}

export default SystemDock;