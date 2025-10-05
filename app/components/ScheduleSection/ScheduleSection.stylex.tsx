import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  schedule: {
    marginBottom: "2rem",
    padding: "2rem",
    background: "rgba(255, 255, 255, 0.95)",
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 32px rgba(78, 205, 196, 0.2)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },

  scheduleTitle: {
    textAlign: "center",
    marginBottom: "1rem",
    background: "linear-gradient(135deg, #ff6b6b, #4ecdc4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    fontSize: "2.2rem",
    fontWeight: "bold",
  },

  onDemandTitle: {
    textAlign: "center",
    marginBottom: "1.5rem",
    background: "linear-gradient(135deg, #ff6b6b, #4ecdc4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    fontSize: "2rem",
    fontWeight: "bold",
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
    background: "linear-gradient(135deg, #ff6b6b, #4ecdc4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textAlign: "center",
    marginBottom: "1.5rem",
    fontSize: "2rem",
    fontWeight: "bold",
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
});
