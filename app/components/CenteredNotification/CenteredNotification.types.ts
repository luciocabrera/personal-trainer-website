export type CenteredNotificationProps = {
  autoHideDelay?: number;
  isAutoHide?: boolean;
  isVisible: boolean;
  message: string;
  onClose: () => void;
  type: 'error' | 'success';
};
