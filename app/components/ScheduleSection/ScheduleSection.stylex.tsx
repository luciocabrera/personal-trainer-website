import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  contactInfo: {
    background: "rgba(255, 107, 107, 0.1)",
    border: "1px solid rgba(255, 107, 107, 0.2)",
    borderRadius: "8px",
    color: "#ff6b6b",
    fontSize: "1.1rem",
    fontWeight: "600",
    marginBottom: "0",
    padding: "1rem",
    textAlign: "center",
  },

  locationNote: {
    background: "rgba(78, 205, 196, 0.1)",
    border: "1px solid rgba(78, 205, 196, 0.2)",
    borderRadius: "8px",
    color: "#666",
    fontSize: "0.95rem",
    fontStyle: "italic",
    marginBottom: "2rem",
    padding: "0.75rem",
    textAlign: "center",
  },

  locationTitle: {
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    background: "linear-gradient(135deg, #ff6b6b, #4ecdc4)",
    backgroundClip: "text",
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginBottom: "2rem",
    textAlign: "center",
  },

  locationsGrid: {
    alignItems: "stretch",
    display: "grid",
    gap: "1.5rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    marginBottom: "2rem",
    overflow: "visible",
  },

  locationsGridMobile: {
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
  locationsSection: {
    margin: "2rem 0",
  },

  locationsSectionTitle: {
    background: "linear-gradient(135deg, #4ecdc4, #45b7b8)",
    borderRadius: "15px 15px 0 0",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    color: "white",
    fontSize: "2rem",
    fontWeight: "bold",
    margin: "-2rem -2rem 1.5rem -2rem",
    padding: "1.5rem 2rem",
    position: "relative",
    textAlign: "center",
    "::after": {
      bottom: "-5px",
      content: "",
      position: "absolute",
      left: "50%",
      height: "3px",
      transform: "translateX(-50%)",
      width: "60px",
      background: "rgba(255, 255, 255, 0.3)",
      borderRadius: "2px",
    },
  },

  mapContainer: {
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  },

  mapIframe: {
    border: "none",
    borderRadius: "10px",
  },

  onDemandDesc: {
    color: "#555",
    fontSize: "1.1rem",
    lineHeight: "1.6",
    marginBottom: "1.5rem",
    textAlign: "center",
  },

  onDemandTitle: {
    background: "linear-gradient(135deg, #ff6b6b, #4ecdc4)",
    borderRadius: "15px 15px 0 0",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    color: "white",
    fontSize: "2rem",
    fontWeight: "bold",
    margin: "-2rem -2rem 1.5rem -2rem",
    padding: "1.5rem 2rem",
    position: "relative",
    textAlign: "center",
    "::after": {
      bottom: "-5px",
      content: "",
      height: "3px",
      background: "rgba(255, 255, 255, 0.3)",
      left: "50%",
      position: "absolute",
      borderRadius: "2px",
      transform: "translateX(-50%)",
      width: "60px",
    },
  },

  schedule: {
    backdropFilter: "blur(10px)",
    background: "rgba(255, 255, 255, 0.95)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "20px",
    boxShadow: "0 8px 32px rgba(78, 205, 196, 0.2)",
    gap: 0,
    margin: 0,
    overflow: "visible",
    padding: 0,
  },

  scheduleIconContainer: {
    alignItems: "center",
    backdropFilter: "blur(10px)",
    background:
      "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(255, 107, 107, 0.1))",

    border: "1px solid rgba(102, 126, 234, 0.2)",
    display: "flex",
    height: "250px",
    justifyContent: "center",
    margin: "0 auto",
    maxWidth: "100%",
    width: "100%",
  },

  scheduleIconContainerMobile: {
    "@media (max-width: 768px)": {
      height: "250px",
      margin: 0,
      maxWidth: "100%",
      width: "100%",
    },
  },

  scheduleIconSvg: {
    height: "auto",
    maxWidth: "100%",
    willChange: "transform",
  },

  scheduleIconSvgMobile: {
    "@media (max-width: 768px)": {
      height: "auto",
      maxWidth: "300px",
      width: "90%",
    },
  },

  scheduleImage: {
    textAlign: "center",
  },

  // Mobile responsive styles
scheduleMobile: {
    "@media (max-width: 768px)": {
      padding: "1rem",
    },
  },

  
scheduleTitle: {
    background: `
      linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 50%, rgba(255, 107, 107, 0.9) 100%),
      url("data:image/svg+xml,%3Csvg width='70' height='70' viewBox='0 0 70 70' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.09'%3E%3Cpath d='M35 5L45 25H25L35 5ZM65 35L55 15H75L65 35ZM5 35L15 55H-5L5 35ZM35 65L25 45H45L35 65Z'/%3E%3Crect x='30' y='30' width='10' height='10'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
    `,
    backgroundRepeat: "no-repeat, repeat",
    backgroundSize: "cover, 70px 70px",
    borderRadius: "20px 20px 0 0",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
    color: "white",
    padding: "2rem",
    fontSize: "2.2rem",
    textAlign: "center",
    fontWeight: "bold",
    margin: 0,
    position: "relative",
    "::after": {
      bottom: "-8px",
      content: "",
      height: "4px",
      left: "50%",
      background: "rgba(255, 255, 255, 0.4)",
      position: "absolute",
      transform: "translateX(-50%)",
      borderRadius: "2px",
      width: "80px",
    },
  },

  
sessionCard: {
    background: "linear-gradient(135deg, #ff6b6b1a, #4ecdc41a)",
    border: "1px solid rgba(78, 205, 196, 0.3)",
    borderRadius: "10px",
    padding: "1.5rem",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    ":hover": {
      boxShadow: "0 6px 25px rgba(78, 205, 196, 0.2)",
      transform: "translateY(-2px)",
    },
  },

  
sessionDay: {
    color: "#333",
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },

  
  
sessionDescription: {
    color: "#666",
    fontSize: "0.9rem",
    fontStyle: "italic",
  },

  

sessionTime: {
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    background: "linear-gradient(135deg, #ff6b6b, #4ecdc4)",
    backgroundClip: "text",
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },

  

sessionsGrid: {
    display: "grid",
    gap: "1rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    marginBottom: "2rem",
  },

  
singleLocationCard: {
    background: "rgba(255, 255, 255, 0.9)",
    border: "1px solid rgba(78, 205, 196, 0.2)",
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    marginBottom: "2rem",
    overflow: "visible",
    padding: "2rem",
    position: "relative",
  },
});
