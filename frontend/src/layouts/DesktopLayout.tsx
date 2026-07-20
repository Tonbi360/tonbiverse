import wallpaper from "../assets/wallpapers/wallpaper.jpg";
import Taskbar from "../components/taskbar/Taskbar";
import Desktop from "../components/desktop/Desktop";
import KeyboardManager from "../core/input/KeyboardManager";

function DesktopLayout() {
  return (
    <main className="flex h-screen overflow-hidden">
      <KeyboardManager />

      <section
        className="flex-1 bg-cover bg-center"
        style={{
          backgroundImage: `url(${wallpaper})`,
        }}
      >
        <Desktop />
      </section>

      <Taskbar />
    </main>
  );
}

export default DesktopLayout;