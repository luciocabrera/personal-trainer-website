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
    flexDirection: {
      default: null,
      "@media (max-width: 768px)": "column",
    },
    flexWrap: "wrap",
    gap: {
      default: "1rem",
      "@media (max-width: 768px)": "0.25rem",
    },
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
    alignItems: {
      default: null,
      "@media (max-width: 768px)": "center",
    },
    flexDirection: {
      default: null,
      "@media (max-width: 768px)": "column",
    },
    gap: {
      default: null,
      "@media (max-width: 768px)": "0.5rem",
    },
  },
  footerContent: {
    margin: "0 auto",
    maxWidth: "1200px",
  },

  footerLink: {
    alignItems: "center",
    background: {
      default: "rgba(255, 255, 255, 0.1)",
      ":hover": "rgba(255, 255, 255, 0.2)",
    },
    borderRadius: "20px",
    color: "white",
    display: "flex",
    fontSize: "0.9rem",
    gap: "0.5rem",
    padding: "0.5rem 1rem",
    textDecoration: "none",
    transform: {
      default: null,
      ":hover": "translateY(-2px)",
    },
    transition: "all 0.3s ease",
    willChange: {
      default: null,
      ":hover": "transform",
    },
  },

  footerLinkIcon: {
    height: "16px",
    width: "16px",
  },

  footerLinkMobile: {
    fontSize: {
      default: null,
      "@media (max-width: 768px)": "0.8rem",
    },
    padding: {
      default: null,
      "@media (max-width: 768px)": "0.4rem 0.8rem",
    },
  },

  version: {
    fontFamily: "monospace",
    fontSize: {
      default: "0.7rem",
      "@media (max-width: 768px)": "0.65rem",
    },
    margin: 0,
    opacity: 0.6,
  },
});
