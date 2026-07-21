

import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
};


function SystemRail({ children }: Props) {
    return (
        <div
            className="h-full flex flex-col gap-3 py-3 pointer-events-auto"
        >
            {children}
        </div>
    );
}

export default SystemRail;


