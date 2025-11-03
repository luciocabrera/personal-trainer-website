import * as stylex from "@stylexjs/stylex";

// Only the essential global styles that are missing and not already in components
export const styles = stylex.create({
  // App container - this is needed for the main layout
  app: {
    backgroundColor: "white",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    margin: "0 auto",
    maxWidth: "1200px",
    position: "relative",
    width: "100%",
  },

  // Main content area
  main: {

    display: "flex",

    // Header height + content padding
    flex: 1,

    flexDirection: "column",

    gap: "2rem",

    justifyContent: "center",

    padding: "2rem",

    paddingTop: "calc(80px + 2rem)",
    // Mobile screens - much smaller header
    "@media (max-width: 768px)": {
      padding: "1rem",
      paddingTop: "calc(60px + 1rem)", // Mobile header height + content padding
    },
  },
});
