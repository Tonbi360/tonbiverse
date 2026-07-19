export type WindowConfig = {
  width: number;
  height: number;
  minWidth: number;
  minHeight: number;
  resizable: boolean;
};

export type ApplicationCategory =
  | "system"
  | "media"
  | "writing"
  | "projects"
  | "communication"
  | "utility";

export interface Application {
  id: string;

  name: string;

  description: string;

  icon: string;

  category: ApplicationCategory;

  desktop: boolean;

  taskbar: boolean;

  searchable: boolean;

  window: WindowConfig;
}