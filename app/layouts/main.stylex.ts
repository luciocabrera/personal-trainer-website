import * as stylex from "@stylexjs/stylex";

// Only the essential global styles that are missing and not already in components
export const styles = stylex.create({
  // App container - this is needed for the main layout
  app: {
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto",
    backgroundColor: "white",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    position: "relative",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },

  // Main content area
  main: {
    padding: "2rem",
    paddingTop: "calc(80px + 2rem)", // Header height + content padding
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // Mobile screens - much smaller header
    "@media (max-width: 768px)": {
      padding: "1rem",
      paddingTop: "calc(60px + 1rem)", // Mobile header height + content padding
    },
  },
});
