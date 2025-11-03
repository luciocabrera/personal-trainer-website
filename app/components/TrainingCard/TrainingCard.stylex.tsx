import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  training: {
    background:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(78, 205, 196, 0.1))",
    border: "1px solid rgba(78, 205, 196, 0.3)",
    borderRadius: "15px",

    boxShadow: "0 5px 25px rgba(78, 205, 196, 0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    marginBottom: "1rem",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    ":hover": {
      boxShadow: "0 10px 40px rgba(78, 205, 196, 0.4)",
      transform: "translateY(-5px)",
    },
  },
  trainingBody: { padding: "1.5rem" },

  trainingDescription: {
    color: "#666",
    flexGrow: 1,
    fontSize: "1rem",
    lineHeight: 1.6,
    margin: 0,
  },

  trainingDescriptionMobile: {
    "@media (max-width: 768px)": {
      fontSize: "0.9rem",
    },
  },

  trainingDescriptionSmallMobile: {
    "@media (max-width: 480px)": {
      fontSize: "0.85rem",
    },
  },

  trainingImage: {
    background: "#f0f0f0",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    height: "250px",
    marginBottom: "1rem",
    overflow: "hidden",
    width: "100%",
  },

  
  trainingImageImg: {
    backgroundColor: "#f0f0f0",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    display: "block",
    height: "250px",
    objectFit: "cover",
    width: "100%",
  },

  
trainingImageImgMobile: {
    "@media (max-width: 768px)": {
      height: "100%",
    },
  },

  
trainingImageImgSmallMobile: {
    "@media (max-width: 480px)": {
      height: "100%",
    },
  },

  
trainingImageMobile: {
    "@media (max-width: 768px)": {
      height: "100%",
    },
  },

  
trainingImageSmallMobile: {
    "@media (max-width: 480px)": {
      height: "100%",
    },
  },

  
  
// Mobile responsive styles
trainingMobile: {
    "@media (max-width: 768px)": {
      // padding: "16px",
      gap: "12px",
    },
  },

  

// Small mobile styles
trainingSmallMobile: {
    "@media (max-width: 480px)": {
      // padding: "12px",
      gap: "10px",
    },
  },

  

trainingTitle: {
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    background: "linear-gradient(135deg, #ff9500, #ff6b6b)",
    backgroundClip: "text",
    fontSize: "1.4rem",
    fontWeight: "bold",
    lineHeight: 1.3,
    marginBottom: "0.5rem",
    marginTop: 0,
  },

  
trainingTitleMobile: {
    "@media (max-width: 768px)": {
      fontSize: "1.25rem",
    },
  },

  trainingTitleSmallMobile: {
    "@media (max-width: 480px)": {
      fontSize: "1.1rem",
    },
  },
});
