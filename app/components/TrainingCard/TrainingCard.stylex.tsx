import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  training: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    background:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(78, 205, 196, 0.1))",
    padding: "1.5rem",
    marginBottom: "1rem",
    borderRadius: "15px",
    boxShadow: "0 5px 25px rgba(78, 205, 196, 0.2)",
    border: "1px solid rgba(78, 205, 196, 0.3)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    ":hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 10px 40px rgba(78, 205, 196, 0.4)",
    },
  },

  trainingImage: {
    width: "100%",
    height: "250px",
    borderRadius: "8px",
    overflow: "hidden",
    background: "#f0f0f0",
    marginBottom: "1rem",
  },

  trainingImageImg: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "8px",
    display: "block",
    backgroundColor: "#f0f0f0",
  },

  trainingTitle: {
    marginTop: 0,
    marginBottom: "0.5rem",
    background: "linear-gradient(135deg, #ff9500, #ff6b6b)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    fontWeight: "bold",
    fontSize: "1.4rem",
    lineHeight: 1.3,
  },

  trainingDescription: {
    fontSize: "1rem",
    color: "#666",
    lineHeight: 1.6,
    margin: 0,
    flexGrow: 1,
  },

  // Mobile responsive styles
  trainingMobile: {
    "@media (max-width: 768px)": {
      padding: "16px",
      gap: "12px",
    },
  },

  trainingImageMobile: {
    "@media (max-width: 768px)": {
      height: "100%",
    },
  },

  trainingImageImgMobile: {
    "@media (max-width: 768px)": {
      height: "100%",
    },
  },

  trainingTitleMobile: {
    "@media (max-width: 768px)": {
      fontSize: "1.25rem",
    },
  },

  trainingDescriptionMobile: {
    "@media (max-width: 768px)": {
      fontSize: "0.9rem",
    },
  },

  // Small mobile styles
  trainingSmallMobile: {
    "@media (max-width: 480px)": {
      padding: "12px",
      gap: "10px",
    },
  },

  trainingImageSmallMobile: {
    "@media (max-width: 480px)": {
      height: "100%",
    },
  },

  trainingImageImgSmallMobile: {
    "@media (max-width: 480px)": {
      height: "100%",
    },
  },

  trainingTitleSmallMobile: {
    "@media (max-width: 480px)": {
      fontSize: "1.1rem",
    },
  },

  trainingDescriptionSmallMobile: {
    "@media (max-width: 480px)": {
      fontSize: "0.85rem",
    },
  },
});
