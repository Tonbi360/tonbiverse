import TaskbarLogo from "./TaskbarLogo";
import TaskbarApps from "./TaskbarApps";
import TaskbarBottom from "./TaskbarBottom";

function Taskbar() {
  return (
    <aside className="flex w-20 flex-col items-center justify-between bg-black/40 py-6 backdrop-blur-xl">
      <TaskbarLogo />
      <TaskbarApps />
      <TaskbarBottom />
    </aside>
  );
}

export default Taskbar;