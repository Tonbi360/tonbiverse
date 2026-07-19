import { applications } from "./registry";

class ApplicationManager {
  getAll() {
    return applications;
  }

  getDesktopApps() {
    return applications.filter((app) => app.desktop);
  }

  getTaskbarApps() {
    return applications.filter((app) => app.taskbar);
  }

  getById(id: string) {
    return applications.find((app) => app.id === id);
  }
}

export const applicationManager = new ApplicationManager();