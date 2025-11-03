import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  contactInfo: {
    color: "#ff6b6b",
    fontSize: "1.1rem",
    fontWeight: "600",
    marginBottom: "0",
    background: "rgba(255, 107, 107, 0.1)",
    padding: "1rem",
    border: "1px solid rgba(255, 107, 107, 0.2)",
    textAlign: "center",
    borderRadius: "8px",
  },

  locationNote: {
    fontSize: "0.95rem",
    color: "#666",
    textAlign: "center",
    fontStyle: "italic",
    background: "rgba(78, 205, 196, 0.1)",
    marginBottom: "2rem",
    border: "1px solid rgba(78, 205, 196, 0.2)",
    padding: "0.75rem",
    borderRadius: "8px",
  },

  locationsGrid: {
    display: "grid",
    gap: "1.5rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    alignItems: "stretch",
    marginBottom: "2rem",
    overflow: "visible",
  },

  onDemandTitle: {
    margin: "-2rem -2rem 1.5rem -2rem",
    background: "linear-gradient(135deg, #ff6b6b, #4ecdc4)",
    textAlign: "center",
    borderRadius: "15px 15px 0 0",
    padding: "1.5rem 2rem",
    color: "white",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    fontSize: "2rem",
    "::after": {
      content: "",
      position: "absolute",
      bottom: "-5px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "60px",
      height: "3px",
      background: "rgba(255, 255, 255, 0.3)",
      borderRadius: "2px",
    },
    fontWeight: "bold",
    position: "relative",
  },

  locationTitle: {
    marginBottom: "2rem",
    textAlign: "center",
    WebkitBackgroundClip: "text",
    background: "linear-gradient(135deg, #ff6b6b, #4ecdc4)",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    fontSize: "1.8rem",
    fontWeight: "bold",
  },
  schedule: {
    backdropFilter: "blur(10px)",
    background: "rgba(255, 255, 255, 0.95)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    margin: 0,
    borderRadius: "20px",
    padding: 0,
    boxShadow: "0 8px 32px rgba(78, 205, 196, 0.2)",
    gap: 0,
    overflow: "visible",
  },

  locationsSection: {
    margin: "2rem 0",
  },

  scheduleIconContainer: {
    alignItems: "center",
    display: "flex",
    backdropFilter: "blur(10px)",
    justifyContent: "center",

    background:
      "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(255, 107, 107, 0.1))",
    border: "1px solid rgba(102, 126, 234, 0.2)",
    margin: "0 auto",
    maxWidth: "100%",
    height: "250px",
    width: "100%",
  },

  locationsSectionTitle: {
    background: "linear-gradient(135deg, #4ecdc4, #45b7b8)",
    borderRadius: "15px 15px 0 0",
    margin: "-2rem -2rem 1.5rem -2rem",
    color: "white",
    textAlign: "center",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    padding: "1.5rem 2rem",
    "::after": {
      content: "",
      bottom: "-5px",
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      height: "3px",
      width: "60px",
      background: "rgba(255, 255, 255, 0.3)",
      borderRadius: "2px",
    },
    fontSize: "2rem",
    fontWeight: "bold",
    position: "relative",
  },

  scheduleImage: {
    textAlign: "center",
  },

  onDemandDesc: {
    color: "#555",
    fontSize: "1.1rem",
    lineHeight: "1.6",
    marginBottom: "1.5rem",
    textAlign: "center",
  },

  scheduleTitle: {
    textAlign: "center",
    padding: "2rem",
    background: `
      linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 50%, rgba(255, 107, 107, 0.9) 100%),
      url("data:image/svg+xml,%3Csvg width='70' height='70' viewBox='0 0 70 70' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.09'%3E%3Cpath d='M35 5L45 25H25L35 5ZM65 35L55 15H75L65 35ZM5 35L15 55H-5L5 35ZM35 65L25 45H45L35 65Z'/%3E%3Crect x='30' y='30' width='10' height='10'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
    `,
    backgroundSize: "cover, 70px 70px",
    backgroundRepeat: "no-repeat, repeat",
    color: "white",
    borderRadius: "20px 20px 0 0",
    fontSize: "2.2rem",
    fontWeight: "bold",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
    position: "relative",
    "::after": {
      content: "",
      position: "absolute",
      bottom: "-8px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "80px",
      height: "4px",
      background: "rgba(255, 255, 255, 0.4)",
      borderRadius: "2px",
    },
    margin: 0,
  },

  mapContainer: {
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  },

  locationsGridMobile: {
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },

  scheduleIconSvg: {
    maxWidth: "100%",
    height: "auto",
    willChange: "transform",
  },

  mapIframe: {
    border: "none",
    borderRadius: "10px",
  },

  sessionCard: {
    background: "linear-gradient(135deg, #ff6b6b1a, #4ecdc41a)",
    ":hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 6px 25px rgba(78, 205, 196, 0.2)",
    },
    border: "1px solid rgba(78, 205, 196, 0.3)",
    borderRadius: "10px",
    padding: "1.5rem",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },

  scheduleIconContainerMobile: {
    "@media (max-width: 768px)": {
      height: "250px",
      margin: 0,
      maxWidth: "100%",
      width: "100%",
    },
  },

  sessionDay: {
    color: "#333",
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },

  scheduleIconSvgMobile: {
    "@media (max-width: 768px)": {
      height: "auto",
      maxWidth: "300px",
      width: "90%",
    },
  },

  sessionDescription: {
    color: "#666",
    fontSize: "0.9rem",
    fontStyle: "italic",
  },

  
  // Mobile responsive styles
scheduleMobile: {
    "@media (max-width: 768px)": {
      padding: "1rem",
    },
  },

  

singleLocationCard: {
    background: "rgba(255, 255, 255, 0.9)",
    borderRadius: "15px",
    padding: "2rem",
    marginBottom: "2rem",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    border: "1px solid rgba(78, 205, 196, 0.2)",
    overflow: "visible",
    position: "relative",
  },

  

sessionTime: {
    background: "linear-gradient(135deg, #ff6b6b, #4ecdc4)",
    fontSize: "1.5rem",
    WebkitBackgroundClip: "text",
    fontWeight: "bold",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "0.5rem",
  },

  
sessionsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1rem",
    marginBottom: "2rem",
  },
});
