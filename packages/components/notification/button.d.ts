/// <reference types="react" />

declare module 'notification/NotificationProvider' {
  export type NotificationProviderProps = {
    message?: string;
  };
  const NotificationProvider: ({ message }: NotificationProviderProps) => JSX.Element;
  export default NotificationProvider;
}
