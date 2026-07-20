import type { ComponentType } from "react";

export type Application = {
    id: string;
    name: string;
    icon: string;

    desktop?: boolean;
    taskbar?: boolean;

    defaultSize: {
        width: number;
        height: number;
    };

    component: ComponentType;
};