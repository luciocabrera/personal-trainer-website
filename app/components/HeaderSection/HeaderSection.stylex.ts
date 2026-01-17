import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  // Hamburger Menu Button
  hamburger: {
    padding: 0,
    borderStyle: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    display: {
      default: 'none',
      '@media (max-width: 768px)': 'flex',
    },
    flexDirection: 'column',
    justifyContent: 'space-around',
    zIndex: 1001,
    height: '24px',
    width: '24px',
  },

  hamburgerLine: {
    borderRadius: '2px',
    transition: 'all 0.3s ease',
    backgroundColor: 'white',
    transformOrigin: 'center',
    height: '2px',
    width: '24px',
  },

  hamburgerLineActive1: {
    transform: 'rotate(45deg) translate(5px, 5px)',
  },

  hamburgerLineActive2: {
    opacity: 0,
  },

  hamburgerLineActive3: {
    transform: 'rotate(-45deg) translate(7px, -6px)',
  },

  header: {
    padding: {
      default: '1rem 2rem',
      '@media (max-width: 768px)': '1rem',
    },
    alignItems: 'center',
    backdropFilter: 'blur(5px)',
    backgroundImage: `
      linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 50%, rgba(255, 107, 107, 0.95) 100%),
      url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3Ccircle cx='10' cy='10' r='1.5'/%3E%3Ccircle cx='50' cy='50' r='1.5'/%3E%3Ccircle cx='10' cy='50' r='1'/%3E%3Ccircle cx='50' cy='10' r='1'/%3E%3Cpath d='M15 15h8v8h-8z' fill-opacity='0.04'/%3E%3Cpath d='M37 37h8v8h-8z' fill-opacity='0.04'/%3E%3Cpath d='M20 5h3v10h-3z' fill-opacity='0.03'/%3E%3Cpath d='M37 45h3v10h-3z' fill-opacity='0.03'/%3E%3Cpolygon points='30,8 34,16 26,16' fill-opacity='0.05'/%3E%3Cpolygon points='30,52 34,44 26,44' fill-opacity='0.05'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
    `,
    // Single consistent header height
    backgroundRepeat: 'no-repeat, repeat',
    backgroundSize: 'cover, 60px 60px',
    boxShadow:
      '0 4px 25px rgba(102, 126, 234, 0.4), 0 2px 10px rgba(255, 107, 107, 0.2)',
    boxSizing: 'border-box',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    zIndex: 1000,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    left: 0,
    minHeight: {
      default: '80px',
      // Much smaller mobile header
      '@media (max-width: 768px)': '60px',
    },
    right: 0,
    top: 0,
    width: '100%',
  },

  languageButton: {
    padding: '0.4rem 0.8rem',
    borderColor: {
      default: 'rgba(255, 255, 255, 0.3)',
      ':hover': 'rgba(255, 255, 255, 0.5)',
    },
    borderRadius: '6px',
    borderStyle: 'solid',
    borderWidth: '1px',
    transition: 'all 0.3s ease',
    backgroundColor: {
      default: 'rgba(255, 255, 255, 0.1)',
      ':hover': 'rgba(255, 255, 255, 0.2)',
    },
    color: 'white',
    cursor: 'pointer',
    flexShrink: 0,
    fontSize: '0.875rem',
    fontWeight: 500,
    textAlign: 'center',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
    transform: {
      default: null,
      ':hover': 'translateY(-1px)',
    },
    minWidth: '3rem',
  },

  languageButtonActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.3) inset',
    fontWeight: 600,
  },

  // Desktop Language Selector
  languageSelector: {
    gap: '0.5rem',
    alignItems: 'center',
    display: {
      default: 'flex',
      // Hide desktop language selector on mobile
      '@media (max-width: 768px)': 'none',
    },
    flexShrink: 0,
  },

  languageSelect: {
    padding: '0.6rem 2rem 0.6rem 1rem',
    backgroundPosition: 'calc(100% - 15px) center, calc(100% - 10px) center',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '8px',
    borderStyle: 'solid',
    borderWidth: '1px',
    transition: 'all 0.3s ease',
    appearance: 'none',
    backgroundColor: {
      default: 'rgba(255, 255, 255, 0.15)',
      ':hover': 'rgba(255, 255, 255, 0.25)',
    },
    backgroundImage:
      'linear-gradient(45deg, transparent 50%, white 50%), linear-gradient(135deg, white 50%, transparent 50%)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '5px 5px, 5px 5px',
    color: 'white',
    cursor: 'pointer',
    display: {
      default: 'block',
      '@media (max-width: 768px)': 'none',
    },
    flexShrink: 0,
    fontSize: '0.875rem',
    fontWeight: 500,
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
    transform: {
      default: null,
      ':hover': 'translateY(-1px)',
    },
  },

  // Style for select options (dropdown items)
  // Note: browsers have limited option styling - we use dark text since browser forces white background
  languageOption: {
    backgroundColor: '#667eea',
    color: '#333333',
  },

  mobileLanguageSelect: {
    padding: '1rem 2.5rem 1rem 1rem',
    backgroundPosition: 'calc(100% - 20px) center, calc(100% - 14px) center',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '8px',
    borderStyle: 'solid',
    borderWidth: '1px',
    transition: 'all 0.3s ease',
    appearance: 'none',
    backgroundColor: {
      default: 'transparent',
      ':hover': 'rgba(255, 255, 255, 0.1)',
    },
    backgroundImage:
      'linear-gradient(45deg, transparent 50%, white 50%), linear-gradient(135deg, white 50%, transparent 50%)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '6px 6px, 6px 6px',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 500,
    textAlign: 'center',
    marginTop: '1.5rem',
    width: '100%',
  },

  logo: {
    flexShrink: 0,
    fontSize: {
      default: '1.5rem',
      '@media (max-width: 768px)': '1.25rem',
    },
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
  },

  menuLink: {
    margin: 0,
    padding: '0.75rem 1rem',
    borderColor: 'transparent',
    borderRadius: '8px',
    borderStyle: 'none',
    borderWidth: 0,
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    backgroundColor: {
      default: 'transparent',
      ':hover': 'rgba(255, 255, 255, 0.15)',
    },
    boxShadow: {
      default: 'none',
      ':hover': '0 2px 8px rgba(0, 0, 0, 0.15)',
    },
    boxSizing: 'border-box',
    color: 'white',
    cursor: 'pointer',
    display: 'inline-flex',
    fontFamily: 'inherit',
    fontSize: '1rem',
    fontWeight: 500,
    justifyContent: 'center',
    lineHeight: 1.2,
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
    transform: {
      default: null,
      ':hover': 'translateY(-1px)',
    },
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    height: '40px',
  },

  ctaButton: {
    padding: '0.75rem 1.5rem',
    borderColor: 'transparent',
    borderRadius: '25px',
    borderStyle: 'none',
    borderWidth: 0,
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    backgroundColor: 'transparent',
    backgroundImage: 'linear-gradient(135deg, #4ecdc4 0%, #44a3a0 100%)',
    boxShadow: {
      default: '0 4px 15px rgba(78, 205, 196, 0.3)',
      ':hover': '0 6px 20px rgba(78, 205, 196, 0.5)',
    },
    color: 'white',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 600,
    textShadow: 'none',
    transform: {
      default: null,
      ':hover': 'translateY(-2px)',
    },
    whiteSpace: 'nowrap',
  },

  // Desktop Navigation
  menuList: {
    margin: 0,
    padding: 0,
    gap: '1rem',
    listStyle: 'none',
    alignItems: 'center',
    display: {
      default: 'flex',
      '@media (max-width: 768px)': 'none', // Hide desktop menu on mobile
    },
  },

  // Style for menu list items to ensure consistent alignment
  menuItem: {
    alignItems: 'center',
    display: 'flex',
  },

  mobileLanguageButton: {
    padding: '0.5rem 1rem',
    borderColor: {
      default: 'rgba(255, 255, 255, 0.3)',
      ':hover': 'rgba(255, 255, 255, 0.5)',
    },
    borderRadius: '6px',
    borderStyle: 'solid',
    borderWidth: '1px',
    transition: 'all 0.3s ease',
    backgroundColor: {
      default: 'transparent',
      ':hover': 'rgba(255, 255, 255, 0.1)',
    },
    color: 'white',
    cursor: 'pointer',
    fontSize: '0.875rem',
    fontWeight: 500,
    textAlign: 'center',
    minWidth: '3rem',
  },

  mobileLanguageButtonActive: {
    borderColor: 'rgba(255, 255, 255, 0.6)',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    fontWeight: 600,
  },

  // Mobile Language Selector
  mobileLanguageSelector: {
    gap: '0.5rem',
    display: 'flex',
    justifyContent: 'center',
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    marginBottom: '1.5rem',
    paddingBottom: '1rem',
  },

  mobileMenu: {
    padding: '1.5rem',
    backdropFilter: 'blur(10px)',
    backgroundImage: `
      linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 50%, rgba(255, 107, 107, 0.95) 100%),
      url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3Ccircle cx='10' cy='10' r='1.5'/%3E%3Ccircle cx='50' cy='50' r='1.5'/%3E%3Ccircle cx='10' cy='50' r='1'/%3E%3Ccircle cx='50' cy='10' r='1'/%3E%3Cpath d='M15 15h8v8h-8z' fill-opacity='0.04'/%3E%3Cpath d='M37 37h8v8h-8z' fill-opacity='0.04'/%3E%3Cpath d='M20 5h3v10h-3z' fill-opacity='0.03'/%3E%3Cpath d='M37 45h3v10h-3z' fill-opacity='0.03'/%3E%3Cpolygon points='30,8 34,16 26,16' fill-opacity='0.05'/%3E%3Cpolygon points='30,52 34,44 26,44' fill-opacity='0.05'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
    `,
    backgroundRepeat: 'no-repeat, repeat',
    backgroundSize: 'cover, 60px 60px',
    boxShadow:
      '0 8px 30px rgba(102, 126, 234, 0.3), 0 4px 15px rgba(0, 0, 0, 0.2)',
    boxSizing: 'border-box',
    color: 'white',
    position: 'absolute',
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    borderTopStyle: 'solid',
    borderTopWidth: '1px',
    // Start below header
    left: 0,
    right: 0,
    top: '60px',
    width: '100%',
  },

  mobileMenuLink: {
    margin: 0,
    padding: '1rem',
    borderColor: 'transparent',
    borderRadius: '8px',
    borderStyle: 'none',
    borderWidth: 0,
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    alignItems: 'center',
    backgroundColor: {
      default: 'transparent',
      ':hover': 'rgba(255, 255, 255, 0.15)',
      ':active': 'rgba(255, 255, 255, 0.25)',
    },
    boxSizing: 'border-box',
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    fontFamily: 'inherit',
    fontSize: '1.1rem',
    fontWeight: 500,
    justifyContent: 'center',
    lineHeight: 1.2,
    textAlign: 'center',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
    height: '52px',
    width: '100%',
  },

  // Mobile Menu List
  mobileMenuList: {
    margin: 0,
    padding: 0,
    gap: '0.5rem',
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
  },

  // Mobile Menu Overlay
  mobileMenuOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: {
      default: 'none',
      '@media (max-width: 768px)': 'block',
    },
    position: 'fixed',
    zIndex: 999,
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  },

  nav: {
    margin: '0 auto',
    padding: '0 1rem',
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    maxWidth: '1200px',
    width: '100%',
  },
});
