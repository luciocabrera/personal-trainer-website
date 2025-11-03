import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  body: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#333",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Arial, sans-serif",
    margin: 0,
    minHeight: "100vh",
    overflowX: "hidden",
    padding: 0,
  },
  html: {
    // Mobile screens
"@media (max-width: 768px)": {
      scrollPaddingTop: "80px",
    },
    
overflowX: "hidden",
    
scrollBehavior: "smooth",
    
    scrollPaddingTop: "100px",
  },
});
