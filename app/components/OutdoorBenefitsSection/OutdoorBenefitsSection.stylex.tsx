import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  section: {
    padding: "4rem 2rem",
    background: "rgba(255, 255, 255, 0.95)",
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 32px rgba(78, 205, 196, 0.2)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    marginBottom: "2rem",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },

  title: {
    textAlign: "center",
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    background: "linear-gradient(135deg, #4ecdc4, #45b7b8)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  subtitle: {
    textAlign: "center",
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "3rem",
    lineHeight: "1.6",
    maxWidth: "800px",
    margin: "0 auto 3rem",
  },

  content: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "3rem",
    alignItems: "center",
    "@media (max-width: 968px)": {
      gridTemplateColumns: "1fr",
      gap: "2rem",
    },
  },

  imageContainer: {
    position: "relative",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
    "@media (max-width: 968px)": {
      order: 1,
    },
  },

  image: {
    width: "100%",
    height: "auto",
    display: "block",
    borderRadius: "15px",
    transition: "transform 0.3s ease",
    ":hover": {
      transform: "scale(1.02)",
    },
  },

  benefitsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "1.5rem",
    "@media (max-width: 968px)": {
      order: 2,
    },
  },

  benefitCard: {
    background: "linear-gradient(135deg, rgba(78, 205, 196, 0.1), rgba(255, 107, 107, 0.1))",
    borderRadius: "12px",
    padding: "1.5rem",
    border: "1px solid rgba(78, 205, 196, 0.2)",
    transition: "all 0.3s ease",
    ":hover": {
      transform: "translateX(5px)",
      boxShadow: "0 4px 15px rgba(78, 205, 196, 0.2)",
      borderColor: "rgba(78, 205, 196, 0.4)",
    },
  },

  benefitIcon: {
    fontSize: "2.5rem",
    marginBottom: "0.5rem",
  },

  benefitTitle: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "0.5rem",
    background: "linear-gradient(135deg, #ff6b6b, #4ecdc4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  benefitDescription: {
    fontSize: "1rem",
    color: "#666",
    lineHeight: "1.6",
    margin: 0,
  },
});
