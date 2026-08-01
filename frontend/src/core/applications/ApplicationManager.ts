import { applications } from "./registry";
import type { Application } from "./types";

class ApplicationManager {
  getAll() {
    return Object.values(applications);
  }

  getDesktopApps() {
    return this.getAll().filter((app: Application) => app.desktop);
  }

  getTaskbarApps() {
    return this.getAll().filter((app: Application) => app.taskbar);
  }

  getById(id: string) {
    return applications[id];
  }
}

export const applicationManager = new ApplicationManager();