/* eslint-disable sort-keys, sort-keys-fix/sort-keys-fix */
import { useCallback, useEffect, useState } from 'react';
import * as stylex from '@stylexjs/stylex';

const slideIn = stylex.keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(-100%)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const slideOut = stylex.keyframes({
  '0%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
  '100%': {
    opacity: 0,
    transform: 'translateY(-100%)',
  },
});

const slideInFixed = stylex.keyframes({
  '0%': {
    opacity: 0,
    transform: 'scale(0.9)',
  },
  '100%': {
    opacity: 1,
    transform: 'scale(1)',
  },
});

const slideOutFixed = stylex.keyframes({
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
  dismissButton: {

    background: 'none',







    padding: '0.25rem',
    borderRadius: '50%',
    borderStyle: 'none',
    borderWidth: 0,

    transition: 'opacity 0.2s ease',
    alignItems: 'center',
    backgroundColor: {
      ':hover': 'rgba(0, 0, 0, 0.1)',
    },
    color: 'inherit',
    cursor: 'pointer',
    display: 'flex',
    fontSize: {
      default: '1.2rem',
      '@media (max-width: 480px)': '1.4rem',
      '@media (max-width: 768px)': '1.3rem',
    },
    justifyContent: 'center',
    opacity: {
      default: 0.7,
      ':hover': 1,
    },
    // Mobile responsive styles for better touch targets
    position: 'absolute',
    height: {
      default: '24px',
      '@media (max-width: 480px)': '32px',
      '@media (max-width: 768px)': '28px',
    },
    right: {
      default: '0.75rem',
      '@media (max-width: 480px)': '0.375rem',
      '@media (max-width: 768px)': '0.5rem',
    },
    top: {
      default: '0.5rem',
      '@media (max-width: 480px)': '0.375rem',
      '@media (max-width: 768px)': '0.5rem',
    },

    width: {
      default: '24px',
      '@media (max-width: 480px)': '32px',
      '@media (max-width: 768px)': '28px',
    },
  },

  errorMessage: {


    padding: {
      '@media (max-width: 480px)': '0.75rem 0.875rem',
      '@media (max-width: 768px)': '0.875rem 1rem',
    },
    borderColor: {
      default: 'rgba(244, 67, 54, 0.3)',
      '@media (max-width: 768px)': 'rgba(244, 67, 54, 0.4)',
    },
    borderRadius: {
      '@media (max-width: 480px)': '6px',
    },
    borderStyle: 'solid',
    borderWidth: '1px',
    backgroundColor: {
      default: 'rgba(244, 67, 54, 0.1)',
      '@media (max-width: 768px)': 'rgba(244, 67, 54, 0.08)',
    },
    color: '#c62828',
    fontSize: {
      '@media (max-width: 480px)': '0.85rem',
      '@media (max-width: 768px)': '0.9rem',
    },
    lineHeight: {
      '@media (max-width: 480px)': 1.25,
      '@media (max-width: 768px)': 1.3,
    },
    wordWrap: {
      '@media (max-width: 480px)': 'break-word',
    },
    marginBottom: {
      '@media (max-width: 480px)': '0.875rem',
      '@media (max-width: 768px)': '1rem',
    },
    maxWidth: {
      '@media (max-width: 480px)': '100%',
    },
  },

  messageBox: {






    padding: '1rem 1.5rem',
    borderRadius: '8px',
    animationDuration: '0.3s',
    animationFillMode: 'forwards',
    animationTimingFunction: 'ease-out',
    fontSize: '1rem',
    fontWeight: {
      default: 'bold',
      '@media (max-width: 480px)': 600, // Slightly lighter weight for better mobile readability
    },
    // Mobile responsive base styles
    hyphens: 'auto',
    lineHeight: {
      '@media (max-width: 768px)': 1.4,
    },
    overflowWrap: 'break-word',
    position: 'relative',

    textAlign: {
      default: 'center',
      '@media (max-width: 480px)': 'left',
      '@media (max-width: 768px)': 'left', // Better readability on mobile
    },

    wordWrap: 'break-word',
    marginBottom: '1rem',
  },

  messageBoxFixed: {




    padding: {
      default: '1.5rem 2rem',
      '@media (max-width: 480px)': '0.875rem 1rem',
      '@media (max-width: 768px)': '1rem 1.5rem',
    },
    borderColor: {
      default: 'rgba(76, 175, 80, 0.6)',
      '@media (max-width: 768px)': 'rgba(76, 175, 80, 0.6)',
    },
    borderRadius: {
      '@media (max-width: 480px)': '6px',
    },
    borderStyle: 'solid',
    borderWidth: {
      default: '2px',
      '@media (max-width: 768px)': '1px',
    },
    backgroundColor: 'rgba(76, 175, 80, 0.15)',
    boxShadow: {
      default: '0 8px 32px rgba(76, 175, 80, 0.3)',
      '@media (max-width: 768px)': '0 4px 16px rgba(76, 175, 80, 0.3)',
    },
    fontSize: {
      default: '1.1rem',
      '@media (max-width: 480px)': '0.95rem',
      '@media (max-width: 768px)': '1rem',
    },
    fontWeight: 600,
    position: 'relative',
    transform: 'none',

    zIndex: 100,
    left: '0',
    // Mobile responsive styles
    marginBottom: {
      default: '2rem',
      '@media (max-width: 480px)': '1rem',
      '@media (max-width: 768px)': '1.5rem',
    },
    marginTop: '0',
    maxWidth: '100%',
    top: '0',
    width: '100%',
  },

  messageBoxSlideIn: {
    animationName: slideIn,
  },

  messageBoxSlideInFixed: {
    animationName: slideInFixed,
  },

  messageBoxSlideOut: {
    animationName: slideOut,
  },

  messageBoxSlideOutFixed: {
    animationName: slideOutFixed,
  },

  successMessage: {

    borderColor: 'rgba(76, 175, 80, 0.3)',
    borderStyle: 'solid',
    borderWidth: '1px',
    backgroundColor: 'rgba(76, 175, 80, 0.1)',

    color: '#2e7d32',
    fontSize: {
      '@media (max-width: 480px)': '0.9rem',
      '@media (max-width: 768px)': '0.95rem',
    },
    lineHeight: {
      '@media (max-width: 480px)': 1.25,
      '@media (max-width: 768px)': 1.3,
    },
    // Mobile responsive styles for success messages (when not using messageBoxFixed)
  },
});

