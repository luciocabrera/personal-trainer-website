import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  hero: {
    textAlign: "center",
    background: "linear-gradient(135deg, #ff9500, #ff6b6b)",
    color: "white",
    // padding: "3rem 2rem",
    // marginBottom: "2rem",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    // gap: "2rem",
    boxShadow: "0 8px 30px rgba(255, 107, 107, 0.4)",
    padding: 0,
    margin: 0,
    gap: 0,
  },

  heroContent: {
    flex: 1,
    padding: "3rem",
  },

  heroImage: {
    flex: 1,
    borderBottomRightRadius: "15px",
    borderTopRightRadius: "15px",
    overflow: "hidden",
    display: "flex",
  },

  heroImageImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
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
      alignItems: "stretch",
    },
  },

  heroImageMobile: {
    "@media (max-width: 768px)": {
      borderTopRightRadius: "0px",
      borderTopLeftRadius: "0px",
      borderBottomRightRadius: "15px",
      borderBottomLeftRadius: "15px",
      flex: "0 0 auto",
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
      height: "250px",
      width: "100%",
    },
  },
});
