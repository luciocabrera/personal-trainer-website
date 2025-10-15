import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  section: {
    padding: "0 2rem 2rem 2rem",
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
    margin: "0 -2rem 2rem -2rem",
    padding: "2rem",
    background: `
      linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 50%, rgba(255, 107, 107, 0.9) 100%),
      url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Cpath d='M20 20h10v10H20zM40 40h10v10H40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
    `,
    backgroundSize: "cover, 60px 60px",
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
    background:
      "linear-gradient(135deg, rgba(78, 205, 196, 0.1), rgba(255, 107, 107, 0.1))",
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