interface EnhancedMessageProps {
  autoHide?: boolean;
  autoHideDelay?: number;
  message: string;
  onDismiss?: () => void;
  showAtTop?: boolean;
  type: 'error' | 'success';
}

const EnhancedMessage = ({
  autoHide = false,
  autoHideDelay = 5000,
  message,
  onDismiss,
  showAtTop = false,
  type,
}: EnhancedMessageProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const handleDismiss = useCallback(() => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsVisible(false);
      onDismiss?.();
    }, 300); // Match animation duration
  }, [onDismiss]);

  // Auto-hide functionality with useEffect
  useEffect(() => {
    if (autoHide && isVisible) {
      const timer = setTimeout(() => {
        if (isAnimatingOut === false) {
          handleDismiss();
        }
      }, autoHideDelay);

      return () => clearTimeout(timer);
    }
  }, [autoHide, autoHideDelay, isVisible, isAnimatingOut, handleDismiss]);

  if (!isVisible) return null;

  // Determine animation style based on position and state
  const getAnimationStyle = () => {
    if (showAtTop) {
      return isAnimatingOut
        ? styles.messageBoxSlideOutFixed
        : styles.messageBoxSlideInFixed;
    }
    return isAnimatingOut
      ? styles.messageBoxSlideOut
      : styles.messageBoxSlideIn;
  };

  return (
    <div
      {...stylex.props(
        styles.messageBox,
        showAtTop ? styles.messageBoxFixed : null,
        getAnimationStyle(),
        type === 'success' ? styles.successMessage : styles.errorMessage
      )}
    >
      {message}
      <button
        type='button'
        onClick={handleDismiss}
        {...stylex.props(styles.dismissButton)}
        aria-label='Dismiss message'
      >
        ×
      </button>
    </div>
  );
};

export default EnhancedMessage;
