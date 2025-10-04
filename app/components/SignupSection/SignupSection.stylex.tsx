import * as stylex from "@stylexjs/stylex";

const floatAnimation = stylex.keyframes({
  "0%": { transform: "translateY(0px)" },
  "100%": { transform: "translateY(0px)" },
  "50%": { transform: "translateY(-5px)" },
});

export const styles = stylex.create({
  signup: {
    marginBottom: "2rem",
    padding: "2rem",
    background: "rgba(255, 255, 255, 0.95)",
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 32px rgba(78, 205, 196, 0.2)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },

  signupTitle: {
    textAlign: "center",
    marginBottom: "1rem",
    background: "linear-gradient(135deg, #ff6b6b, #4ecdc4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    fontSize: "2.2rem",
    fontWeight: "bold",
  },

  signupImage: {
    textAlign: "center",
    marginBottom: "2rem",
  },

  signupIconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
    background:
      "linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(78, 205, 196, 0.1))",
    borderRadius: "15px",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 107, 107, 0.2)",
    margin: "0 auto",
    maxWidth: "600px",
  },

  signupIconSvg: {
    animationName: floatAnimation,
    animationDuration: "4s",
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "infinite",
    maxWidth: "100%",
    height: "auto",
    willChange: "transform",
  },

  signupForm: {
    textAlign: "center",
    marginTop: "2rem",
  },

  signupFormElement: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    maxWidth: "400px",
    margin: "0 auto",
  },

  formInput: {
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "3px",
    width: "100%",
    boxSizing: "border-box",
  },

  formTextarea: {
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "3px",
    width: "100%",
    boxSizing: "border-box",
  },

  formButton: {
    padding: "0.8rem 1.5rem",
    background: "linear-gradient(135deg, #ff6b6b, #4ecdc4)",
    color: "white",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1px",
    boxShadow: "0 4px 15px rgba(255, 107, 107, 0.4)",
    ":hover": {
      background: "linear-gradient(135deg, #ff5252, #26a69a)",
      transform: "translateY(-2px)",
      boxShadow: "0 8px 25px rgba(255, 107, 107, 0.6)",
    },
  },

  contactSection: {
    marginTop: "2rem",
    padding: "1.5rem",
    background:
      "linear-gradient(135deg, rgba(255, 107, 107, 0.05), rgba(78, 205, 196, 0.05))",
    borderRadius: "15px",
    border: "1px solid rgba(255, 107, 107, 0.1)",
  },

  contactTitle: {
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#333",
    fontSize: "1.1rem",
  },

  contactLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    marginBottom: "1rem",
  },

  contactLink: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.8rem 1.2rem",
    textDecoration: "none",
    borderRadius: "25px",
    transition: "all 0.3s ease",
    fontWeight: 500,
  },

  emailLink: {
    background: "linear-gradient(135deg, #ff6b6b, #ff9500)",
    color: "white",
    boxShadow: "0 4px 15px rgba(255, 107, 107, 0.3)",
    ":hover": {
      background: "linear-gradient(135deg, #ff5252, #ff8500)",
      transform: "translateY(-2px)",
      boxShadow: "0 6px 20px rgba(255, 107, 107, 0.5)",
    },
  },

  instagramLink: {
    background: "linear-gradient(135deg, #e91e63, #9c27b0)",
    color: "white",
    boxShadow: "0 4px 15px rgba(233, 30, 99, 0.3)",
    ":hover": {
      background: "linear-gradient(135deg, #d81b60, #8e24aa)",
      transform: "translateY(-2px)",
      boxShadow: "0 6px 20px rgba(233, 30, 99, 0.5)",
    },
  },

  contactLinkIcon: {
    width: "20px",
    height: "20px",
  },

  followText: {
    marginTop: "1rem",
    fontStyle: "italic",
    color: "#666",
  },

  // Mobile responsive styles
  signupMobile: {
    "@media (max-width: 768px)": {
      padding: "1rem",
    },
  },

  signupIconContainerMobile: {
    "@media (max-width: 768px)": {
      width: "100%",
      maxWidth: "100%",
      height: "250px",
      margin: 0,
    },
  },

  signupIconSvgMobile: {
    "@media (max-width: 768px)": {
      width: "90%",
      maxWidth: "300px",
      height: "auto",
    },
  },

  contactLinksMobile: {
    "@media (max-width: 768px)": {
      flexDirection: "column",
      gap: "1rem",
      alignItems: "center",
    },
  },

  contactLinkMobile: {
    "@media (max-width: 768px)": {
      width: "100%",
      maxWidth: "250px",
      justifyContent: "center",
    },
  },
});
