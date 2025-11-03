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
    ':hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      opacity: 1,
    },
    alignItems: 'center',
    '@media (max-width: 480px)': {
      fontSize: '1.4rem',
      height: '32px',
      right: '0.375rem',
      top: '0.375rem',
      width: '32px',
    },

    
    
    







background: 'none',
// Mobile responsive styles for better touch targets
'@media (max-width: 768px)': {
      right: '0.5rem',
      height: '28px',
      top: '0.5rem',
      fontSize: '1.3rem',
      width: '28px',
    },

    border: 'none',

    borderRadius: '50%',

    color: 'inherit',

    cursor: 'pointer',

    display: 'flex',

    fontSize: '1.2rem',
    height: '24px',
    justifyContent: 'center',

    opacity: 0.7,
    padding: '0.25rem',
    position: 'absolute',
    right: '0.75rem',
    top: '0.5rem',

    transition: 'opacity 0.2s ease',

    width: '24px',
  },

  errorMessage: {
    '@media (max-width: 480px)': {
      fontSize: '0.85rem',
      padding: '0.75rem 0.875rem',
      marginBottom: '0.875rem',
      borderRadius: '6px',
      lineHeight: '1.25',
      maxWidth: '100%',
      wordWrap: 'break-word',
    },
    backgroundColor: 'rgba(244, 67, 54, 0.1)',

    
    
    







border: '1px solid rgba(244, 67, 54, 0.3)',
// Mobile responsive styles for error messages
'@media (max-width: 768px)': {
      fontSize: '0.9rem',
      marginBottom: '1rem',
      backgroundColor: 'rgba(244, 67, 54, 0.08)',
      padding: '0.875rem 1rem',
      border: '1px solid rgba(244, 67, 54, 0.4)',
      lineHeight: '1.3',
    },

    color: '#c62828',
  },

  messageBox: {
    
    
    







animationDuration: '0.3s',
// Mobile responsive base styles
'@media (max-width: 768px)': {
      // Better readability on mobile
      lineHeight: '1.4',
      textAlign: 'left',
    },

    animationFillMode: 'forwards',
    '@media (max-width: 480px)': {
      fontWeight: '600', // Slightly lighter weight for better mobile readability
      textAlign: 'left',
    },

    animationTimingFunction: 'ease-out',

    borderRadius: '8px',

    fontSize: '1rem',

    fontWeight: 'bold',

    hyphens: 'auto',
    marginBottom: '1rem',
    overflowWrap: 'break-word',

    padding: '1rem 1.5rem',
    position: 'relative',

    textAlign: 'center',

    wordWrap: 'break-word',
  },

  messageBoxFixed: {
    
    
    







backgroundColor: 'rgba(76, 175, 80, 0.15)',
// Mobile responsive styles
'@media (max-width: 768px)': {
      fontSize: '1rem',
      padding: '1rem 1.5rem',
      marginBottom: '1.5rem',
      border: '1px solid rgba(76, 175, 80, 0.6)',
      boxShadow: '0 4px 16px rgba(76, 175, 80, 0.3)',
    },

    border: '2px solid rgba(76, 175, 80, 0.6)',
    '@media (max-width: 480px)': {
      fontSize: '0.95rem',
      marginBottom: '1rem',
      padding: '0.875rem 1rem',
      borderRadius: '6px',
    },

    boxShadow: '0 8px 32px rgba(76, 175, 80, 0.3)',

    fontSize: '1.1rem',
    fontWeight: '600',
    left: '0',
    marginBottom: '2rem',

    marginTop: '0',
    maxWidth: '100%',
    padding: '1.5rem 2rem',
    position: 'relative',
    top: '0',
    transform: 'none',

    width: '100%',
    zIndex: 100,
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
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    '@media (max-width: 480px)': {
      fontSize: '0.9rem',
      lineHeight: '1.25',
    },


    
    
    






// Mobile responsive styles for success messages (when not using messageBoxFixed)
'@media (max-width: 768px)': {
      fontSize: '0.95rem',
      lineHeight: '1.3',
    },

border: '1px solid rgba(76, 175, 80, 0.3)',

    color: '#2e7d32',
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
        if (isVisible && !isAnimatingOut) {
          handleDismiss();
        }
      }, autoHideDelay);

      return () => clearTimeout(timer);
    }
  }, [autoHide, autoHideDelay, isVisible, isAnimatingOut, handleDismiss]);

  if (!isVisible) return null;

  return (
    <div
      {...stylex.props(
        styles.messageBox,
        showAtTop && styles.messageBoxFixed,
        // Use different animations for fixed vs regular positioning
        showAtTop
          ? isAnimatingOut
            ? styles.messageBoxSlideOutFixed
            : styles.messageBoxSlideInFixed
          : isAnimatingOut
            ? styles.messageBoxSlideOut
            : styles.messageBoxSlideIn,
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
