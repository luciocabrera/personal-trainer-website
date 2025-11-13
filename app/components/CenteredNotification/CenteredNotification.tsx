/* eslint-disable sort-keys, sort-keys-fix/sort-keys-fix */
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
    background: {
      default: 'linear-gradient(135deg, #ff6b6b, #4ecdc4)',
      ':hover': 'linear-gradient(135deg, #ff5252, #26a69a)',
    },
    borderRadius: {
      default: '25px',
      '@media (max-width: 480px)': '25px',
    },
    borderStyle: 'none',
    borderWidth: 0,
    boxShadow: {
      default: '0 4px 15px rgba(255, 107, 107, 0.4)',
      ':hover': '0 8px 25px rgba(255, 107, 107, 0.6)',
    },
    color: 'white',
    cursor: 'pointer',
    fontSize: {
      default: '1rem',
      '@media (max-width: 480px)': '0.9rem',
    },
    fontWeight: 'bold',
    letterSpacing: {
      default: '1px',
      '@media (max-width: 480px)': '0.5px',
    },
    minWidth: {
      default: '100px',
      '@media (max-width: 480px)': '80px',
    },
    padding: {
      default: '0.8rem 1.5rem',
      '@media (max-width: 480px)': '0.7rem 1.25rem',
    },
    textTransform: 'uppercase',
    transform: {
      default: 'translateY(0)',
      ':active': 'translateY(0)',
      ':hover': 'translateY(-2px)',
    },
    transition: 'all 0.3s ease',
  },

  dismissButton: {
    alignItems: 'center',
    background: 'none',
    backgroundColor: {
      ':hover': 'rgba(0, 0, 0, 0.1)',
    },
    borderRadius: '50%',
    borderStyle: 'none',
    borderWidth: 0,
    color: '#666',
    cursor: 'pointer',
    display: 'flex',
    fontSize: {
      default: '1.5rem',
      '@media (max-width: 480px)': '1.3rem',
      '@media (max-width: 768px)': '1.3rem',
    },
    height: {
      default: '32px',
      '@media (max-width: 480px)': '28px',
      '@media (max-width: 768px)': '28px',
    },
    justifyContent: 'center',
    opacity: {
      default: 0.7,
      ':hover': 1,
    },
    padding: '0.25rem',
    position: 'absolute',
    right: {
      default: '0.75rem',
      '@media (max-width: 480px)': '0.5rem',
      '@media (max-width: 768px)': '0.5rem',
    },
    top: {
      default: '0.75rem',
      '@media (max-width: 480px)': '0.5rem',
      '@media (max-width: 768px)': '0.5rem',
    },

    transform: {
      ':hover': 'rotate(90deg)',
    },
    transition: 'all 0.2s ease',

    width: {
      default: '32px',
      '@media (max-width: 480px)': '28px',
      '@media (max-width: 768px)': '28px',
    },
  },

  errorCloseButton: {
    background: {
      default: 'linear-gradient(135deg, #f44336, #ff6b6b)',
      ':hover': 'linear-gradient(135deg, #d32f2f, #ff5252)',
    },
    boxShadow: {
      default: '0 4px 15px rgba(244, 67, 54, 0.4)',
      ':hover': '0 8px 25px rgba(244, 67, 54, 0.6)',
    },
  },

  errorMessage: {
    color: '#c62828',
  },
  errorNotification: {
    backgroundColor: 'rgba(244, 67, 54, 0.25)',
    borderColor: 'rgba(244, 67, 54, 1)',
  },

  message: {
    fontSize: {
      default: '1.1rem',
      '@media (max-width: 480px)': '0.95rem',
      '@media (max-width: 768px)': '1rem',
    },
    fontWeight: 600,
    lineHeight: 1.5,

    margin: {
      default: '0 0 1.5rem 0',
      '@media (max-width: 480px)': '0 0 1rem 0',
      '@media (max-width: 768px)': '0 0 1.25rem 0',
    },
  },

  notification: {
    backgroundColor: 'white',
    borderColor: 'rgba(76, 175, 80, 0.6)',
    borderRadius: {
      default: '12px',
      '@media (max-width: 480px)': '8px',
      '@media (max-width: 768px)': '10px',
    },
    borderStyle: 'solid',
    borderWidth: '3px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    boxSizing: 'border-box',
    maxWidth: {
      default: '500px',
      '@media (max-width: 480px)': '98vw',
      '@media (max-width: 768px)': '95vw',
    },
    padding: {
      default: '2rem',
      '@media (max-width: 480px)': '1.25rem',
      '@media (max-width: 768px)': '1.5rem',
    },
    position: 'relative',

    textAlign: 'center',
    width: '100%',

    wordWrap: 'break-word',
  },

  overlay: {
    alignItems: 'center',
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
    padding: {
      default: '1rem',
      '@media (max-width: 480px)': '0.5rem',
      '@media (max-width: 768px)': '0.75rem',
    },
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

  const handleNotificationClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent closing when clicking inside
  };

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
            type === 'error' ? styles.errorCloseButton : null
          )}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default CenteredNotification;
