import * as stylex from '@stylexjs/stylex';

const floatAnimation = stylex.keyframes({
  '0%': { transform: 'translateY(0px)' },
  '100%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-5px)' },
});

export const styles = stylex.create({
  contactLink: {
    padding: '0.8rem 1.2rem',
    borderRadius: '25px',
    gap: '0.5rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    alignItems: 'center',
    display: 'flex',
    fontWeight: 500,
  },

  contactLinkIcon: {
    height: '20px',
    width: '20px',
  },

  contactLinks: {
    gap: '2rem',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem',
  },

  contactSection: {
    padding: '1.5rem',
    borderColor: 'rgba(255, 107, 107, 0.1)',
    borderStyle: 'solid',
    borderWidth: '1px',
    backgroundImage:
      'linear-gradient(135deg, rgba(255, 107, 107, 0.05), rgba(78, 205, 196, 0.05))',
    borderBottomLeftRadius: {
      default: '15px',
      '@media (max-width: 768px)': '0',
    },
    borderBottomRightRadius: {
      default: '15px',
      '@media (max-width: 768px)': '0',
    },
    marginTop: '2rem',
  },

  contactTitle: {
    color: '#333',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },

  emailLink: {
    backgroundImage: {
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
    borderColor: 'rgba(244, 67, 54, 0.3)',
    borderStyle: 'solid',
    borderWidth: '1px',
    backgroundColor: 'rgba(244, 67, 54, 0.1)',
    color: '#c62828',
  },

  followText: {
    color: '#666',
    fontStyle: 'italic',
    marginTop: '0.5rem',
  },

  contactLinksMobile: {
    gap: {
      '@media (max-width: 768px)': '1rem',
    },
    alignItems: {
      '@media (max-width: 768px)': 'center',
    },
    flexDirection: {
      '@media (max-width: 768px)': 'column',
    },
  },

  formButton: {
    padding: '0.8rem 1.5rem',
    borderRadius: '25px',
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
    fontWeight: 'bold',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    transform: {
      ':hover': 'translateY(-2px)',
    },
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
    padding: {
      default: '0.5rem',
      '@media (max-width: 768px)': '0.75rem',
    },
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
    outline: {
      ':focus': 'none',
    },
    transition: {
      '@media (max-width: 768px)': 'border-color 0.3s ease',
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
    width: '100%',
  },

  formTextarea: {
    padding: {
      default: '0.5rem',
      '@media (max-width: 768px)': '0.75rem',
    },
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
    outline: {
      ':focus': 'none',
    },

    transition: {
      '@media (max-width: 768px)': 'border-color 0.3s ease',
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
    resize: 'vertical',
    minHeight: {
      default: '100px',
      '@media (max-width: 768px)': '120px',
    },
    width: '100%',
  },

  signup: {
    margin: 0,
    padding: 0,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: {
      default: '20px',
      '@media (max-width: 768px)': '0',
    },
    borderStyle: 'solid',
    borderWidth: '1px',
    gap: 0,
    overflow: {
      '@media (max-width: 768px)': 'visible',
    },
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    boxShadow: '0 8px 32px rgba(78, 205, 196, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    transform: {
      '@media (max-width: 768px)': 'translateZ(0)', // Hardware acceleration
    },
    willChange: {
      '@media (max-width: 768px)': 'auto',
    },
    minHeight: {
      '@media (max-width: 768px)': 'auto',
    },
  },

  instagramLink: {
    backgroundImage: {
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
    // padding: '2rem',
    textAlign: 'center',
    marginTop: '0',
  },

  messageBox: {
    padding: '1rem',
    borderRadius: '8px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '1rem',
  },

  signupIconContainer: {
    margin: '0 auto',
    borderColor: 'rgba(255, 107, 107, 0.2)',
    borderStyle: 'solid',
    borderWidth: '1px',
    alignItems: 'center',
    backdropFilter: 'blur(10px)',
    backgroundImage:
      'linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(78, 205, 196, 0.1))',
    display: 'flex',
    justifyContent: 'center',
    height: '250px',
    maxWidth: '100%',
    width: '100%',
  },

  signupFormElement: {
    margin: '0 auto',

    padding: {
      '@media (max-width: 480px)': '0 0.5rem',
      '@media (max-width: 768px)': '0 1rem',
    },
    gap: {
      default: '1rem',
      '@media (max-width: 480px)': '1rem',
      '@media (max-width: 768px)': '1.25rem',
    },
    display: 'flex',
    flexDirection: 'column',
    maxWidth: {
      default: '400px',
      '@media (max-width: 768px)': '100%',
    },
  },

  signupImage: {
    textAlign: 'center',
  },

  signupFormMobile: {
    padding: {
      '@media (max-width: 480px)': '0 0.5rem',
      '@media (max-width: 768px)': '0 1rem',
    },
    marginTop: {
      '@media (max-width: 480px)': '1rem',
      '@media (max-width: 768px)': '1.5rem',
    },
  },

  signupTitle: {
    margin: 0,
    // margin: "-2rem -2rem 2rem -2rem",
    padding: '2rem',
    borderRadius: {
      default: '20px 20px 0 0',
      '@media (max-width: 768px)': '0',
    },
    backgroundImage: `
      linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 50%, rgba(255, 107, 107, 0.9) 100%),
      url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.06'%3E%3Cpath d='M50 15L60 35H40L50 15ZM85 50L75 30H95L85 50ZM15 50L25 70H5L15 50ZM50 85L40 65H60L50 85Z'/%3E%3Ccircle cx='50' cy='50' r='8'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
    `,
    backgroundRepeat: 'no-repeat, repeat',
    backgroundSize: 'cover, 100px 100px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
    color: 'white',
    fontSize: '2.2rem',
    fontWeight: 'bold',
    position: 'relative',
    textAlign: 'center',
  },

  signupIconContainerMobile: {
    margin: {
      '@media (max-width: 768px)': 0,
    },
    height: {
      '@media (max-width: 768px)': '250px',
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
    willChange: 'transform',
    height: 'auto',
    maxWidth: '100%',
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
    margin:0,
    // margin: {
    //   '@media (max-width: 480px)': '0 0.5rem',
    //   '@media (max-width: 768px)': '0 1rem',
    // },
    borderRadius: {
      '@media (max-width: 480px)': '12px',
      '@media (max-width: 768px)': '15px',
    },
  },

  successMessage: {
    borderColor: 'rgba(76, 175, 80, 0.3)',
    borderStyle: 'solid',
    borderWidth: '1px',
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    color: '#2e7d32',
  },
});
