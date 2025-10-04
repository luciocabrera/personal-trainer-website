import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  trainings: {
    marginBottom: "2rem",
    padding: "2rem",
    background: "rgba(255, 255, 255, 0.95)",
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 32px rgba(78, 205, 196, 0.2)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },

  trainingsTitle: {
    textAlign: "center",
    marginBottom: "1rem",
    background: "linear-gradient(135deg, #ff6b6b, #4ecdc4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    fontSize: "2.2rem",
    fontWeight: "bold",
  },

  trainingsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
  },

  // Mobile responsive styles
  trainingsMobile: {
    "@media (max-width: 768px)": {
      padding: "1rem",
    },
  },

  trainingsGridMobile: {
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
});
