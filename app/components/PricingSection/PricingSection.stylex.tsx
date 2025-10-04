import * as stylex from "@stylexjs/stylex";

const pulseAnimation = stylex.keyframes({
  "0%": { transform: "scale(1)" },
  "100%": { transform: "scale(1)" },
  "50%": { transform: "scale(1.02)" },
});

export const styles = stylex.create({
  pricing: {
    marginBottom: "2rem",
    padding: "2rem",
    background: "rgba(255, 255, 255, 0.95)",
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 32px rgba(78, 205, 196, 0.2)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },

  pricingTitle: {
    textAlign: "center",
    marginBottom: "1rem",
    background: "linear-gradient(135deg, #ff6b6b, #4ecdc4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    fontSize: "2.2rem",
    fontWeight: "bold",
  },

  pricingImage: {
    textAlign: "center",
    marginBottom: "2rem",
  },

  pricingIconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
    background:
      "linear-gradient(135deg, rgba(255, 149, 0, 0.1), rgba(78, 205, 196, 0.1))",
    borderRadius: "15px",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 149, 0, 0.2)",
    margin: "0 auto",
    maxWidth: "600px",
  },

  pricingIconSvg: {
    animationName: pulseAnimation,
    animationDuration: "3s",
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "infinite",
    willChange: "transform",
  },

  pricingGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
  },

  price: {
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

  priceTitle: {
    marginTop: 0,
    background: "linear-gradient(135deg, #ff9500, #ff6b6b)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    fontWeight: "bold",
  },

  // Mobile responsive styles
  pricingMobile: {
    "@media (max-width: 768px)": {
      padding: "1rem",
    },
  },

  pricingGridMobile: {
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },

  pricingIconContainerMobile: {
    "@media (max-width: 768px)": {
      width: "100%",
      maxWidth: "100%",
      height: "250px",
      margin: 0,
    },
  },

  pricingIconSvgMobile: {
    "@media (max-width: 768px)": {
      width: "90%",
      maxWidth: "300px",
      height: "auto",
    },
  },
});
