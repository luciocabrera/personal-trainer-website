import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  hero: {
    textAlign: "center",
    background: "linear-gradient(135deg, #ff9500, #ff6b6b)",
    color: "white",
    padding: "3rem 2rem",
    marginBottom: "2rem",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    boxShadow: "0 8px 30px rgba(255, 107, 107, 0.4)",
  },

  heroContent: {
    flex: 1,
  },

  heroImage: {
    flex: 1,
  },

  heroImageImg: {
    width: "100%",
    // height: "300px",
    objectFit: "cover",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
  },

  heroTitle: {
    fontSize: "2.5rem",
    margin: 0,
  },

  heroSubtitle: {
    fontSize: "2rem",
    margin: "0.5rem 0",
  },

  heroParagraph: {
    fontSize: "1.2rem",
    margin: "1rem 0",
  },

  // Mobile responsive styles
  heroMobile: {
    "@media (max-width: 768px)": {
      flexDirection: "column",
      textAlign: "center",
    },
  },

  heroTitleMobile: {
    "@media (max-width: 768px)": {
      fontSize: "2rem",
    },
  },

  heroSubtitleMobile: {
    "@media (max-width: 768px)": {
      fontSize: "1.5rem",
    },
  },

  heroImageImgMobile: {
    "@media (max-width: 768px)": {
      // height: "200px",
      width: "100%",
    },
  },
});
