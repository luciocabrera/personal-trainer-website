import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  footer: {
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "white",
    textAlign: "center",
    padding: "1.5rem",
    boxShadow: "0 -4px 20px rgba(102, 126, 234, 0.3)",
  },

  footerContent: {
    maxWidth: "1200px",
    margin: "0 auto",
  },

  footerContacts: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    marginBottom: "1rem",
    flexWrap: "wrap",
  },

  footerLink: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    color: "white",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    borderRadius: "20px",
    background: "rgba(255, 255, 255, 0.1)",
    transition: "all 0.3s ease",
    fontSize: "0.9rem",
    ":hover": {
      background: "rgba(255, 255, 255, 0.2)",
      transform: "translateY(-2px)",
      willChange: "transform",
    },
  },

  footerLinkIcon: {
    width: "16px",
    height: "16px",
  },

  // Mobile responsive styles
  footerContactsMobile: {
    "@media (max-width: 768px)": {
      flexDirection: "column",
      gap: "0.5rem",
      alignItems: "center",
    },
  },

  footerLinkMobile: {
    "@media (max-width: 768px)": {
      fontSize: "0.8rem",
      padding: "0.4rem 0.8rem",
    },
  },
});
