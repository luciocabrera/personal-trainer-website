import * as stylex from "@stylexjs/stylex";

const pulseAnimation = stylex.keyframes({
  "0%": { transform: "scale(1)" },
  "100%": { transform: "scale(1)" },
  "50%": { transform: "scale(1.02)" },
});

export const styles = stylex.create({
  pricing: {
    padding: 0,
    margin: 0,
    background: "rgba(255, 255, 255, 0.95)",
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 32px rgba(78, 205, 196, 0.2)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    gap: 0,
  },

  pricingTitle: {
    textAlign: "center",
    padding: "2rem",
    background: `
      linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 50%, rgba(255, 107, 107, 0.9) 100%),
      url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M40 10c16.569 0 30 13.431 30 30s-13.431 30-30 30S10 56.569 10 40 23.431 10 40 10zm0 4c-14.359 0-26 11.641-26 26s11.641 26 26 26 26-11.641 26-26S54.359 14 40 14z'/%3E%3Cpath d='M30 30h20v20H30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
    `,
    backgroundSize: "cover, 80px 80px",
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

  pricingImage: {
    textAlign: "center",
  },

  pricingIconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(135deg, rgba(255, 149, 0, 0.1), rgba(78, 205, 196, 0.1))",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 149, 0, 0.2)",
    margin: "0 auto",
    width: "100%",
    maxWidth: "100%",
    height: "250px",
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
    padding: "2rem",
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
