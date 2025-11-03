import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  benefitCard: {
    background:
      "linear-gradient(135deg, rgba(78, 205, 196, 0.1), rgba(255, 107, 107, 0.1))",
    border: "1px solid rgba(78, 205, 196, 0.2)",
    borderRadius: "12px",
    ":hover": {
      transform: "translateX(5px)",
      boxShadow: "0 4px 15px rgba(78, 205, 196, 0.2)",
      borderColor: "rgba(78, 205, 196, 0.4)",
    },
    padding: "1.5rem",
    transition: "all 0.3s ease",
  },

  benefitIcon: {
    fontSize: "2.5rem",
    marginBottom: "0.5rem",
  },

  container: {
    margin: "0 auto",
    maxWidth: "1200px",
  },

  benefitDescription: {
    color: "#666",
    fontSize: "1rem",
    lineHeight: "1.6",
    margin: 0,
  },

  content: {
    "@media (max-width: 968px)": {
      gridTemplateColumns: "1fr",
      gap: "2rem",
    },
    display: "grid",
    alignItems: "center",
    gap: "3rem",
    gridTemplateColumns: "1fr 1fr",
  },

  benefitTitle: {
    color: "#333",
    background: "linear-gradient(135deg, #ff6b6b, #4ecdc4)",
    fontSize: "1.3rem",
    WebkitBackgroundClip: "text",
    fontWeight: "bold",
    WebkitTextFillColor: "transparent",
    marginBottom: "0.5rem",
    backgroundClip: "text",
  },

  image: {
    height: "auto",
    borderRadius: "15px",
    width: "100%",
    ":hover": {
      transform: "scale(1.02)",
    },
    display: "block",
    transition: "transform 0.3s ease",
  },

  benefitsGrid: {
    display: "grid",
    gap: "1.5rem",
    "@media (max-width: 968px)": {
      order: 2,
    },
    gridTemplateColumns: "1fr",
  },

  section: {
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    padding: "0 2rem 2rem 2rem",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "20px",
    boxShadow: "0 8px 32px rgba(78, 205, 196, 0.2)",
    marginBottom: "2rem",
  },

  imageContainer: {
    borderRadius: "15px",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
    position: "relative",
    "@media (max-width: 968px)": {
      order: 1,
    },
    overflow: "hidden",
  },

  subtitle: {
    fontSize: "1.2rem",
    textAlign: "center",
    color: "#555",
    lineHeight: "1.6",
    marginBottom: "3rem",
    margin: "0 auto 3rem",
    maxWidth: "800px",
  },

  title: {
    margin: "0 -2rem 2rem -2rem",
    textAlign: "center",
    background: `
      linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 50%, rgba(255, 107, 107, 0.9) 100%),
      url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Cpath d='M20 20h10v10H20zM40 40h10v10H40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
    `,
    padding: "2rem",
    backgroundRepeat: "no-repeat, repeat",
    backgroundSize: "cover, 60px 60px",
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
  },
});
