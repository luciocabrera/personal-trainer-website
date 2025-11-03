import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  locationCard: {
    ":hover": {
      boxShadow: "0 12px 40px rgba(78, 205, 196, 0.4)",
      transform: "translateY(-5px)",
      willChange: "transform",
      zIndex: 1,
    },
    background:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(78, 205, 196, 0.1))",
    border: "1px solid rgba(78, 205, 196, 0.3)",
    borderRadius: "15px",
    boxShadow: "0 8px 30px rgba(78, 205, 196, 0.2)",
    display: "flex",
    flexDirection: "column",
    minHeight: "400px",
    padding: "1.5rem",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },

  comingSoon: {
    color: "#e91e63",
    background: "rgba(233, 30, 99, 0.1)",
    fontWeight: "bold",
    borderRadius: "15px",
    padding: "0.2rem 0.8rem",
    display: "inline-block",
    fontSize: "0.8rem",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
  },

  locationCardParagraph: {
    color: "#666",
    fontSize: "0.9rem",
    margin: "0 0 1rem 0",
  },

  locationCardTitle: {
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    background: "linear-gradient(135deg, #ff9500, #ff6b6b)",
    backgroundClip: "text",
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: "0 0 0.5rem 0",
  },

  locationDetails: {
    flexGrow: 1,
    margin: "1rem 0",
  },

  locationDetailsDiv: {
    fontSize: "0.9rem",
    lineHeight: 1.4,
    margin: "0.5rem 0",
  },

  // Mobile responsive styles
locationDetailsDivMobile: {
    "@media (max-width: 768px)": {
      fontSize: "0.85rem",
    },
  },

  
mapContainer: {
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    marginTop: "1rem",
    overflow: "hidden",
  },

  
mapIframe: {
    border: 0,
    borderRadius: "8px",
  },

  
comingSoonMobile: {
    "@media (max-width: 768px)": {
      fontSize: "0.75rem",
    },
  },

  
trainingCapacity: {
    color: "#ff9500",
    fontWeight: 500,
  },

  
trainingDates: {
    color: "#9c27b0",
    fontSize: "0.85rem",
    background: "rgba(156, 39, 176, 0.1)",
    fontWeight: 500,
    borderRadius: "12px",
    display: "inline-block",
    padding: "0.3rem 0.6rem",
    marginTop: "0.3rem",
  },

  
trainingDatesMobile: {
    "@media (max-width: 768px)": {
      fontSize: "0.8rem",
    },
  },

  
  trainingLocation: {
    color: "#666",
    fontStyle: "italic",
  },

  trainingTime: {
    color: "#ff6b6b",
    fontSize: "1rem",
    fontWeight: "bold",
  },

  trainingTimeMobile: {
    "@media (max-width: 768px)": {
      fontSize: "0.9rem",
    },
  },

  trainingType: {
    color: "#4ecdc4",
    fontWeight: 600,
    fontSize: "0.95rem",
  },

  trainingTypeMobile: {
    "@media (max-width: 768px)": {
      fontSize: "0.85rem",
    },
  },
});
