import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  html: {
    scrollBehavior: "smooth",
    scrollPaddingTop: "100px",
    overflowX: "hidden",
    // Medium mobile screens (tablets)
    "@media (max-width: 768px) and (min-width: 481px)": {
      scrollPaddingTop: "160px",
    },
    // Small mobile screens (phones)
    "@media (max-width: 480px)": {
      scrollPaddingTop: "120px",
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
