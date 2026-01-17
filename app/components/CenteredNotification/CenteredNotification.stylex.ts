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

export const styles = stylex.create({
  closeButton: {
    padding: {
      default: '0.8rem 1.5rem',
      '@media (max-width: 480px)': '0.7rem 1.25rem',
    },
    borderRadius: {
      default: '25px',
      '@media (max-width: 480px)': '25px',
    },
    borderStyle: 'none',
    borderWidth: 0,
    transition: 'all 0.3s ease',
    backgroundImage: {
      default: 'linear-gradient(135deg, #ff6b6b, #4ecdc4)',
      ':hover': 'linear-gradient(135deg, #ff5252, #26a69a)',
    },
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
    textTransform: 'uppercase',
    transform: {
      default: 'translateY(0)',
      ':hover': 'translateY(-2px)',
      ':active': 'translateY(0)',
    },
    minWidth: {
      default: '100px',
      '@media (max-width: 480px)': '80px',
    },
  },

  dismissButton: {
    padding: '0.25rem',
    borderRadius: '50%',
    borderStyle: 'none',
    borderWidth: 0,

    transition: 'all 0.2s ease',
    alignItems: 'center',

    backgroundColor: {
      default: 'none',
      ':hover': 'rgba(0, 0, 0, 0.1)',
    },
    color: '#666',
    cursor: 'pointer',
    display: 'flex',
    fontSize: {
      default: '1.5rem',
      '@media (max-width: 480px)': '1.3rem',
      '@media (max-width: 768px)': '1.3rem',
    },
    justifyContent: 'center',
    opacity: {
      default: 0.7,
      ':hover': 1,
    },
    position: 'absolute',
    transform: {
      ':hover': 'rotate(90deg)',
    },
    height: {
      default: '32px',
      '@media (max-width: 480px)': '28px',
      '@media (max-width: 768px)': '28px',
    },
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

    width: {
      default: '32px',
      '@media (max-width: 480px)': '28px',
      '@media (max-width: 768px)': '28px',
    },
  },

  errorCloseButton: {
    backgroundImage: {
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
    borderColor: 'rgba(244, 67, 54, 1)',
    backgroundColor: 'rgba(244, 67, 54, 0.25)',
  },

  message: {
    margin: {
      default: '0 0 1.5rem 0',
      '@media (max-width: 480px)': '0 0 1rem 0',
      '@media (max-width: 768px)': '0 0 1.25rem 0',
    },
    fontSize: {
      default: '1.1rem',
      '@media (max-width: 480px)': '0.95rem',
      '@media (max-width: 768px)': '1rem',
    },
    fontWeight: 600,
    lineHeight: 1.5,
  },

  notification: {
    padding: {
      default: '2rem',
      '@media (max-width: 480px)': '1.25rem',
      '@media (max-width: 768px)': '1.5rem',
    },
    borderColor: 'rgba(76, 175, 80, 0.6)',
    borderRadius: {
      default: '12px',
      '@media (max-width: 480px)': '8px',
      '@media (max-width: 768px)': '10px',
    },
    borderStyle: 'solid',
    borderWidth: '3px',
    backgroundColor: 'white',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    boxSizing: 'border-box',
    position: 'relative',

    textAlign: 'center',

    wordWrap: 'break-word',
    maxWidth: {
      default: '500px',
      '@media (max-width: 480px)': '98vw',
      '@media (max-width: 768px)': '95vw',
    },
    width: '100%',
  },

  overlay: {
    padding: {
      default: '1rem',
      '@media (max-width: 480px)': '0.5rem',
      '@media (max-width: 768px)': '0.75rem',
    },
    alignItems: 'center',
    animationDuration: '0.3s',
    animationFillMode: 'forwards',
    animationTimingFunction: 'ease-out',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    zIndex: 9999,
    bottom: 0,
    height: '100%',
    left: 0,
    right: 0,
    top: 0,
    width: '100%',
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
    borderColor: 'rgba(76, 175, 80, 1)',
    backgroundColor: 'rgba(245, 247, 248, 1)',
  },
});
