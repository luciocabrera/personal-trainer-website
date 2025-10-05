import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  header: {
    background: "linear-gradient(135deg, #ff6b6b, #4ecdc4)",
    color: "white",
    padding: "1rem 2rem",
    position: "fixed",
    width: "100%",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    boxSizing: "border-box",
    boxShadow: "0 2px 20px rgba(255, 107, 107, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "80px", // Single consistent header height
    "@media (max-width: 768px)": {
      padding: "1rem",
      minHeight: "60px", // Much smaller mobile header
    },
  },

  nav: {
    display: "flex",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    width: "100%",
    boxSizing: "border-box",
    position: "relative",
    justifyContent: "space-between",
  },

  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    flexShrink: 0,
    "@media (max-width: 768px)": {
      fontSize: "1.25rem",
    },
  },

  // Desktop Navigation
  menuList: {
    listStyle: "none",
    display: "flex",
    gap: "1rem",
    margin: 0,
    padding: 0,
    alignItems: "center",
    "@media (max-width: 768px)": {
      display: "none", // Hide desktop menu on mobile
    },
  },

  menuLink: {
    color: "white",
    textDecoration: "none",
    padding: "0.5rem",
    borderRadius: "3px",
    transition: "background-color 0.3s",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "inherit",
    fontFamily: "inherit",
    whiteSpace: "nowrap",
    ":hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  },

  // Desktop Language Selector
  languageSelector: {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
    flexShrink: 0,
    "@media (max-width: 768px)": {
      display: "none", // Hide desktop language selector on mobile
    },
  },

  languageButton: {
    background: "none",
    border: "1px solid white",
    color: "white",
    padding: "0.2rem 0.5rem",
    cursor: "pointer",
    borderRadius: "3px",
    transition: "background-color 0.3s, opacity 0.3s",
    fontSize: "0.875rem",
    fontWeight: "500",
    minWidth: "2.5rem",
    textAlign: "center",
    flexShrink: 0,
    ":hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  },

  languageButtonActive: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    fontWeight: "600",
    boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.3) inset",
  },

  // Hamburger Menu Button
  hamburger: {
    display: "none",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "24px",
    height: "24px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: 0,
    zIndex: 1001,
    "@media (max-width: 768px)": {
      display: "flex",
    },
  },

  hamburgerLine: {
    width: "24px",
    height: "2px",
    background: "white",
    borderRadius: "2px",
    transition: "all 0.3s ease",
    transformOrigin: "center",
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

  // Mobile Menu Overlay
  mobileMenuOverlay: {
    display: "none",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
    "@media (max-width: 768px)": {
      display: "block",
    },
  },

  mobileMenu: {
    position: "absolute",
    top: "60px", // Start below header
    left: 0,
    right: 0,
    width: "100%",
    background: "linear-gradient(135deg, #ff6b6b, #4ecdc4)",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
    padding: "1.5rem",
    color: "white",
    boxSizing: "border-box",
  },

  // Mobile Language Selector
  mobileLanguageSelector: {
    display: "flex",
    gap: "0.5rem",
    justifyContent: "center",
    marginBottom: "1.5rem",
    paddingBottom: "1rem",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
  },

  mobileLanguageButton: {
    background: "none",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    color: "white",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    borderRadius: "6px",
    transition: "all 0.3s ease",
    fontSize: "0.875rem",
    fontWeight: "500",
    minWidth: "3rem",
    textAlign: "center",
    ":hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderColor: "rgba(255, 255, 255, 0.5)",
    },
  },

  mobileLanguageButtonActive: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderColor: "rgba(255, 255, 255, 0.6)",
    fontWeight: "600",
  },

  // Mobile Menu List
  mobileMenuList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },

  mobileMenuLink: {
    color: "white",
    textDecoration: "none",
    padding: "1rem",
    borderRadius: "8px",
    transition: "background-color 0.3s ease",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "1.1rem",
    fontFamily: "inherit",
    width: "100%",
    textAlign: "center",
    display: "block",
    fontWeight: "500",
    ":hover": {
      backgroundColor: "rgba(255, 255, 255, 0.15)",
    },
    ":active": {
      backgroundColor: "rgba(255, 255, 255, 0.25)",
    },
  },
});
