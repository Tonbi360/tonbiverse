import { accent } from "../../../utils/theme";
import { useThemeStore } from "../../../state/themeStore";
import { useWallpaperStore } from "../../../state/wallpaperStore";

function AppearancePage() {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  const accentColor = useThemeStore((state) => state.accentColor);
  const setAccentColor = useThemeStore((state) => state.setAccentColor);

  const transparency = useThemeStore((state) => state.transparency);
  const setTransparency = useThemeStore((state) => state.setTransparency);

  const wallpaper = useWallpaperStore((state) => state.wallpaper);
  const setWallpaper = useWallpaperStore((state) => state.setWallpaper);
  const wallpapers = useWallpaperStore((state) => state.wallpapers);
  const addWallpaper = useWallpaperStore((state) => state.addWallpaper);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Appearance</h1>

      {/* Theme */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Theme</h2>

        <div className="flex gap-4">
          <button
            className={`rounded-lg border px-4 py-2 ${
              theme === "dark" ? "text-white" : ""
            }`}
            onClick={() => setTheme("dark")}
            style={
              theme === "dark"
                ? accent.background
                : undefined
            }
          >
            Dark
          </button>

          <button
            className={`rounded-lg border px-4 py-2 ${
              theme === "light" ? "text-white" : ""
            }`}
            onClick={() => setTheme("light")}
            style={
              theme === "light"
                ? accent.background
                : undefined
            }
          >
            Light
          </button>
        </div>
      </div>

      {/* Wallpaper Gallery */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Wallpaper</h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {wallpapers.map((item) => {
            const isSelected = wallpaper === item.path;

            return (
              <button
                key={item.id}
                onClick={() => setWallpaper(item.path)}
                className={`
                  group
                  flex
                  flex-col
                  overflow-hidden
                  rounded-xl
                  border
                  transition-all
                  duration-200
                  hover:scale-[1.02]
                  ${isSelected
                    ? ""
                    : "border-white/10 hover:border-white/20"
                  }
                `}
                style={
                  isSelected
                    ? { ...accent.border, ...accent.ring }
                    : undefined
                }
              >
                <div className="aspect-video w-full bg-cover bg-center" style={{ backgroundImage: `url(${item.path})` }} />

                <span className="truncate border-t border-white/10 bg-white/5 px-3 py-2 text-left text-sm font-medium">
                  {item.name}
                </span>
              </button>
            );
          })}

          {/* Custom Upload Card */}
          <label className="flex cursor-pointer flex-col overflow-hidden rounded-xl border border-dashed border-white/20 transition-all duration-200 hover:border-white/40 hover:bg-white/5">
            <div className="flex aspect-video w-full items-center justify-center text-3xl text-white/40">
              +
            </div>

            <span className="border-t border-white/10 px-3 py-2 text-center text-sm font-medium text-white/60">
              Upload
            </span>

            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(event) => {
                const file = event.target.files?.[0];

                if (file) {
                  const url = URL.createObjectURL(file);

                  addWallpaper({
                    id: crypto.randomUUID(),
                    name: file.name,
                    path: url,
                  });

                  setWallpaper(url);
                }
              }}
            />
          </label>
        </div>
      </div>

      {/* Accent Color */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Accent Color</h2>

        <div className="flex items-center gap-4">
          <input
            type="color"
            value={accentColor}
            onChange={(event) =>
              setAccentColor(event.target.value)
            }
            className="h-10 w-10 cursor-pointer rounded-lg border border-white/10 bg-transparent"
          />

          <span className="font-mono text-sm text-white/60">
            {accentColor}
          </span>
        </div>
      </div>

      {/* Transparency */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Transparency</h2>

        <div className="flex items-center gap-4">
          <input
            type="range"
            min="0.5"
            max="1.0"
            step="0.05"
            value={transparency}
            onChange={(event) =>
              setTransparency(Number(event.target.value))
            }
            className="w-48 accent-blue-500"
          />

          <span className="text-sm text-white/60">
            {Math.round(transparency * 100)}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default AppearancePage;

