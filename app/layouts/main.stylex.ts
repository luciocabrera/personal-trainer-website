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
    // Medium mobile screens (tablets)
    "@media (max-width: 768px) and (min-width: 481px)": {
      padding: "1rem",
      paddingTop: "calc(140px + 1rem)", // Medium mobile header height + content padding
    },
    // Small mobile screens (phones) - much less padding needed
    "@media (max-width: 480px)": {
      padding: "1rem",
      paddingTop: "calc(100px + 1rem)", // Small mobile header height + content padding
    },
  },
});
