import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  header: {
    background: "linear-gradient(135deg, #ff6b6b, #4ecdc4)",
    color: "white",
    padding: "1rem 0",
    position: "fixed",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 100,
    boxSizing: "border-box",
    boxShadow: "0 2px 20px rgba(255, 107, 107, 0.3)",
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    width: "100%",
    boxSizing: "border-box",
  },

  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },

  languageSelector: {
    display: "flex",
    gap: "0.5rem",
  },

  languageButton: {
    background: "none",
    border: "1px solid white",
    color: "white",
    padding: "0.2rem 0.5rem",
    cursor: "pointer",
    borderRadius: "3px",
    transition: "background-color 0.3s",
    ":hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  },

  menuList: {
    listStyle: "none",
    display: "flex",
    gap: "1rem",
    margin: 0,
    padding: 0,
  },

  menuLink: {
    color: "white",
    textDecoration: "none",
    padding: "0.5rem",
    borderRadius: "3px",
    transition: "background-color 0.3s",
    ":hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  },

  // Mobile responsive styles
  navMobile: {
    "@media (max-width: 768px)": {
      flexDirection: "column",
      gap: "1rem",
    },
  },

  menuListMobile: {
    "@media (max-width: 768px)": {
      flexDirection: "column",
      gap: "0.5rem",
    },
  },
});
