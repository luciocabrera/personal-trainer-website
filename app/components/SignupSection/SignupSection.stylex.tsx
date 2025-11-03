import * as stylex from "@stylexjs/stylex";

const floatAnimation = stylex.keyframes({
  "0%": { transform: "translateY(0px)" },
  "100%": { transform: "translateY(0px)" },
  "50%": { transform: "translateY(-5px)" },
});

export const styles = stylex.create({
  contactLink: {
    alignItems: "center",
    borderRadius: "25px",
    display: "flex",
    fontWeight: 500,
    gap: "0.5rem",
    padding: "0.8rem 1.2rem",
    textDecoration: "none",
    transition: "all 0.3s ease",
  },

  contactLinkIcon: {
    height: "20px",
    width: "20px",
  },

  contactLinks: {
    display: "flex",
    gap: "2rem",
    justifyContent: "center",
    marginBottom: "1rem",
  },

  contactSection: {
    background:
      "linear-gradient(135deg, rgba(255, 107, 107, 0.05), rgba(78, 205, 196, 0.05))",
    border: "1px solid rgba(255, 107, 107, 0.1)",
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
    marginTop: "2rem",
    padding: "1.5rem",
  },

  contactTitle: {
    color: "#333",
    fontSize: "1.1rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },

  emailLink: {
    background: "linear-gradient(135deg, #ff6b6b, #ff9500)",
    boxShadow: "0 4px 15px rgba(255, 107, 107, 0.3)",
    color: "white",
    ":hover": {
      background: "linear-gradient(135deg, #ff5252, #ff8500)",
      boxShadow: "0 6px 20px rgba(255, 107, 107, 0.5)",
      transform: "translateY(-2px)",
    },
  },

  errorMessage: {
    backgroundColor: "rgba(244, 67, 54, 0.1)",
    border: "1px solid rgba(244, 67, 54, 0.3)",
    color: "#c62828",
  },

  followText: {
    color: "#666",
    fontStyle: "italic",
    marginTop: "1rem",
  },

  contactLinksMobile: {
    "@media (max-width: 768px)": {
      alignItems: "center",
      flexDirection: "column",
      gap: "1rem",
    },
  },

  formButton: {
    background: "linear-gradient(135deg, #ff6b6b, #4ecdc4)",
    border: "none",
    borderRadius: "25px",
    color: "white",
    boxShadow: "0 4px 15px rgba(255, 107, 107, 0.4)",
    cursor: "pointer",
    fontWeight: "bold",
    letterSpacing: "1px",
    padding: "0.8rem 1.5rem",
    textTransform: "uppercase",
    transition: "all 0.3s ease",
    ":hover": {
      background: "linear-gradient(135deg, #ff5252, #26a69a)",
      boxShadow: "0 8px 25px rgba(255, 107, 107, 0.6)",
      transform: "translateY(-2px)",
    },
  },

  contactLinkMobile: {
    "@media (max-width: 768px)": {
      justifyContent: "center",
      maxWidth: "250px",
      width: "100%",
    },
  },

  formInput: {
    border: "1px solid #ccc",
    borderRadius: "3px",
    boxSizing: "border-box",
    // Prevent mobile zoom on iOS
fontFamily: "inherit",
     
    
fontSize: "16px",

    

    lineHeight: "1.4",
    padding: "0.5rem",
width: "100%",
    ":focus": {
      borderColor: "#4ecdc4",
      boxShadow: "0 0 0 3px rgba(78, 205, 196, 0.1)",
      outline: "none",
    },
    // Mobile-specific improvements
"@media (max-width: 768px)": {
      border: "2px solid #ddd",
      borderRadius: "8px",
      fontSize: "16px", // Critical: prevents zoom on iOS Safari
      padding: "0.75rem",
      transition: "border-color 0.3s ease",
    },
  },

  formTextarea: {
    border: "1px solid #ccc",
    borderRadius: "3px",
    boxSizing: "border-box",
    // Prevent mobile zoom on iOS
fontFamily: "inherit", 
    fontSize: "16px",
    lineHeight: "1.4",
    minHeight: "100px",
    padding: "0.5rem",


    resize: "vertical",
    width: "100%",
    ":focus": {
      borderColor: "#4ecdc4",
      boxShadow: "0 0 0 3px rgba(78, 205, 196, 0.1)",
      outline: "none",
    },
    // Mobile-specific improvements
    "@media (max-width: 768px)": { 
      border: "2px solid #ddd",
      borderRadius: "8px",
      fontSize: "16px",
      minHeight: "120px",
      // Critical: prevents zoom on iOS Safari
padding: "0.75rem",
      transition: "border-color 0.3s ease",
    },
  },

  signup: {
    backdropFilter: "blur(10px)",
    background: "rgba(255, 255, 255, 0.95)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    
    
borderRadius: "20px",
    
boxShadow: "0 8px 32px rgba(78, 205, 196, 0.2)",
    display: "flex",
    flexDirection: "column",
    
flexWrap: "wrap",

    
    gap: 0,
    margin: 0,
padding: 0,
    // Prevent form expansion on mobile input focus
"@media (max-width: 768px)": {
      minHeight: "auto",
      overflow: "visible",
      transform: "translateZ(0)", // Hardware acceleration
      willChange: "auto",
    },
  },

  instagramLink: {
    background: "linear-gradient(135deg, #e91e63, #9c27b0)",
    boxShadow: "0 4px 15px rgba(233, 30, 99, 0.3)",
    color: "white",
    ":hover": {
      background: "linear-gradient(135deg, #d81b60, #8e24aa)",
      boxShadow: "0 6px 20px rgba(233, 30, 99, 0.5)",
      transform: "translateY(-2px)",
    },
  },

  signupForm: {
    marginTop: "2rem",
    textAlign: "center",
  },

  messageBox: {
    borderRadius: "8px",
    fontWeight: "bold",
    marginBottom: "1rem",
    padding: "1rem",
    textAlign: "center",
  },

  signupIconContainer: {
    alignItems: "center",
    backdropFilter: "blur(10px)",
    background:
      "linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(78, 205, 196, 0.1))",
    border: "1px solid rgba(255, 107, 107, 0.2)",
    display: "flex",
    height: "250px",
    justifyContent: "center",
    margin: "0 auto",
    maxWidth: "100%",
    width: "100%",
  },

  signupFormElement: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    margin: "0 auto",

    
    maxWidth: "400px",
    "@media (max-width: 480px)": {
      gap: "1rem",
      padding: "0 0.5rem",
    },

    // Mobile-specific form container improvements
"@media (max-width: 768px)": {
      gap: "1.25rem",
      maxWidth: "100%",
      padding: "0 1rem",
    },
  },

  signupImage: {
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

  
  signupTitle: {
    background: `
      linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 50%, rgba(255, 107, 107, 0.9) 100%),
      url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.06'%3E%3Cpath d='M50 15L60 35H40L50 15ZM85 50L75 30H95L85 50ZM15 50L25 70H5L15 50ZM50 85L40 65H60L50 85Z'/%3E%3Ccircle cx='50' cy='50' r='8'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
    `,
    backgroundRepeat: "no-repeat, repeat",
    backgroundSize: "cover, 100px 100px",
    borderRadius: "20px 20px 0 0",
    // margin: "-2rem -2rem 2rem -2rem",
    padding: "2rem",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
    textAlign: "center",
    color: "white",
    fontSize: "2.2rem",
    fontWeight: "bold",
    margin: 0,
    position: "relative",
  },

  
signupIconContainerMobile: {
    "@media (max-width: 768px)": {
      height: "250px",
      margin: 0,
      maxWidth: "100%",
      width: "100%",
    },
  },

  
signupIconSvg: {
    animationDuration: "4s",
    animationIterationCount: "infinite",
    animationName: floatAnimation,
    animationTimingFunction: "ease-in-out",
    height: "auto",
    maxWidth: "100%",
    willChange: "transform",
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
