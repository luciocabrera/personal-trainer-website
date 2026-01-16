import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  footer: {
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    padding: '1.5rem',
    boxShadow: '0 -4px 20px rgba(102, 126, 234, 0.3)',
    color: 'white',
    textAlign: 'center',
  },

  footerBottom: {
    gap: '1rem',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },

  footerContacts: {
    gap: '4rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '1rem',
  },

  // Mobile responsive styles
  footerContactsMobile: {
    gap: {
      default: null,
      '@media (max-width: 768px)': '1.5rem',
    },
    alignItems: {
      default: null,
      '@media (max-width: 768px)': 'center',
    },
    flexDirection: {
      default: null,
      '@media (max-width: 768px)': 'column',
    },
  },
  footerContent: {
    margin: '0 auto',
    maxWidth: '1200px',
  },

  footerLink: {
    background: {
      default: 'rgba(255, 255, 255, 0.1)',
      ':hover': 'rgba(255, 255, 255, 0.2)',
    },
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    gap: '0.5rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    alignItems: 'center',
    color: 'white',
    display: 'flex',
    fontSize: '0.9rem',
    transform: {
      default: null,
      ':hover': 'translateY(-2px)',
    },
    willChange: {
      default: null,
      ':hover': 'transform',
    },
  },

  footerLinkIcon: {
    height: '16px',
    width: '16px',
  },

  footerLinkMobile: {
    padding: {
      default: null,
      '@media (max-width: 768px)': '0.4rem 0.8rem',
    },
    fontSize: {
      default: null,
      '@media (max-width: 768px)': '0.8rem',
    },
  },

  version: {
    margin: 0,
  },
});
