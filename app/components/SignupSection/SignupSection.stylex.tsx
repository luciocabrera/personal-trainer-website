import * as stylex from "@stylexjs/stylex";

const floatAnimation = stylex.keyframes({
  "0%": { transform: "translateY(0px)" },
  "100%": { transform: "translateY(0px)" },
  "50%": { transform: "translateY(-5px)" },
});

export const styles = stylex.create({
  signup: {
    padding: 0,
    margin: 0,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    gap: 0,
    background: "rgba(255, 255, 255, 0.95)",
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 32px rgba(78, 205, 196, 0.2)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },

  signupTitle: {
    textAlign: "center",
    // margin: "-2rem -2rem 2rem -2rem",
    padding: "2rem",
    background: `
      linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 50%, rgba(255, 107, 107, 0.9) 100%),
      url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.06'%3E%3Cpath d='M50 15L60 35H40L50 15ZM85 50L75 30H95L85 50ZM15 50L25 70H5L15 50ZM50 85L40 65H60L50 85Z'/%3E%3Ccircle cx='50' cy='50' r='8'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
    `,
    backgroundSize: "cover, 100px 100px",
    backgroundRepeat: "no-repeat, repeat",
    color: "white",
    borderRadius: "20px 20px 0 0",
    fontSize: "2.2rem",
    fontWeight: "bold",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
    position: "relative",
    margin: 0,
  },

  signupImage: {
    textAlign: "center",
  },

  signupIconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(78, 205, 196, 0.1))",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 107, 107, 0.2)",
    margin: "0 auto",
    width: "100%",
    maxWidth: "100%",
    height: "250px",
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

  messageBox: {
    padding: "1rem",
    borderRadius: "8px",
    marginBottom: "1rem",
    fontWeight: "bold",
    textAlign: "center",
  },

  successMessage: {
    backgroundColor: "rgba(76, 175, 80, 0.1)",
    color: "#2e7d32",
    border: "1px solid rgba(76, 175, 80, 0.3)",
  },

  errorMessage: {
    backgroundColor: "rgba(244, 67, 54, 0.1)",
    color: "#c62828",
    border: "1px solid rgba(244, 67, 54, 0.3)",
  },

  // Mobile responsive styles
  signupMobile: {
    "@media (max-width: 768px)": {
      margin: "0 1rem",
      borderRadius: "15px",
    },
    "@media (max-width: 480px)": {
      margin: "0 0.5rem",
      borderRadius: "12px",
    },
  },

  signupFormMobile: {
    "@media (max-width: 768px)": {
      padding: "0 1rem",
      marginTop: "1.5rem",
    },
    "@media (max-width: 480px)": {
      padding: "0 0.5rem",
      marginTop: "1rem",
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
