import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  // Hamburger Menu Button
hamburger: {
    display: "none",
    flexDirection: "column",
    height: "24px",
    justifyContent: "space-around",
    background: "transparent",
    width: "24px",
    border: "none",
    cursor: "pointer",
    "@media (max-width: 768px)": {
      display: "flex",
    },
    padding: 0,
    zIndex: 1001,
  },

  
hamburgerLine: {
    height: "2px",
    background: "white",
    width: "24px",
    borderRadius: "2px",
    transformOrigin: "center",
    transition: "all 0.3s ease",
  },

  
hamburgerLineActive1: {
    transform: "rotate(45deg) translate(5px, 5px)",
  },

  
  
header: {
    background: `
      linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 50%, rgba(255, 107, 107, 0.95) 100%),
      url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3Ccircle cx='10' cy='10' r='1.5'/%3E%3Ccircle cx='50' cy='50' r='1.5'/%3E%3Ccircle cx='10' cy='50' r='1'/%3E%3Ccircle cx='50' cy='10' r='1'/%3E%3Cpath d='M15 15h8v8h-8z' fill-opacity='0.04'/%3E%3Cpath d='M37 37h8v8h-8z' fill-opacity='0.04'/%3E%3Cpath d='M20 5h3v10h-3z' fill-opacity='0.03'/%3E%3Cpath d='M37 45h3v10h-3z' fill-opacity='0.03'/%3E%3Cpolygon points='30,8 34,16 26,16' fill-opacity='0.05'/%3E%3Cpolygon points='30,52 34,44 26,44' fill-opacity='0.05'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
    `,
    backgroundRepeat: "no-repeat, repeat",
    backgroundSize: "cover, 60px 60px",
    color: "white",
    boxSizing: "border-box",
    left: 0,
    boxShadow:
      "0 4px 25px rgba(102, 126, 234, 0.4), 0 2px 10px rgba(255, 107, 107, 0.2)",
    padding: "1rem 2rem",
    alignItems: "center",
    position: "fixed",
    // Single consistent header height
backdropFilter: "blur(5px)",
    
top: 0,
    
"@media (max-width: 768px)": {
      padding: "1rem",
      minHeight: "60px", // Much smaller mobile header
    },
    
width: "100%",
    
borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    
right: 0,
    
display: "flex", 
    zIndex: 1000,
    justifyContent: "center",
    minHeight: "80px",
  },

  

hamburgerLineActive2: {
    opacity: 0,
  },

  
  

languageButton: {
    background: "rgba(255, 255, 255, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    color: "white",
    cursor: "pointer",
    padding: "0.4rem 0.8rem",
    borderRadius: "6px",
    fontSize: "0.875rem",
    transition: "all 0.3s ease",
    fontWeight: "500",
    minWidth: "3rem",
    flexShrink: 0,
    textAlign: "center",
    ":hover": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      borderColor: "rgba(255, 255, 255, 0.5)",
      transform: "translateY(-1px)",
    },
    textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
  },

  


hamburgerLineActive3: {
    transform: "rotate(-45deg) translate(7px, -6px)",
  },

  


logo: {
    flexShrink: 0,
    fontSize: "1.5rem",
    fontWeight: "bold",
    "@media (max-width: 768px)": {
      fontSize: "1.25rem",
    },
    letterSpacing: "0.5px",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  },

  
  

languageButtonActive: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.3) inset",
    fontWeight: "600",
  },

  

menuLink: {
    color: "white",
    padding: "0.75rem 1rem",
    textDecoration: "none",
    borderRadius: "8px",
    background: "none",
    transition: "all 0.3s ease",
    border: "none",
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: "inherit",
    fontWeight: "500",
    whiteSpace: "nowrap",
    ":hover": {
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      transform: "translateY(-1px)",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
    },
    textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
  },

  

// Desktop Language Selector
languageSelector: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    "@media (max-width: 768px)": {
      display: "none", // Hide desktop language selector on mobile
    },
    flexShrink: 0,
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

  
// Desktop Navigation
menuList: {
    display: "flex",
    listStyle: "none",
    gap: "1rem",
    margin: 0,
    alignItems: "center",
    padding: 0,
    "@media (max-width: 768px)": {
      display: "none", // Hide desktop menu on mobile
    },
  },

  
  mobileLanguageButton: {
    background: "none",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "6px",
    color: "white",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderColor: "rgba(255, 255, 255, 0.5)",
    },
    fontSize: "0.875rem",
    fontWeight: "500",
    minWidth: "3rem",
    padding: "0.5rem 1rem",
    textAlign: "center",
    transition: "all 0.3s ease",
  },

  
mobileLanguageButtonActive: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderColor: "rgba(255, 255, 255, 0.6)",
    fontWeight: "600",
  },

  
  
// Mobile Language Selector
mobileLanguageSelector: {
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    display: "flex",
    gap: "0.5rem",
    justifyContent: "center",
    marginBottom: "1.5rem",
    paddingBottom: "1rem",
  },

  


mobileMenu: {
    
background: `
      linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 50%, rgba(255, 107, 107, 0.95) 100%),
      url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3Ccircle cx='10' cy='10' r='1.5'/%3E%3Ccircle cx='50' cy='50' r='1.5'/%3E%3Ccircle cx='10' cy='50' r='1'/%3E%3Ccircle cx='50' cy='10' r='1'/%3E%3Cpath d='M15 15h8v8h-8z' fill-opacity='0.04'/%3E%3Cpath d='M37 37h8v8h-8z' fill-opacity='0.04'/%3E%3Cpath d='M20 5h3v10h-3z' fill-opacity='0.03'/%3E%3Cpath d='M37 45h3v10h-3z' fill-opacity='0.03'/%3E%3Cpolygon points='30,8 34,16 26,16' fill-opacity='0.05'/%3E%3Cpolygon points='30,52 34,44 26,44' fill-opacity='0.05'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
    `,
    
// Start below header
left: 0, 
    backgroundRepeat: "no-repeat, repeat",
    position: "absolute",
    backgroundSize: "cover, 60px 60px",
    right: 0,
    boxShadow:
      "0 8px 30px rgba(102, 126, 234, 0.3), 0 4px 15px rgba(0, 0, 0, 0.2)",
    top: "60px",
    backdropFilter: "blur(10px)",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    width: "100%",
    boxSizing: "border-box",
    color: "white",
    padding: "1.5rem",
  },

  

mobileMenuLink: {
    background: "none",
    border: "none",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
    fontFamily: "inherit",
    display: "block",
    padding: "1rem",
    ":hover": {
      backgroundColor: "rgba(255, 255, 255, 0.15)",
    },
    textDecoration: "none",
    ":active": {
      backgroundColor: "rgba(255, 255, 255, 0.25)",
    },
    fontSize: "1.1rem",
    transition: "background-color 0.3s ease",
    fontWeight: "500",
    textAlign: "center",
    width: "100%",
  },

  
  
// Mobile Menu List
mobileMenuList: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },

  
// Mobile Menu Overlay
mobileMenuOverlay: {
    display: "none",
    bottom: 0,
    left: 0,
    background: "rgba(0, 0, 0, 0.5)",
    position: "fixed",
    "@media (max-width: 768px)": {
      display: "block",
    },
    top: 0,
    right: 0,
    zIndex: 999,
  },
});
