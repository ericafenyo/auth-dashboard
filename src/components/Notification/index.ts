export type NotificationType = "success" | "info" | "warning" | "error";

export interface NotificationOptions {
  closable?: boolean;
  kind?: Notification;
  type?: NotificationType;
  title?: string;
  message?: string;
  visible?: boolean;
  placement?: NotificationPlacement;
}

export type NotificationPlacement =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export enum Notification {
  ALERT,
  NOTICE
}
