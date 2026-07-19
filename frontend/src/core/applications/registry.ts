import type { Application } from "./types";

export const applications: Application[] = [
  {
    id: "projects",

    name: "Projects",

    description: "My software projects",

    icon: "📁",

    category: "projects",

    desktop: true,

    taskbar: true,

    searchable: true,

    window: {
      width: 1100,
      height: 700,
      minWidth: 800,
      minHeight: 500,
      resizable: true,
    },
  },

  {
    id: "gallery",

    name: "Gallery",

    description: "Images and artwork",

    icon: "🖼️",

    category: "media",

    desktop: true,

    taskbar: true,

    searchable: true,

    window: {
      width: 1200,
      height: 750,
      minWidth: 900,
      minHeight: 600,
      resizable: true,
    },
  },

  {
    id: "stories",

    name: "Stories",

    description: "Novels and writing",

    icon: "📖",

    category: "writing",

    desktop: true,

    taskbar: false,

    searchable: true,

    window: {
      width: 900,
      height: 700,
      minWidth: 700,
      minHeight: 500,
      resizable: true,
    },
  },
];