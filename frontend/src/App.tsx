import type { CSSProperties } from "react";
import { useThemeStore } from "./state/themeStore";
import DesktopLayout from "./layouts/DesktopLayout";

function App() {
  const theme = useThemeStore((state) => state.theme);
  const accentColor = useThemeStore((state) => state.accentColor);

  return (
    <div
      style={
        {
          "--accent": accentColor,
        } as CSSProperties
      }
      className={`
                h-screen
                w-screen
                overflow-hidden
                bg-surface
                text-primary
                transition-colors
                duration-300
                ${theme === "dark" ? "dark" : ""}
            `}
    >
      <DesktopLayout />
    </div>
  );
}

export default App;


