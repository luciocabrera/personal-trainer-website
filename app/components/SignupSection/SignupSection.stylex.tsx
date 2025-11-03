import * as stylex from "@stylexjs/stylex";

const floatAnimation = stylex.keyframes({
  "0%": { transform: "translateY(0px)" },
  "100%": { transform: "translateY(0px)" },
  "50%": { transform: "translateY(-5px)" },
});

export const styles = stylex.create({
  formButton: {
    background: "linear-gradient(135deg, #ff6b6b, #4ecdc4)",
    padding: "0.8rem 1.5rem",
    border: "none",
    color: "white",
    borderRadius: "25px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.3s ease",
    letterSpacing: "1px",
    textTransform: "uppercase",
    ":hover": {
      background: "linear-gradient(135deg, #ff5252, #26a69a)",
      transform: "translateY(-2px)",
      boxShadow: "0 8px 25px rgba(255, 107, 107, 0.6)",
    },
    boxShadow: "0 4px 15px rgba(255, 107, 107, 0.4)",
  },

  formInput: {
    border: "1px solid #ccc",
    borderRadius: "3px",
    padding: "0.5rem",
    boxSizing: "border-box",
    // Prevent mobile zoom on iOS
fontFamily: "inherit",
    
width: "100%", 
    // Mobile-specific improvements
"@media (max-width: 768px)": {
      fontSize: "16px", // Critical: prevents zoom on iOS Safari
      padding: "0.75rem",
      borderRadius: "8px",
      border: "2px solid #ddd",
      transition: "border-color 0.3s ease",
    },
    
fontSize: "16px",

    
    ":focus": {
      borderColor: "#4ecdc4",
      outline: "none",
      boxShadow: "0 0 0 3px rgba(78, 205, 196, 0.1)",
    },

    lineHeight: "1.4",
  },

  contactSection: {
    background:
      "linear-gradient(135deg, rgba(255, 107, 107, 0.05), rgba(78, 205, 196, 0.05))",
    marginTop: "2rem",
    borderBottomLeftRadius: "15px",
    padding: "1.5rem",
    border: "1px solid rgba(255, 107, 107, 0.1)",
    borderBottomRightRadius: "15px",
  },

  signup: {
    background: "rgba(255, 255, 255, 0.95)",
    display: "flex",
    backdropFilter: "blur(10px)",
    flexDirection: "column",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    margin: 0,
    // Prevent form expansion on mobile input focus
"@media (max-width: 768px)": {
      minHeight: "auto",
      overflow: "visible",
      transform: "translateZ(0)", // Hardware acceleration
      willChange: "auto",
    },
    
padding: 0,
    
borderRadius: "20px",
    
boxShadow: "0 8px 32px rgba(78, 205, 196, 0.2)",
    
flexWrap: "wrap",

    
    gap: 0,
  },

  contactLinks: {
    display: "flex",
    gap: "2rem",
    justifyContent: "center",
    marginBottom: "1rem",
  },

  signupForm: {
    marginTop: "2rem",
    textAlign: "center",
  },

  contactLink: {
    alignItems: "center",
    display: "flex",
    borderRadius: "25px",
    gap: "0.5rem",
    fontWeight: 500,
    padding: "0.8rem 1.2rem",
    textDecoration: "none",
    transition: "all 0.3s ease",
  },

  signupIconContainer: {
    alignItems: "center",
    display: "flex",
    backdropFilter: "blur(10px)",
    justifyContent: "center",
    background:
      "linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(78, 205, 196, 0.1))",
    border: "1px solid rgba(255, 107, 107, 0.2)",
    margin: "0 auto",
    maxWidth: "100%",
    height: "250px",
    width: "100%",
  },

  contactLinkIcon: {
    height: "20px",
    width: "20px",
  },

  signupImage: {
    textAlign: "center",
  },

  contactTitle: {
    color: "#333",
    fontSize: "1.1rem",
    fontWeight: "bold",
    marginBottom: "1rem",
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

  emailLink: {
    ":hover": {
      background: "linear-gradient(135deg, #ff5252, #ff8500)",
      boxShadow: "0 6px 20px rgba(255, 107, 107, 0.5)",
      transform: "translateY(-2px)",
    },
    background: "linear-gradient(135deg, #ff6b6b, #ff9500)",
    boxShadow: "0 4px 15px rgba(255, 107, 107, 0.3)",
    color: "white",
  },

  errorMessage: {
    backgroundColor: "rgba(244, 67, 54, 0.1)",
    border: "1px solid rgba(244, 67, 54, 0.3)",
    color: "#c62828",
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

  followText: {
    color: "#666",
    fontStyle: "italic",
    marginTop: "1rem",
  },

  signupFormElement: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    maxWidth: "400px",
    margin: "0 auto",

    // Mobile-specific form container improvements
    "@media (max-width: 768px)": {
      maxWidth: "100%",
      padding: "0 1rem",
      gap: "1.25rem",
    },

    "@media (max-width: 480px)": {
      padding: "0 0.5rem",
      gap: "1rem",
    },
  },

  contactLinksMobile: {
    "@media (max-width: 768px)": {
      alignItems: "center",
      flexDirection: "column",
      gap: "1rem",
    },
  },

  formTextarea: {
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "3px",
    width: "100%",
    boxSizing: "border-box",
    fontSize: "16px", // Prevent mobile zoom on iOS
    fontFamily: "inherit",
    lineHeight: "1.4",
    resize: "vertical",
    minHeight: "100px",

    // Mobile-specific improvements
    "@media (max-width: 768px)": {
      fontSize: "16px", // Critical: prevents zoom on iOS Safari
      padding: "0.75rem",
      borderRadius: "8px",
      border: "2px solid #ddd",
      minHeight: "120px",
      transition: "border-color 0.3s ease",
    },

    ":focus": {
      outline: "none",
      borderColor: "#4ecdc4",
      boxShadow: "0 0 0 3px rgba(78, 205, 196, 0.1)",
    },
  },

  contactLinkMobile: {
    "@media (max-width: 768px)": {
      justifyContent: "center",
      maxWidth: "250px",
      width: "100%",
    },
  },

  instagramLink: {
    ":hover": {
      background: "linear-gradient(135deg, #d81b60, #8e24aa)",
      boxShadow: "0 6px 20px rgba(233, 30, 99, 0.5)",
      transform: "translateY(-2px)",
    },
    background: "linear-gradient(135deg, #e91e63, #9c27b0)",
    boxShadow: "0 4px 15px rgba(233, 30, 99, 0.3)",
    color: "white",
  },

  
  messageBox: {
    borderRadius: "8px",
    fontWeight: "bold",
    marginBottom: "1rem",
    padding: "1rem",
    textAlign: "center",
  },

  
signupFormMobile: {
    "@media (max-width: 480px)": {
      marginTop: "1rem",
      padding: "0 0.5rem",
    },
    "@media (max-width: 768px)": {
      marginTop: "1.5rem",
      padding: "0 1rem",
    },
  },

  
signupIconContainerMobile: {
    "@media (max-width: 768px)": {
      height: "250px",
      margin: 0,
      maxWidth: "100%",
      width: "100%",
    },
  },

  
signupIconSvgMobile: {
    "@media (max-width: 768px)": {
      height: "auto",
      maxWidth: "300px",
      width: "90%",
    },
  },

  
// Mobile responsive styles
signupMobile: {
    "@media (max-width: 480px)": {
      borderRadius: "12px",
      margin: "0 0.5rem",
    },
    "@media (max-width: 768px)": {
      borderRadius: "15px",
      margin: "0 1rem",
    },
  },

  
successMessage: {
    backgroundColor: "rgba(76, 175, 80, 0.1)",
    border: "1px solid rgba(76, 175, 80, 0.3)",
    color: "#2e7d32",
  },
});
