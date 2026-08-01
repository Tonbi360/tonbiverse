import { useEffect } from "react";
import { useContextMenuStore } from "../../state/contextMenuStore";
import { useWindowStore } from "../../state/windowStore";
import { ui } from "../../utils/theme";


type MenuItem = {
    label: string;

    action?: () => void;
};


function ContextMenu() {
    const { visible, x, y, target } = useContextMenuStore();
    const closeMenu = useContextMenuStore((state) => state.closeMenu);

    useEffect(() => {
        if (!visible) return;

        const handlePointerDown = (event: MouseEvent) => {
            if (event.button !== 0) return;

            const targetElement = event.target as HTMLElement | null;

            if (targetElement?.closest("[data-context-menu]")) {
                return;
            }

            closeMenu();
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeMenu();
            }
        };

        window.addEventListener("mousedown", handlePointerDown);
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("mousedown", handlePointerDown);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [closeMenu, visible]);

    const openWindow = useWindowStore(
        (state) => state.openWindow
    );

    if (!visible || !target) {
        return null;
    }


    const items: MenuItem[] = {
        desktop: [
            {
                label: "New",
                action: () => {
                    console.log("New");
                },
            },
            {
                label: "Refresh",
                action: () => {
                    window.location.reload();
                },
            },
            {
                label: "Settings",
                action: () => {
                    openWindow({
                        id: "settings",
                        title: "Settings",
                    });
                },
            },
        ],
        icon: [
            { label: "Open" },
            { label: "Rename" },
            { label: "Delete" },
            { label: "Properties" },
        ],
        window: [
            { label: "Move" },
            { label: "Resize" },
            { label: "Minimize" },
            { label: "Close" },
        ],
    }[target];


    return (
        <div
            data-context-menu
            role="menu"
            className={`fixed z-[1000] min-w-44 rounded-lg p-2 ${ui.panel}`}
            style={{
                left: x,
                top: y,
                position: "fixed",
            }}
        >
            {items.map((item) => (
                <button
                    key={item.label}
                    type="button"
                    className={`flex w-full items-center text-left text-sm ${ui.button}`}
                    onClick={() => {
                        item.action?.();
                        closeMenu();
                    }}

                >
                    {item.label}
                </button>
            ))}
        </div>
    );
}

export default ContextMenu;
