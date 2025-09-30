import { useRouteError, Link } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError() as Error;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#ff6b6b" }}>
        Oops! Something went wrong
      </h1>

      <p style={{ marginBottom: "2rem", color: "#666" }}>
        {error?.message || "An unexpected error occurred"}
      </p>

      <Link
        to="/"
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "#4ecdc4",
          color: "white",
          textDecoration: "none",
          borderRadius: "8px",
          fontWeight: "500",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#45b7aa")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4ecdc4")}
      >
        Go back home
      </Link>
    </div>
  );
};
