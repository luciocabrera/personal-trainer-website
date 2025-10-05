import * as stylex from "@stylexjs/stylex";

// Only the essential global styles that are missing and not already in components
export const styles = stylex.create({
  html: {
    scrollBehavior: "smooth",
    scrollPaddingTop: "100px",
    overflowX: "hidden",
    "@media (max-width: 768px)": {
      scrollPaddingTop: "180px",
    },
  },

  body: {
    margin: 0,
    padding: 0,
    overflowX: "hidden",
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#333",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
});
