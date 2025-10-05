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
    minHeight: "80px", // Minimum header height for desktop
    "@media (max-width: 768px)": {
      flexDirection: "column",
      gap: "1rem",
      paddingBottom: "1rem",
      minHeight: "140px", // Fixed minimum height for mobile to prevent overlap
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
  },

  navMobile: {
    "@media (max-width: 768px)": {
      flexDirection: "column",
      gap: "1rem",
      alignItems: "center",
      padding: "1rem",
    },
  },

  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    flexShrink: 0,
  },

  languageSelector: {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0, // Prevent shrinking
    position: "absolute",
    right: "1rem",
    top: "50%",
    transform: "translateY(-50%)",
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
    minWidth: "2.5rem", // Fixed minimum width to prevent shifting
    textAlign: "center",
    flexShrink: 0, // Prevent shrinking
    ":hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  },

  languageButtonActive: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    fontWeight: "600",
    boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.3) inset",
  },

  menuList: {
    listStyle: "none",
    display: "flex",
    gap: "1rem",
    margin: "0 auto",
    padding: 0,
    flex: 1,
    justifyContent: "center",
    paddingRight: "120px", // Space for language selector
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
    ":hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  },

  languageSelectorMobile: {
    "@media (max-width: 768px)": {
      position: "static",
      transform: "none",
      right: "auto",
      top: "auto",
      order: -1, // Move to top on mobile
    },
  },

  menuListMobile: {
    "@media (max-width: 768px)": {
      flexDirection: "column",
      gap: "0.5rem",
      paddingRight: 0,
      textAlign: "center",
    },
  },
});
