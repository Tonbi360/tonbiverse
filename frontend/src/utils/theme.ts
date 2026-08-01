export const ui = {
    panel: `
        border
        border-window
        bg-panel/90
        text-window
        backdrop-blur-xl
        shadow-2xl
    `,

    button: `
        rounded-md
        px-3
        py-2
        transition-colors
        hover:bg-white/10
    `,

    buttonDanger: `
        rounded-md
        px-3
        py-2
        text-red-400
        hover:bg-red-500/20
    `,

    window: `
        absolute
        flex
        flex-col
        overflow-hidden
        rounded-xl
        border
        border-window
        bg-window
        shadow-2xl
        select-none
    `,

    windowHeader: `
        flex
        h-10
        items-center
        justify-between
        border-b
        border-window
        bg-window-header
        px-4
        select-none
        cursor-move
    `,

    windowContent: `
        min-h-0
        flex-1
        overflow-auto
        bg-window
        p-6
        text-window
    `,
};

export const accent = {
  background: {
    backgroundColor: "var(--accent)",
  },

  border: {
    borderColor: "var(--accent)",
  },

  color: {
    color: "var(--accent)",
  },

  ring: {
    boxShadow: "0 0 0 2px var(--accent)",
  },
};

