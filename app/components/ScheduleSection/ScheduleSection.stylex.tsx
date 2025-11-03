import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  contactInfo: {
    background: "rgba(255, 107, 107, 0.1)",
    borderColor: "rgba(255, 107, 107, 0.2)",
    borderRadius: "8px",
    borderStyle: "solid",
    borderWidth: "1px",
    color: "#ff6b6b",
    fontSize: "1.1rem",
    fontWeight: 600,
    marginBottom: "0",
    padding: "1rem",
    textAlign: "center",
  },

  locationNote: {
    background: "rgba(78, 205, 196, 0.1)",
    borderColor: "rgba(78, 205, 196, 0.2)",
    borderRadius: "8px",
    borderStyle: "solid",
    borderWidth: "1px",
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
    gridTemplateColumns: {
      default: null,
      "@media (max-width: 768px)": "1fr",
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
      background: "rgba(255, 255, 255, 0.3)",
      borderRadius: "2px",
      bottom: "-5px",
      content: "",
      height: "3px",
      left: "50%",
      position: "absolute",
      transform: "translateX(-50%)",
      width: "60px",
    },
  },

  mapContainer: {
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  },

  mapIframe: {
    borderColor: "transparent",
    borderRadius: "10px",
    borderStyle: "none",
    borderWidth: 0,
  },

  onDemandDesc: {
    color: "#555",
    fontSize: "1.1rem",
    lineHeight: 1.6,
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
      background: "rgba(255, 255, 255, 0.3)",
      borderRadius: "2px",
      bottom: "-5px",
      content: "",
      height: "3px",
      left: "50%",
      position: "absolute",
      transform: "translateX(-50%)",
      width: "60px",
    },
  },

  schedule: {
    backdropFilter: "blur(10px)",
    background: "rgba(255, 255, 255, 0.95)",
    borderColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: "20px",
    borderStyle: "solid",
    borderWidth: "1px",
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

    borderColor: "rgba(102, 126, 234, 0.2)",
    borderStyle: "solid",
    borderWidth: "1px",
    display: "flex",
    height: "250px",
    justifyContent: "center",
    margin: "0 auto",
    maxWidth: "100%",
    width: "100%",
  },

  scheduleIconContainerMobile: {
    height: {
      default: null,
      "@media (max-width: 768px)": "250px",
    },
    margin: {
      default: null,
      "@media (max-width: 768px)": 0,
    },
    maxWidth: {
      default: null,
      "@media (max-width: 768px)": "100%",
    },
    width: {
      default: null,
      "@media (max-width: 768px)": "100%",
    },
  },

  scheduleIconSvg: {
    height: "auto",
    maxWidth: "100%",
    willChange: "transform",
  },

  scheduleIconSvgMobile: {
    height: {
      default: null,
      "@media (max-width: 768px)": "auto",
    },
    maxWidth: {
      default: null,
      "@media (max-width: 768px)": "300px",
    },
    width: {
      default: null,
      "@media (max-width: 768px)": "90%",
    },
  },

  scheduleImage: {
    textAlign: "center",
  },

  // Mobile responsive styles
  scheduleMobile: {
    padding: {
      default: null,
      "@media (max-width: 768px)": "1rem",
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
    fontSize: "2.2rem",
    fontWeight: "bold",
    margin: 0,
    padding: "2rem",
    position: "relative",
    textAlign: "center",
    "::after": {
      background: "rgba(255, 255, 255, 0.4)",
      borderRadius: "2px",
      bottom: "-8px",
      content: "",
      height: "4px",
      left: "50%",
      position: "absolute",
      transform: "translateX(-50%)",
      width: "80px",
    },
  },

  sessionCard: {
    background: "linear-gradient(135deg, #ff6b6b1a, #4ecdc41a)",
    borderColor: "rgba(78, 205, 196, 0.3)",
    borderRadius: "10px",
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow: {
      default: null,
      ":hover": "0 6px 25px rgba(78, 205, 196, 0.2)",
    },
    padding: "1.5rem",
    textAlign: "center",
    transform: {
      default: null,
      ":hover": "translateY(-2px)",
    },
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
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
    borderColor: "rgba(78, 205, 196, 0.2)",
    borderRadius: "15px",
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    marginBottom: "2rem",
    overflow: "visible",
    padding: "2rem",
    position: "relative",
  },
});
