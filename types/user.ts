export interface User {
  id: string;
  name: string;
  email: string;
  status: "disabled" | "enabled";
  role: "viewer" | "system" | "editor" | "admin";
  last_activity: number;
}
