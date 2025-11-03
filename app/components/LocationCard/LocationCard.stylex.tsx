import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  comingSoon: {
    background: "rgba(233, 30, 99, 0.1)",
    borderRadius: "15px",
    color: "#e91e63",
    display: "inline-block",
    fontSize: "0.8rem",
    fontWeight: "bold",
    letterSpacing: "0.5px",
    padding: "0.2rem 0.8rem",
    textTransform: "uppercase",
  },

  comingSoonMobile: {
    fontSize: {
      default: null,
      "@media (max-width: 768px)": "0.75rem",
    },
  },

  locationCard: {
    background:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(78, 205, 196, 0.1))",
    borderColor: "rgba(78, 205, 196, 0.3)",
    borderRadius: "15px",
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow: {
      default: "0 8px 30px rgba(78, 205, 196, 0.2)",
      ":hover": "0 12px 40px rgba(78, 205, 196, 0.4)",
    },
    display: "flex",
    flexDirection: "column",
    minHeight: "400px",
    padding: "1.5rem",
    transform: {
      default: null,
      ":hover": "translateY(-5px)",
    },
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    willChange: {
      default: null,
      ":hover": "transform",
    },
    zIndex: {
      default: null,
      ":hover": 1,
    },
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
    fontSize: {
      default: null,
      "@media (max-width: 768px)": "0.85rem",
    },
  },

  
mapContainer: {
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    marginTop: "1rem",
    overflow: "hidden",
  },

  
mapIframe: {
    borderColor: "transparent",
    borderRadius: "8px",
    borderStyle: "none",
    borderWidth: 0,
  },

  
trainingCapacity: {
    color: "#ff9500",
    fontWeight: 500,
  },

  
trainingDates: {
    background: "rgba(156, 39, 176, 0.1)",
    borderRadius: "12px",
    color: "#9c27b0",
    display: "inline-block",
    fontSize: "0.85rem",
    fontWeight: 500,
    marginTop: "0.3rem",
    padding: "0.3rem 0.6rem",
  },

  
trainingDatesMobile: {
    fontSize: {
      default: null,
      "@media (max-width: 768px)": "0.8rem",
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
    fontSize: {
      default: null,
      "@media (max-width: 768px)": "0.9rem",
    },
  },

  trainingType: {
    color: "#4ecdc4",
    fontSize: "0.95rem",
    fontWeight: 600,
  },

  trainingTypeMobile: {
    fontSize: {
      default: null,
      "@media (max-width: 768px)": "0.85rem",
    },
  },
});
