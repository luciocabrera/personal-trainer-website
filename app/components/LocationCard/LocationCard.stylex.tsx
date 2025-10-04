import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  locationCard: {
    background:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(78, 205, 196, 0.1))",
    padding: "1.5rem",
    borderRadius: "15px",
    boxShadow: "0 8px 30px rgba(78, 205, 196, 0.2)",
    border: "1px solid rgba(78, 205, 196, 0.3)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    display: "flex",
    flexDirection: "column",
    minHeight: "400px",
    ":hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 12px 40px rgba(78, 205, 196, 0.4)",
      zIndex: 1,
      willChange: "transform",
    },
  },

  locationCardTitle: {
    background: "linear-gradient(135deg, #ff9500, #ff6b6b)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    margin: "0 0 0.5rem 0",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },

  locationCardParagraph: {
    color: "#666",
    margin: "0 0 1rem 0",
    fontSize: "0.9rem",
  },

  locationDetails: {
    margin: "1rem 0",
    flexGrow: 1,
  },

  locationDetailsDiv: {
    margin: "0.5rem 0",
    fontSize: "0.9rem",
    lineHeight: 1.4,
  },

  trainingTime: {
    color: "#ff6b6b",
    fontWeight: "bold",
    fontSize: "1rem",
  },

  trainingType: {
    color: "#4ecdc4",
    fontWeight: 600,
    fontSize: "0.95rem",
  },

  trainingCapacity: {
    color: "#ff9500",
    fontWeight: 500,
  },

  trainingLocation: {
    color: "#666",
    fontStyle: "italic",
  },

  trainingDates: {
    color: "#9c27b0",
    fontWeight: 500,
    fontSize: "0.85rem",
    background: "rgba(156, 39, 176, 0.1)",
    padding: "0.3rem 0.6rem",
    borderRadius: "12px",
    display: "inline-block",
    marginTop: "0.3rem",
  },

  comingSoon: {
    color: "#e91e63",
    fontWeight: "bold",
    background: "rgba(233, 30, 99, 0.1)",
    padding: "0.2rem 0.8rem",
    borderRadius: "15px",
    display: "inline-block",
    fontSize: "0.8rem",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },

  mapContainer: {
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    marginTop: "1rem",
  },

  mapIframe: {
    border: 0,
    borderRadius: "8px",
  },

  // Mobile responsive styles
  locationDetailsDivMobile: {
    "@media (max-width: 768px)": {
      fontSize: "0.85rem",
    },
  },

  trainingTimeMobile: {
    "@media (max-width: 768px)": {
      fontSize: "0.9rem",
    },
  },

  trainingTypeMobile: {
    "@media (max-width: 768px)": {
      fontSize: "0.85rem",
    },
  },

  trainingDatesMobile: {
    "@media (max-width: 768px)": {
      fontSize: "0.8rem",
    },
  },

  comingSoonMobile: {
    "@media (max-width: 768px)": {
      fontSize: "0.75rem",
    },
  },
});
