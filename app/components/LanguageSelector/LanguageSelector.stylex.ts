import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  arrow: {
    transition: 'transform 0.2s ease',
    fontSize: '0.625rem',
  },

  arrowOpen: {
    transform: 'rotate(180deg)',
  },

  container: {
    position: 'relative',
    zIndex: 1002,
  },

  containerDesktop: {
    display: {
      default: 'block',
      '@media (max-width: 768px)': 'none',
    },
  },

  containerMobile: {
    display: 'block',
    marginTop: '1.5rem',
    width: '100%',
  },

  dropdown: {
    background:
      'linear-gradient(135deg, rgba(102, 126, 234, 0.98) 0%, rgba(118, 75, 162, 0.98) 100%)',
    margin: 0,
    padding: 0,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '8px',
    borderStyle: 'solid',
    borderWidth: '1px',
    listStyle: 'none',
    overflow: 'hidden',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    marginTop: '4px',
    minWidth: '100%',
    right: 0,
    top: '100%',
  },

  dropdownMobile: {
    position: 'relative',
    marginTop: '0.5rem',
    right: 'auto',
    top: 'auto',
  },

  option: {
    background: 'none',
    padding: '0.75rem 1rem',
    borderStyle: 'none',
    borderWidth: 0,
    transition: 'all 0.2s ease',
    backgroundColor: {
      default: 'transparent',
      ':hover': 'rgba(255, 255, 255, 0.2)',
    },
    color: 'white',
    cursor: 'pointer',
    display: 'block',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 500,
    textAlign: 'center',
    width: '100%',
  },

  optionActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    fontWeight: 600,
  },

  trigger: {
    background: 'rgba(255, 255, 255, 0.15)',
    padding: '0.6rem 1rem',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '8px',
    borderStyle: 'solid',
    borderWidth: '1px',
    gap: '0.5rem',
    transition: 'all 0.3s ease',
    alignItems: 'center',
    appearance: 'none',
    backgroundColor: {
      default: 'rgba(255, 255, 255, 0.15)',
      ':hover': 'rgba(255, 255, 255, 0.25)',
    },
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    flexShrink: 0,
    fontSize: '0.875rem',
    fontWeight: 500,
    justifyContent: 'space-between',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
    transform: {
      default: null,
      ':hover': 'translateY(-1px)',
    },
    minWidth: '70px',
  },

  triggerMobile: {
    padding: '1rem',
    fontSize: '1rem',
    justifyContent: 'center',
    width: '100%',
  },
});
