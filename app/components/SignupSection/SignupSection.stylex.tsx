/* eslint-disable sort-keys, sort-keys-fix/sort-keys-fix */
import * as stylex from '@stylexjs/stylex';

const floatAnimation = stylex.keyframes({
  '0%': { transform: 'translateY(0px)' },
  '100%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-5px)' },
});

export const styles = stylex.create({
  contactLink: {
    alignItems: 'center',
    borderRadius: '25px',
    display: 'flex',
    fontWeight: 500,
    gap: '0.5rem',
    padding: '0.8rem 1.2rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  },

  contactLinkIcon: {
    height: '20px',
    width: '20px',
  },

  contactLinks: {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
    marginBottom: '1rem',
  },

  contactSection: {
    background:
      'linear-gradient(135deg, rgba(255, 107, 107, 0.05), rgba(78, 205, 196, 0.05))',
    borderBottomLeftRadius: '15px',
    borderBottomRightRadius: '15px',
    borderColor: 'rgba(255, 107, 107, 0.1)',
    borderStyle: 'solid',
    borderWidth: '1px',
    marginTop: '2rem',
    padding: '1.5rem',
  },

  contactTitle: {
    color: '#333',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },

  emailLink: {
    background: {
      default: 'linear-gradient(135deg, #ff6b6b, #ff9500)',
      ':hover': 'linear-gradient(135deg, #ff5252, #ff8500)',
    },
    boxShadow: {
      default: '0 4px 15px rgba(255, 107, 107, 0.3)',
      ':hover': '0 6px 20px rgba(255, 107, 107, 0.5)',
    },
    color: 'white',
    transform: {
      ':hover': 'translateY(-2px)',
    },
  },

  errorMessage: {
    backgroundColor: 'rgba(244, 67, 54, 0.1)',
    borderColor: 'rgba(244, 67, 54, 0.3)',
    borderStyle: 'solid',
    borderWidth: '1px',
    color: '#c62828',
  },

  followText: {
    color: '#666',
    fontStyle: 'italic',
    marginTop: '1rem',
  },

  contactLinksMobile: {
    alignItems: {
      '@media (max-width: 768px)': 'center',
    },
    flexDirection: {
      '@media (max-width: 768px)': 'column',
    },
    gap: {
      '@media (max-width: 768px)': '1rem',
    },
  },

  formButton: {
    background: {
      default: 'linear-gradient(135deg, #ff6b6b, #4ecdc4)',
      ':hover': 'linear-gradient(135deg, #ff5252, #26a69a)',
    },
    borderRadius: '25px',
    borderStyle: 'none',
    borderWidth: 0,
    boxShadow: {
      default: '0 4px 15px rgba(255, 107, 107, 0.4)',
      ':hover': '0 8px 25px rgba(255, 107, 107, 0.6)',
    },
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'bold',
    letterSpacing: '1px',
    padding: '0.8rem 1.5rem',
    textTransform: 'uppercase',
    transform: {
      ':hover': 'translateY(-2px)',
    },
    transition: 'all 0.3s ease',
  },

  contactLinkMobile: {
    justifyContent: {
      '@media (max-width: 768px)': 'center',
    },
    maxWidth: {
      '@media (max-width: 768px)': '250px',
    },
    width: {
      '@media (max-width: 768px)': '100%',
    },
  },

  formInput: {
    borderColor: {
      default: '#ccc',
      ':focus': '#4ecdc4',
      '@media (max-width: 768px)': '#ddd',
    },
    borderRadius: {
      default: '3px',
      '@media (max-width: 768px)': '8px',
    },
    borderStyle: {
      default: 'solid',
      '@media (max-width: 768px)': 'solid',
    },
    borderWidth: {
      default: '1px',
      '@media (max-width: 768px)': '2px',
    },
    boxShadow: {
      ':focus': '0 0 0 3px rgba(78, 205, 196, 0.1)',
    },
    boxSizing: 'border-box',
    // Prevent mobile zoom on iOS
    fontFamily: 'inherit',

    fontSize: {
      default: '16px',
      '@media (max-width: 768px)': '16px', // Critical: prevents zoom on iOS Safari
    },

    lineHeight: 1.4,
    outline: {
      ':focus': 'none',
    },
    padding: {
      default: '0.5rem',
      '@media (max-width: 768px)': '0.75rem',
    },
    transition: {
      '@media (max-width: 768px)': 'border-color 0.3s ease',
    },
    width: '100%',
  },

  formTextarea: {
    borderColor: {
      default: '#ccc',
      ':focus': '#4ecdc4',
      '@media (max-width: 768px)': '#ddd',
    },
    borderRadius: {
      default: '3px',
      '@media (max-width: 768px)': '8px',
    },
    borderStyle: {
      default: 'solid',
      '@media (max-width: 768px)': 'solid',
    },
    borderWidth: {
      default: '1px',
      '@media (max-width: 768px)': '2px',
    },
    boxShadow: {
      ':focus': '0 0 0 3px rgba(78, 205, 196, 0.1)',
    },
    boxSizing: 'border-box',
    // Prevent mobile zoom on iOS
    fontFamily: 'inherit',
    fontSize: {
      default: '16px',
      '@media (max-width: 768px)': '16px',
    },
    lineHeight: 1.4,
    minHeight: {
      default: '100px',
      '@media (max-width: 768px)': '120px',
    },
    outline: {
      ':focus': 'none',
    },
    padding: {
      default: '0.5rem',
      '@media (max-width: 768px)': '0.75rem',
    },

    resize: 'vertical',
    transition: {
      '@media (max-width: 768px)': 'border-color 0.3s ease',
    },
    width: '100%',
  },

  signup: {
    backdropFilter: 'blur(10px)',
    background: 'rgba(255, 255, 255, 0.95)',
    borderColor: 'rgba(255, 255, 255, 0.3)',

    borderRadius: '20px',
    borderStyle: 'solid',
    borderWidth: '1px',

    boxShadow: '0 8px 32px rgba(78, 205, 196, 0.2)',
    display: 'flex',
    flexDirection: 'column',

    flexWrap: 'wrap',

    gap: 0,
    margin: 0,
    minHeight: {
      '@media (max-width: 768px)': 'auto',
    },
    overflow: {
      '@media (max-width: 768px)': 'visible',
    },
    padding: 0,
    transform: {
      '@media (max-width: 768px)': 'translateZ(0)', // Hardware acceleration
    },
    willChange: {
      '@media (max-width: 768px)': 'auto',
    },
  },

  instagramLink: {
    background: {
      default: 'linear-gradient(135deg, #e91e63, #9c27b0)',
      ':hover': 'linear-gradient(135deg, #d81b60, #8e24aa)',
    },
    boxShadow: {
      default: '0 4px 15px rgba(233, 30, 99, 0.3)',
      ':hover': '0 6px 20px rgba(233, 30, 99, 0.5)',
    },
    color: 'white',
    transform: {
      ':hover': 'translateY(-2px)',
    },
  },

  signupForm: {
    marginTop: '2rem',
    textAlign: 'center',
  },

  messageBox: {
    borderRadius: '8px',
    fontWeight: 'bold',
    marginBottom: '1rem',
    padding: '1rem',
    textAlign: 'center',
  },

  signupIconContainer: {
    alignItems: 'center',
    backdropFilter: 'blur(10px)',
    background:
      'linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(78, 205, 196, 0.1))',
    borderColor: 'rgba(255, 107, 107, 0.2)',
    borderStyle: 'solid',
    borderWidth: '1px',
    display: 'flex',
    height: '250px',
    justifyContent: 'center',
    margin: '0 auto',
    maxWidth: '100%',
    width: '100%',
  },

  signupFormElement: {
    display: 'flex',
    flexDirection: 'column',
    gap: {
      default: '1rem',
      '@media (max-width: 480px)': '1rem',
      '@media (max-width: 768px)': '1.25rem',
    },
    margin: '0 auto',

    maxWidth: {
      default: '400px',
      '@media (max-width: 768px)': '100%',
    },
    padding: {
      '@media (max-width: 480px)': '0 0.5rem',
      '@media (max-width: 768px)': '0 1rem',
    },
  },

  signupImage: {
    textAlign: 'center',
  },

  signupFormMobile: {
    marginTop: {
      '@media (max-width: 480px)': '1rem',
      '@media (max-width: 768px)': '1.5rem',
    },
    padding: {
      '@media (max-width: 480px)': '0 0.5rem',
      '@media (max-width: 768px)': '0 1rem',
    },
  },

  signupTitle: {
    background: `
      linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 50%, rgba(255, 107, 107, 0.9) 100%),
      url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.06'%3E%3Cpath d='M50 15L60 35H40L50 15ZM85 50L75 30H95L85 50ZM15 50L25 70H5L15 50ZM50 85L40 65H60L50 85Z'/%3E%3Ccircle cx='50' cy='50' r='8'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
    `,
    backgroundRepeat: 'no-repeat, repeat',
    backgroundSize: 'cover, 100px 100px',
    borderRadius: '20px 20px 0 0',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
    color: 'white',
    fontSize: '2.2rem',
    fontWeight: 'bold',
    margin: 0,
    // margin: "-2rem -2rem 2rem -2rem",
    padding: '2rem',
    position: 'relative',
    textAlign: 'center',
  },

  signupIconContainerMobile: {
    height: {
      '@media (max-width: 768px)': '250px',
    },
    margin: {
      '@media (max-width: 768px)': 0,
    },
    maxWidth: {
      '@media (max-width: 768px)': '100%',
    },
    width: {
      '@media (max-width: 768px)': '100%',
    },
  },

  signupIconSvg: {
    animationDuration: '4s',
    animationIterationCount: 'infinite',
    animationName: floatAnimation,
    animationTimingFunction: 'ease-in-out',
    height: 'auto',
    maxWidth: '100%',
    willChange: 'transform',
  },

  signupIconSvgMobile: {
    height: {
      '@media (max-width: 768px)': 'auto',
    },
    maxWidth: {
      '@media (max-width: 768px)': '300px',
    },
    width: {
      '@media (max-width: 768px)': '90%',
    },
  },

  // Mobile responsive styles
  signupMobile: {
    borderRadius: {
      '@media (max-width: 480px)': '12px',
      '@media (max-width: 768px)': '15px',
    },
    margin: {
      '@media (max-width: 480px)': '0 0.5rem',
      '@media (max-width: 768px)': '0 1rem',
    },
  },

  successMessage: {
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    borderColor: 'rgba(76, 175, 80, 0.3)',
    borderStyle: 'solid',
    borderWidth: '1px',
    color: '#2e7d32',
  },
});
