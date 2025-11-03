import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  hero: {
    alignItems: "center",
    background: "linear-gradient(135deg, #ff9500, #ff6b6b)",
    borderRadius: "15px",
    boxShadow: "0 8px 30px rgba(255, 107, 107, 0.4)",
    color: "white",
    containerType: "inline-size",
    display: "flex",
    flexWrap: "wrap",
    gap: 0,
    margin: 0,
    textAlign: "center",
    padding: 0,
  },

  heroContent: {
    flex: 1,
    padding: "3rem",
    // minWidth: "calc(380px - 6rem)",
  },

  heroImage: {
    borderBottomRightRadius: "15px",
    borderTopRightRadius: "15px",
    display: "flex",
    flex: 1,
    maxHeight: 680,
    overflow: "hidden",
  },

  heroImageImg: {
    display: "block",
    height: "100%",
    objectFit: "cover",
    width: "100%",
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

  

heroImageMobile: {
    "@container (max-width: 870px)": {
      borderBottomLeftRadius: "15px",
      borderBottomRightRadius: "15px",
      borderTopLeftRadius: "0px",
      borderTopRightRadius: "0px",
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

  
// Mobile responsive styles using container queries
heroMobile: {
    "@container (max-width: 870px)": {
      alignItems: "stretch",
      flexDirection: "column",
      textAlign: "center",
    },
    // "@media (max-width: 768px)": {
    //   flexDirection: "column",
    //   textAlign: "center",
    //   alignItems: "stretch",
    // },
  },

  
  heroParagraph: {
    fontSize: "1.2rem",
    margin: "1rem 0",
  },

  heroSubtitle: {
    fontSize: "2rem",
    margin: "0.5rem 0",
  },

  heroSubtitleMobile: {
    "@container (max-width: 768px)": {
      fontSize: "1.5rem",
    },
    "@media (max-width: 768px)": {
      fontSize: "1.5rem",
    },
  },

  heroTitle: {
    fontSize: "2.5rem",
    margin: 0,
  },

  heroTitleMobile: {
    "@container (max-width: 768px)": {
      fontSize: "2rem",
    },
    "@media (max-width: 768px)": {
      fontSize: "2rem",
    },
  },
});
