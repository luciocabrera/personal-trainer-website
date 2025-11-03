import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  trainings: {
    backdropFilter: "blur(10px)",
    background: "rgba(255, 255, 255, 0.95)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "20px",
    boxShadow: "0 8px 32px rgba(78, 205, 196, 0.2)",
    marginBottom: "2rem",
    padding: "2rem",
  },

  trainingsGrid: {
    display: "grid",
    gap: "2rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  },

  trainingsGridMobile: {
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },

  
  // Mobile responsive styles
trainingsMobile: {
    "@media (max-width: 768px)": {
      padding: "1rem",
    },
  },

  
trainingsTitle: {
    
    
    
    
    
    
    
    
    // background: "linear-gradient(135deg, #667eea, #764ba2)",
background: `
      linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 50%, rgba(255, 107, 107, 0.9) 100%),
      url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Cpath d='M20 20h10v10H20zM40 40h10v10H40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
    `,
    








backgroundRepeat: "no-repeat, repeat",
    








backgroundSize: "cover, 60px 60px",
    
    







borderRadius: "20px 20px 0 0",
    







boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
    







margin: "-2rem -2rem 2rem -2rem",
    







"::after": {
      content: "",
      bottom: "-8px",
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      height: "4px",
      width: "80px",
      background: "rgba(255, 255, 255, 0.4)",
      borderRadius: "2px",
    },
    // textAlign: "center",
// marginBottom: "1rem",
// background: "linear-gradient(135deg, #ff6b6b, #4ecdc4)",
// WebkitBackgroundClip: "text",
// WebkitTextFillColor: "transparent",
// backgroundClip: "text",
// fontSize: "2.2rem",
// fontWeight: "bold",
textAlign: "center",
    color: "white",
    padding: "2rem",
    fontSize: "2.2rem",
    fontWeight: "bold",
    position: "relative",
  },
});
