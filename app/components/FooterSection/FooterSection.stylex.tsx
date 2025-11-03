import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  footer: {
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    boxShadow: "0 -4px 20px rgba(102, 126, 234, 0.3)",
    color: "white",
    padding: "1.5rem",
    textAlign: "center",
  },

  footerBottom: {
    alignItems: "center",
    display: "flex",
    "@media (max-width: 768px)": {
      flexDirection: "column",
      gap: "0.25rem",
    },
    flexWrap: "wrap",
    gap: "1rem",

    justifyContent: "center",
  },

  
footerContacts: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    justifyContent: "center",
    marginBottom: "1rem",
  },

  
// Mobile responsive styles
footerContactsMobile: {
    "@media (max-width: 768px)": {
      alignItems: "center",
      flexDirection: "column",
      gap: "0.5rem",
    },
  },

  
footerContent: {
    margin: "0 auto",
    maxWidth: "1200px",
  },

  
  footerLink: {
    alignItems: "center",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "20px",
    ":hover": {
      background: "rgba(255, 255, 255, 0.2)",
      transform: "translateY(-2px)",
      willChange: "transform",
    },
    color: "white",
    display: "flex",
    fontSize: "0.9rem",
    gap: "0.5rem",
    padding: "0.5rem 1rem",
    textDecoration: "none",
    transition: "all 0.3s ease",
  },

  footerLinkIcon: {
    height: "16px",
    width: "16px",
  },

  footerLinkMobile: {
    "@media (max-width: 768px)": {
      fontSize: "0.8rem",
      padding: "0.4rem 0.8rem",
    },
  },

  version: {
    "@media (max-width: 768px)": {
      fontSize: "0.65rem",
    },
    fontFamily: "monospace",
    fontSize: "0.7rem",
    margin: 0,

    opacity: 0.6,
  },
});
