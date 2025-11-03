import { useCallback, useEffect, useState } from 'react';
import * as stylex from '@stylexjs/stylex';

const fadeIn = stylex.keyframes({
  '0%': {
    opacity: 0,
    transform: 'scale(0.9)',
  },
  '100%': {
    opacity: 1,
    transform: 'scale(1)',
  },
});

const fadeOut = stylex.keyframes({
  '0%': {
    opacity: 1,
    transform: 'scale(1)',
  },
  '100%': {
    opacity: 0,
    transform: 'scale(0.9)',
  },
});

const styles = stylex.create({
  closeButton: {
    background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4)',
    ':hover': {
      background: 'linear-gradient(135deg, #ff5252, #26a69a)',
      boxShadow: '0 8px 25px rgba(255, 107, 107, 0.6)',
      transform: 'translateY(-2px)',
    },
    ':active': {
      transform: 'translateY(0)',
    },
    border: 'none',
    borderRadius: '25px',
    '@media (max-width: 480px)': {
      fontSize: '0.9rem',
      letterSpacing: '0.5px',
      minWidth: '80px',
      padding: '0.7rem 1.25rem',
    },

    boxShadow: '0 4px 15px rgba(255, 107, 107, 0.4)',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
    minWidth: '100px',
    padding: '0.8rem 1.5rem',
    textTransform: 'uppercase',
    transition: 'all 0.3s ease',
  },

  dismissButton: {
    ':hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      opacity: 1,
      transform: 'rotate(90deg)',
    },
    alignItems: 'center',
    background: 'none',
    '@media (max-width: 480px)': {
      height: '28px',
      right: '0.5rem',
      fontSize: '1.3rem',
      top: '0.5rem',
      width: '28px',
    },
    border: 'none',
    borderRadius: '50%',
    color: '#666',
    cursor: 'pointer',
    display: 'flex',
    fontSize: '1.5rem',
    height: '32px',
    justifyContent: 'center',
    opacity: 0.7,
    padding: '0.25rem',
    position: 'absolute',
    right: '0.75rem',
    top: '0.75rem',

    transition: 'all 0.2s ease',

    width: '32px',
  },

  errorCloseButton: {
    background: 'linear-gradient(135deg, #f44336, #ff6b6b)',
    ':hover': {
      background: 'linear-gradient(135deg, #d32f2f, #ff5252)',
      boxShadow: '0 8px 25px rgba(244, 67, 54, 0.6)',
    },

    boxShadow: '0 4px 15px rgba(244, 67, 54, 0.4)',
  },

  errorMessage: {
    color: '#c62828',
  },
  errorNotification: {
    backgroundColor: 'rgba(244, 67, 54, 0.25)',
    borderColor: 'rgba(244, 67, 54, 1)',
  },

  message: {
    '@media (max-width: 480px)': {
      fontSize: '0.95rem',
      margin: '0 0 1rem 0',
    },
    fontSize: '1.1rem',
    fontWeight: '600',
    '@media (max-width: 768px)': {
      fontSize: '1rem',
      margin: '0 0 1.25rem 0',
    },

    lineHeight: '1.5',

    margin: '0 0 1.5rem 0',
  },

  notification: {
    '@media (max-width: 768px)': {
      padding: '1.5rem',
      maxWidth: '95vw',
      borderRadius: '10px',
    },
    backgroundColor: 'white',
    border: '3px solid rgba(76, 175, 80, 0.6)',
    '@media (max-width: 480px)': {
      borderRadius: '8px',
      maxWidth: '98vw',
      padding: '1.25rem',
    },
    borderRadius: '12px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    boxSizing: 'border-box',
    maxWidth: '500px',
    padding: '2rem',
    position: 'relative',

    textAlign: 'center',
    width: '100%',

    wordWrap: 'break-word',
  },

  overlay: {
    alignItems: 'center',
    '@media (max-width: 768px)': {
      padding: '0.75rem',
    },
    '@media (max-width: 480px)': {
      padding: '0.5rem',
    },
    animationDuration: '0.3s',

    animationFillMode: 'forwards',
    animationTimingFunction: 'ease-out',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    bottom: 0,

    boxSizing: 'border-box',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    left: 0,
    padding: '1rem',
    position: 'fixed',
    right: 0,
    top: 0,
    width: '100%',
    zIndex: 9999,
  },

  overlayFadeIn: {
    animationName: fadeIn,
  },

  overlayFadeOut: {
    animationName: fadeOut,
  },

  successMessage: {
    color: '#2e7d32',
  },

  successNotification: {
    backgroundColor: 'rgba(245, 247, 248, 1)',
    borderColor: 'rgba(76, 175, 80, 1)',
  },
});

interface CenteredNotificationProps {
  autoHide?: boolean;
  autoHideDelay?: number;
  isVisible: boolean;
  message: string;
  onClose: () => void;
  type: 'error' | 'success';
}

const CenteredNotification = ({
  autoHide = true,
  autoHideDelay = 10000,
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
    if (autoHide && isVisible && !isAnimatingOut) {
      const timer = setTimeout(() => {
        handleClose();
      }, autoHideDelay);

      return () => clearTimeout(timer);
    }
  }, [autoHide, autoHideDelay, isVisible, isAnimatingOut, handleClose]);

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

  if (!isVisible) return null;

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
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <button
          type='button'
          onClick={handleClose}
          {...stylex.props(styles.dismissButton)}
          aria-label='Close notification'
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
          type='button'
          onClick={handleClose}
          {...stylex.props(
            styles.closeButton,
            type === 'error' && styles.errorCloseButton
          )}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default CenteredNotification;
