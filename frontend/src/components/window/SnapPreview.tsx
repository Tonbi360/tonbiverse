import { useSnapStore } from "../../state/snapStore";

function SnapPreview() {
    const target = useSnapStore(
        (state) => state.target
    );

    if (target === "none") {
        return null;
    }

    let style = {};

    switch (target) {
        case "left":
            style = {
                left: 0,
                top: 0,
                width: "50%",
                height: "100%",
            };
            break;

        case "right":
            style = {
                right: 0,
                top: 0,
                width: "50%",
                height: "100%",
            };
            break;

        case "top":
            style = {
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
            };
            break;
    }

    return (
        <div
            style={{
                ...style,
                borderColor: "var(--accent)",
                backgroundColor:
                    "color-mix(in srgb, var(--accent) 20%, transparent)",
            }}
            className="
                absolute
                pointer-events-none
                rounded-xl
                border-2
                transition-all
                duration-150
                z-[999]
            "
        />
    );
}

export default SnapPreview;