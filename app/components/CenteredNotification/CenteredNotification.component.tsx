import * as stylex from '@stylexjs/stylex';
import { useEffect, useState } from 'react';

import type { CenteredNotificationProps } from './CenteredNotification.types';

import { styles } from './CenteredNotification.stylex';

const handleNotificationClick = (event: React.MouseEvent) => {
  event.stopPropagation(); // Prevent closing when clicking inside
};

const CenteredNotification = ({
  autoHideDelay = 10_000,
  isAutoHide = true,
  isVisible,
  message,
  onClose,
  type,
}: CenteredNotificationProps) => {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const handleClose = useCallback(() => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      onClose();
      setIsAnimatingOut(false);
    }, 300); // Match animation duration
  }, [onClose]);

  // Auto-hide functionality
  useEffect(() => {
    if (isAutoHide && isVisible && !isAnimatingOut) {
      const timer = setTimeout(() => {
        handleClose();
      }, autoHideDelay);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isAutoHide, autoHideDelay, isVisible, isAnimatingOut, handleClose]);

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    if (isVisible) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isVisible, handleClose]);

  if (!isVisible) return;

  return (
    <div
      {...stylex.props(
        styles.overlay,
        isAnimatingOut ? styles.overlayFadeOut : styles.overlayFadeIn
      )}
      onClick={handleClose}
    >
      <div
        {...stylex.props(
          styles.notification,
          type === 'success'
            ? styles.successNotification
            : styles.errorNotification
        )}
        onClick={handleNotificationClick}
      >
        <button
          aria-label='Close notification'
          onClick={handleClose}
          type='button'
          {...stylex.props(styles.dismissButton)}
        >
          ×
        </button>

        <div
          {...stylex.props(
            styles.message,
            type === 'success' ? styles.successMessage : styles.errorMessage
          )}
        >
          {message}
        </div>

        <button
          onClick={handleClose}
          type='button'
          {...stylex.props(
            styles.closeButton,
            type === 'error' ? styles.errorCloseButton : undefined
          )}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default CenteredNotification;
