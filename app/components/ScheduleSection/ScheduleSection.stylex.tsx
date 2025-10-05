import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  schedule: {
    padding: 0,
    margin: 0,
    background: "rgba(255, 255, 255, 0.95)",
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 32px rgba(78, 205, 196, 0.2)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    overflow: "visible",
    gap: 0,
  },

  scheduleTitle: {
    textAlign: "center",
    // margin: "-2rem -2rem 2rem -2rem",
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

  scheduleImage: {
    textAlign: "center",
  },

  scheduleIconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(255, 107, 107, 0.1))",

    backdropFilter: "blur(10px)",
    border: "1px solid rgba(102, 126, 234, 0.2)",
    margin: "0 auto",
    width: "100%",
    maxWidth: "100%",
    height: "250px",
  },

  scheduleIconSvg: {
    maxWidth: "100%",
    height: "auto",
    willChange: "transform",
  },
  sectionContent: {
    padding: "2rem",
  },

  onDemandTitle: {
    textAlign: "center",
    margin: "-2rem -2rem 1.5rem -2rem",
    padding: "1.5rem 2rem",
    background: "linear-gradient(135deg, #ff6b6b, #4ecdc4)",
    color: "white",
    borderRadius: "15px 15px 0 0",
    fontSize: "2rem",
    fontWeight: "bold",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    position: "relative",
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
  },

  onDemandDesc: {
    fontSize: "1.1rem",
    color: "#555",
    marginBottom: "1.5rem",
    lineHeight: "1.6",
    textAlign: "center",
  },

  contactInfo: {
    fontSize: "1.1rem",
    fontWeight: "600",
    color: "#ff6b6b",
    marginBottom: "0",
    textAlign: "center",
    padding: "1rem",
    background: "rgba(255, 107, 107, 0.1)",
    borderRadius: "8px",
    border: "1px solid rgba(255, 107, 107, 0.2)",
  },

  locationsSection: {
    margin: "2rem 0",
  },

  locationNote: {
    textAlign: "center",
    fontSize: "0.95rem",
    color: "#666",
    fontStyle: "italic",
    marginBottom: "2rem",
    padding: "0.75rem",
    background: "rgba(78, 205, 196, 0.1)",
    borderRadius: "8px",
    border: "1px solid rgba(78, 205, 196, 0.2)",
  },

  locationsSectionTitle: {
    textAlign: "center",
    margin: "-2rem -2rem 1.5rem -2rem",
    padding: "1.5rem 2rem",
    background: "linear-gradient(135deg, #4ecdc4, #45b7b8)",
    color: "white",
    borderRadius: "15px 15px 0 0",
    fontSize: "2rem",
    fontWeight: "bold",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    position: "relative",
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
  },

  locationsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.5rem",
    marginBottom: "2rem",
    alignItems: "stretch",
    overflow: "visible",
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

  locationTitle: {
    textAlign: "center",
    marginBottom: "2rem",
    background: "linear-gradient(135deg, #ff6b6b, #4ecdc4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    fontSize: "1.8rem",
    fontWeight: "bold",
  },

  sessionsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1rem",
    marginBottom: "2rem",
  },

  sessionCard: {
    background: "linear-gradient(135deg, #ff6b6b10, #4ecdc410)",
    borderRadius: "10px",
    padding: "1.5rem",
    textAlign: "center",
    border: "1px solid rgba(78, 205, 196, 0.3)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    ":hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 6px 25px rgba(78, 205, 196, 0.2)",
    },
  },

  sessionDay: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "0.5rem",
  },

  sessionTime: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    background: "linear-gradient(135deg, #ff6b6b, #4ecdc4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "0.5rem",
  },

  sessionDescription: {
    fontSize: "0.9rem",
    color: "#666",
    fontStyle: "italic",
  },

  mapContainer: {
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
  },

  mapIframe: {
    border: "none",
    borderRadius: "10px",
  },

  // Mobile responsive styles
  scheduleMobile: {
    "@media (max-width: 768px)": {
      padding: "1rem",
    },
  },

  locationsGridMobile: {
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },

  scheduleIconContainerMobile: {
    "@media (max-width: 768px)": {
      width: "100%",
      maxWidth: "100%",
      height: "250px",
      margin: 0,
    },
  },

  scheduleIconSvgMobile: {
    "@media (max-width: 768px)": {
      width: "90%",
      maxWidth: "300px",
      height: "auto",
    },
  },
});
