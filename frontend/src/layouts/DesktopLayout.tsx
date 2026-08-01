import Taskbar from "../components/taskbar/Taskbar";
import Desktop from "../components/desktop/Desktop";
import KeyboardManager from "../core/input/KeyboardManager";

function DesktopLayout() {
  return (
    <main className="flex h-screen overflow-hidden">
      <KeyboardManager />

      <section className="flex-1">
        <Desktop />
      </section>

      <Taskbar />
    </main>
  );
}

export default DesktopLayout;
