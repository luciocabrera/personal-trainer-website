import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  hero: {
    textAlign: "center",
    background: "linear-gradient(135deg, #ff9500, #ff6b6b)",
    color: "white",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    boxShadow: "0 8px 30px rgba(255, 107, 107, 0.4)",
    padding: 0,
    margin: 0,
    gap: 0,
    containerType: "inline-size",
    flexWrap: "wrap",
  },

  heroContent: {
    flex: 1,
    padding: "3rem",
    minWidth: "calc(380px - 6rem)",
  },

  heroImage: {
    flex: 1,
    borderBottomRightRadius: "15px",
    borderTopRightRadius: "15px",
    overflow: "hidden",
    display: "flex",
    maxHeight: 680,
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

  // Mobile responsive styles using container queries
  heroMobile: {
    "@container (max-width: 870px)": {
      flexDirection: "column",
      textAlign: "center",
      alignItems: "stretch",
    },
    // "@media (max-width: 768px)": {
    //   flexDirection: "column",
    //   textAlign: "center",
    //   alignItems: "stretch",
    // },
  },

  heroImageMobile: {
    "@container (max-width: 870px)": {
      borderTopRightRadius: "0px",
      borderTopLeftRadius: "0px",
      borderBottomRightRadius: "15px",
      borderBottomLeftRadius: "15px",
      flex: "0 0 auto",
    },
    // "@media (max-width: 768px)": {
    //   borderTopRightRadius: "0px",
    //   borderTopLeftRadius: "0px",
    //   borderBottomRightRadius: "15px",
    //   borderBottomLeftRadius: "15px",
    //   flex: "0 0 auto",
    // },
  },

  heroTitleMobile: {
    "@container (max-width: 768px)": {
      fontSize: "2rem",
    },
    "@media (max-width: 768px)": {
      fontSize: "2rem",
    },
  },

  heroSubtitleMobile: {
    "@container (max-width: 768px)": {
      fontSize: "1.5rem",
    },
    "@media (max-width: 768px)": {
      fontSize: "1.5rem",
    },
  },

  heroImageImgMobile: {
    "@container (max-width: 870px)": {
      // height: "300px",
      // width: "100%",
      width: "100cqw",
    },
    "@media (max-width: 870px)": {
      // height: "300px",
      // width: "100%",
      maxHeight: 520,
      width: "100cqw",
    },
  },
});
