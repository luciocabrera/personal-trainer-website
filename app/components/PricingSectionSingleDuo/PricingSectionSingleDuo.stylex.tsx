import * as stylex from "@stylexjs/stylex";

const pulseAnimation = stylex.keyframes({
  "0%": { transform: "scale(1)" },
  "100%": { transform: "scale(1)" },
  "50%": { transform: "scale(1.02)" },
});

export const styles = stylex.create({
  disclaimer: {
    background: "rgba(255, 107, 107, 0.1)",
    border: "1px solid rgba(255, 107, 107, 0.2)",
    borderRadius: "8px",
    color: "#ff6b6b",
    fontSize: "1.1rem",
    fontWeight: "600",
    marginBottom: "0",
    padding: "1rem",
    textAlign: "center",
  },
  price: {
    background:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(78, 205, 196, 0.1))",
    borderRadius: "15px",
    border: "1px solid rgba(78, 205, 196, 0.3)",
    marginBottom: "1rem",
    boxShadow: "0 5px 25px rgba(78, 205, 196, 0.2)",
    padding: "1.5rem",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    // ":hover": {
    //   transform: "translateY(-5px)",
    //   boxShadow: "0 10px 40px rgba(78, 205, 196, 0.4)",
    // },
  },

  priceTitle: {
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    background: "linear-gradient(135deg, #ff9500, #ff6b6b)",
    backgroundClip: "text",
    marginTop: 0,
    fontWeight: "bold",
  },

  pricing: {
    // padding: 0,
    // margin: 0,
    // background: "rgba(255, 255, 255, 0.95)",
    // borderRadius: "20px",
    // backdropFilter: "blur(10px)",
    // boxShadow: "0 8px 32px rgba(78, 205, 196, 0.2)",
    // border: "1px solid rgba(255, 255, 255, 0.3)",
    // gap: 0,
  },

  pricingGrid: {
    display: "grid",
    gap: "1.5rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    padding: "2rem",
  },

  // Mobile responsive styles
// pricingMobile: {
//   "@media (max-width: 768px)": {
//     padding: "1rem",
//   },
// },
pricingGridMobile: {
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },

  





pricingIconContainer: {
    alignItems: "center",
    backdropFilter: "blur(10px)",
    background:
      "linear-gradient(135deg, rgba(255, 149, 0, 0.1), rgba(78, 205, 196, 0.1))",
    display: "flex",
    border: "1px solid rgba(255, 149, 0, 0.2)",
    justifyContent: "center",
    height: "250px",
    margin: "0 auto",
    maxWidth: "100%",
    width: "100%",
  },

  





pricingIconContainerMobile: {
    "@media (max-width: 768px)": {
      height: "250px",
      margin: 0,
      maxWidth: "100%",
      width: "100%",
    },
  },

  





pricingIconSvg: {
    animationDuration: "3s",
    animationIterationCount: "infinite",
    animationName: pulseAnimation,
    animationTimingFunction: "ease-in-out",
    willChange: "transform",
  },

  
  
  
  
  
  

  pricingIconSvgMobile: {
    "@media (max-width: 768px)": {
      height: "auto",
      maxWidth: "300px",
      width: "90%",
    },
  },

  pricingImage: {
    textAlign: "center",
  },

  pricingTitle: {
    padding: "2rem",
    textAlign: "center",
    background: `
      linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 50%, rgba(255, 107, 107, 0.9) 100%),
      url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M40 10c16.569 0 30 13.431 30 30s-13.431 30-30 30S10 56.569 10 40 23.431 10 40 10zm0 4c-14.359 0-26 11.641-26 26s11.641 26 26 26 26-11.641 26-26S54.359 14 40 14z'/%3E%3Cpath d='M30 30h20v20H30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
    `,
    backgroundRepeat: "no-repeat, repeat",
    backgroundSize: "cover, 80px 80px",
    borderRadius: "20px 20px 0 0",
    color: "white",
    fontSize: "2.2rem",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
    fontWeight: "bold",
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
    position: "relative",
    margin: 0,
  },
});
