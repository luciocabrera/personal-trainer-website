import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  // Hamburger Menu Button
  hamburger: {
    background: "transparent",
    borderStyle: "none",
    cursor: "pointer",
    display: {
      default: "none",
      "@media (max-width: 768px)": "flex",
    },
    flexDirection: "column",
    height: "24px",
    justifyContent: "space-around",
    padding: 0,
    width: "24px",
    zIndex: 1001,
  },

  hamburgerLine: {
    background: "white",
    borderRadius: "2px",
    height: "2px",
    transformOrigin: "center",
    transition: "all 0.3s ease",
    width: "24px",
  },

  hamburgerLineActive1: {
    transform: "rotate(45deg) translate(5px, 5px)",
  },

  hamburgerLineActive2: {
    opacity: 0,
  },

  hamburgerLineActive3: {
    transform: "rotate(-45deg) translate(7px, -6px)",
  },

  header: {
    alignItems: "center",
    backdropFilter: "blur(5px)",
    background: `
      linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 50%, rgba(255, 107, 107, 0.95) 100%),
      url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3Ccircle cx='10' cy='10' r='1.5'/%3E%3Ccircle cx='50' cy='50' r='1.5'/%3E%3Ccircle cx='10' cy='50' r='1'/%3E%3Ccircle cx='50' cy='10' r='1'/%3E%3Cpath d='M15 15h8v8h-8z' fill-opacity='0.04'/%3E%3Cpath d='M37 37h8v8h-8z' fill-opacity='0.04'/%3E%3Cpath d='M20 5h3v10h-3z' fill-opacity='0.03'/%3E%3Cpath d='M37 45h3v10h-3z' fill-opacity='0.03'/%3E%3Cpolygon points='30,8 34,16 26,16' fill-opacity='0.05'/%3E%3Cpolygon points='30,52 34,44 26,44' fill-opacity='0.05'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
    `,
    // Single consistent header height
    backgroundRepeat: "no-repeat, repeat",
    backgroundSize: "cover, 60px 60px",
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    boxShadow:
      "0 4px 25px rgba(102, 126, 234, 0.4), 0 2px 10px rgba(255, 107, 107, 0.2)",
    boxSizing: "border-box",
    color: "white",
    display: "flex",
    justifyContent: "center",
    left: 0,
    minHeight: {
      default: "80px",
      // Much smaller mobile header
      "@media (max-width: 768px)": "60px",
    },
    padding: {
      default: "1rem 2rem",
      "@media (max-width: 768px)": "1rem",
    },
    position: "fixed",
    right: 0,
    top: 0,
    width: "100%",
    zIndex: 1000,
  },

  languageButton: {
    backgroundColor: {
      default: "rgba(255, 255, 255, 0.1)",
      ":hover": "rgba(255, 255, 255, 0.2)",
    },
    borderColor: {
      default: "rgba(255, 255, 255, 0.3)",
      ":hover": "rgba(255, 255, 255, 0.5)",
    },
    borderRadius: "6px",
    borderStyle: "solid",
    borderWidth: "1px",
    color: "white",
    cursor: "pointer",
    flexShrink: 0,
    fontSize: "0.875rem",
    fontWeight: 500,
    minWidth: "3rem",
    padding: "0.4rem 0.8rem",
    textAlign: "center",
    textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
    transform: {
      default: null,
      ":hover": "translateY(-1px)",
    },
    transition: "all 0.3s ease",
  },

  languageButtonActive: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.3) inset",
    fontWeight: 600,
  },

  // Desktop Language Selector
  languageSelector: {
    alignItems: "center",
    display: {
      default: "flex",
      // Hide desktop language selector on mobile
      "@media (max-width: 768px)": "none",
    },
    flexShrink: 0,
    gap: "0.5rem",
  },

  logo: {
    flexShrink: 0,
    fontSize: {
      default: "1.5rem",
      "@media (max-width: 768px)": "1.25rem",
    },
    fontWeight: "bold",
    letterSpacing: "0.5px",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  },

  menuLink: {
    background: "none",
    backgroundColor: {
      default: "transparent",
      ":hover": "rgba(255, 255, 255, 0.15)",
    },
    borderColor: "transparent",
    borderRadius: "8px",
    borderStyle: "none",
    borderWidth: 0,
    boxShadow: {
      default: "none",
      ":hover": "0 2px 8px rgba(0, 0, 0, 0.15)",
    },
    color: "white",
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: "inherit",
    fontWeight: 500,
    padding: "0.75rem 1rem",
    textDecoration: "none",
    textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
    transform: {
      default: null,
      ":hover": "translateY(-1px)",
    },
    transition: "all 0.3s ease",
    whiteSpace: "nowrap",
  },

  // Desktop Navigation
  menuList: {
    alignItems: "center",
    display: {
      default: "flex",
      "@media (max-width: 768px)": "none", // Hide desktop menu on mobile
    },
    gap: "1rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },

  mobileLanguageButton: {
    background: "none",
    backgroundColor: {
      default: "transparent",
      ":hover": "rgba(255, 255, 255, 0.1)",
    },
    borderColor: {
      default: "rgba(255, 255, 255, 0.3)",
      ":hover": "rgba(255, 255, 255, 0.5)",
    },
    borderRadius: "6px",
    borderStyle: "solid",
    borderWidth: "1px",
    color: "white",
    cursor: "pointer",
    fontSize: "0.875rem",
    fontWeight: 500,
    minWidth: "3rem",
    padding: "0.5rem 1rem",
    textAlign: "center",
    transition: "all 0.3s ease",
  },

  mobileLanguageButtonActive: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderColor: "rgba(255, 255, 255, 0.6)",
    fontWeight: 600,
  },

  // Mobile Language Selector
  mobileLanguageSelector: {
    borderBottomColor: "rgba(255, 255, 255, 0.2)",
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    display: "flex",
    gap: "0.5rem",
    justifyContent: "center",
    marginBottom: "1.5rem",
    paddingBottom: "1rem",
  },

  mobileMenu: {
    backdropFilter: "blur(10px)",
    background: `
      linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 50%, rgba(255, 107, 107, 0.95) 100%),
      url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3Ccircle cx='10' cy='10' r='1.5'/%3E%3Ccircle cx='50' cy='50' r='1.5'/%3E%3Ccircle cx='10' cy='50' r='1'/%3E%3Ccircle cx='50' cy='10' r='1'/%3E%3Cpath d='M15 15h8v8h-8z' fill-opacity='0.04'/%3E%3Cpath d='M37 37h8v8h-8z' fill-opacity='0.04'/%3E%3Cpath d='M20 5h3v10h-3z' fill-opacity='0.03'/%3E%3Cpath d='M37 45h3v10h-3z' fill-opacity='0.03'/%3E%3Cpolygon points='30,8 34,16 26,16' fill-opacity='0.05'/%3E%3Cpolygon points='30,52 34,44 26,44' fill-opacity='0.05'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
    `,
    backgroundRepeat: "no-repeat, repeat",
    backgroundSize: "cover, 60px 60px",
    borderTopColor: "rgba(255, 255, 255, 0.1)",
    borderTopStyle: "solid",
    borderTopWidth: "1px",
    boxShadow:
      "0 8px 30px rgba(102, 126, 234, 0.3), 0 4px 15px rgba(0, 0, 0, 0.2)",
    boxSizing: "border-box",
    color: "white",
    // Start below header
    left: 0,
    padding: "1.5rem",
    position: "absolute",
    right: 0,
    top: "60px",
    width: "100%",
  },

  mobileMenuLink: {
    background: "none",
    backgroundColor: {
      default: "transparent",
      ":active": "rgba(255, 255, 255, 0.25)",
      ":hover": "rgba(255, 255, 255, 0.15)",
    },
    borderColor: "transparent",
    borderRadius: "8px",
    borderStyle: "none",
    borderWidth: 0,
    color: "white",
    cursor: "pointer",
    display: "block",
    fontFamily: "inherit",
    fontSize: "1.1rem",
    fontWeight: 500,
    padding: "1rem",
    textAlign: "center",
    textDecoration: "none",
    transition: "background-color 0.3s ease",
    width: "100%",
  },

  // Mobile Menu List
  mobileMenuList: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },

  // Mobile Menu Overlay
  mobileMenuOverlay: {
    background: "rgba(0, 0, 0, 0.5)",
    bottom: 0,
    display: {
      default: "none",
      "@media (max-width: 768px)": "block",
    },
    left: 0,
    position: "fixed",
    right: 0,
    top: 0,
    zIndex: 999,
  },

  nav: {
    alignItems: "center",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    margin: "0 auto",
    maxWidth: "1200px",
    padding: "0 1rem",
    position: "relative",
    width: "100%",
  },
});
