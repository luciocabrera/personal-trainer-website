import { useState, useEffect, useCallback } from "react";
import * as stylex from "@stylexjs/stylex";

const fadeIn = stylex.keyframes({
  "0%": {
    opacity: 0,
    transform: "scale(0.9)",
  },
  "100%": {
    opacity: 1,
    transform: "scale(1)",
  },
});

const fadeOut = stylex.keyframes({
  "0%": {
    opacity: 1,
    transform: "scale(1)",
  },
  "100%": {
    opacity: 0,
    transform: "scale(0.9)",
  },
});

const styles = stylex.create({
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    padding: "1rem",
    animationDuration: "0.3s",
    animationTimingFunction: "ease-out",
    animationFillMode: "forwards",
    boxSizing: "border-box",

    "@media (max-width: 768px)": {
      padding: "0.75rem",
    },

    "@media (max-width: 480px)": {
      padding: "0.5rem",
    },
  },

  overlayFadeIn: {
    animationName: fadeIn,
  },

  overlayFadeOut: {
    animationName: fadeOut,
  },

  notification: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "2rem",
    width: "100%",
    maxWidth: "500px",
    textAlign: "center",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
    position: "relative",
    border: "3px solid rgba(76, 175, 80, 0.6)",
    boxSizing: "border-box",
    wordWrap: "break-word",

    "@media (max-width: 768px)": {
      padding: "1.5rem",
      maxWidth: "95vw",
      borderRadius: "10px",
    },

    "@media (max-width: 480px)": {
      padding: "1.25rem",
      maxWidth: "98vw",
      borderRadius: "8px",
    },
  },
  successNotification: {
    backgroundColor: "rgba(76, 175, 80, 0.25)",
    borderColor: "rgba(76, 175, 80, 1)",
  },

  errorNotification: {
    backgroundColor: "rgba(244, 67, 54, 0.25)",
    borderColor: "rgba(244, 67, 54, 1)",
  },

  message: {
    fontSize: "1.1rem",
    lineHeight: "1.5",
    margin: "0 0 1.5rem 0",
    fontWeight: "600",

    "@media (max-width: 768px)": {
      fontSize: "1rem",
      margin: "0 0 1.25rem 0",
    },

    "@media (max-width: 480px)": {
      fontSize: "0.95rem",
      margin: "0 0 1rem 0",
    },
  },

  successMessage: {
    color: "#2e7d32",
  },

  errorMessage: {
    color: "#c62828",
  },

  closeButton: {
    background: "linear-gradient(135deg, #ff6b6b, #4ecdc4)",
    color: "white",
    border: "none",
    borderRadius: "25px",
    padding: "0.8rem 1.5rem",
    fontSize: "1rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    minWidth: "100px",
    boxShadow: "0 4px 15px rgba(255, 107, 107, 0.4)",

    ":hover": {
      background: "linear-gradient(135deg, #ff5252, #26a69a)",
      transform: "translateY(-2px)",
      boxShadow: "0 8px 25px rgba(255, 107, 107, 0.6)",
    },

    ":active": {
      transform: "translateY(0)",
    },

    "@media (max-width: 480px)": {
      padding: "0.7rem 1.25rem",
      fontSize: "0.9rem",
      minWidth: "80px",
      letterSpacing: "0.5px",
    },
  },

  errorCloseButton: {
    background: "linear-gradient(135deg, #f44336, #ff6b6b)",
    boxShadow: "0 4px 15px rgba(244, 67, 54, 0.4)",

    ":hover": {
      background: "linear-gradient(135deg, #d32f2f, #ff5252)",
      boxShadow: "0 8px 25px rgba(244, 67, 54, 0.6)",
    },
  },

  dismissButton: {
    position: "absolute",
    top: "0.75rem",
    right: "0.75rem",
    background: "none",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "#666",
    opacity: 0.7,
    transition: "all 0.2s ease",
    padding: "0.25rem",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "32px",
    height: "32px",

    ":hover": {
      opacity: 1,
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      transform: "rotate(90deg)",
    },

    "@media (max-width: 480px)": {
      top: "0.5rem",
      right: "0.5rem",
      width: "28px",
      height: "28px",
      fontSize: "1.3rem",
    },
  },
});

interface CenteredNotificationProps {
  message: string;
  type: "success" | "error";
  isVisible: boolean;
  onClose: () => void;
  autoHide?: boolean;
  autoHideDelay?: number;
}

const CenteredNotification = ({
  message,
  type,
  isVisible,
  onClose,
  autoHide = true,
  autoHideDelay = 10000,
}: CenteredNotificationProps) => {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const handleClose = useCallback(() => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      onClose();
      setIsAnimatingOut(false);
    }, 300); // Match animation duration
  }, [onClose]);

  // Auto-hide functionality
  useEffect(() => {
    if (autoHide && isVisible && !isAnimatingOut) {
      const timer = setTimeout(() => {
        handleClose();
      }, autoHideDelay);

      return () => clearTimeout(timer);
    }
  }, [autoHide, autoHideDelay, isVisible, isAnimatingOut, handleClose]);

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    if (isVisible) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isVisible, handleClose]);

  if (!isVisible) return null;

  return (
    <div
      {...stylex.props(
        styles.overlay,
        isAnimatingOut ? styles.overlayFadeOut : styles.overlayFadeIn
      )}
      onClick={handleClose}
    >
      <div
        {...stylex.props(
          styles.notification,
          type === "success" ?
            styles.successNotification
          : styles.errorNotification
        )}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <button
          type="button"
          onClick={handleClose}
          {...stylex.props(styles.dismissButton)}
          aria-label="Close notification"
        >
          ×
        </button>

        <div
          {...stylex.props(
            styles.message,
            type === "success" ? styles.successMessage : styles.errorMessage
          )}
        >
          {message}
        </div>

        <button
          type="button"
          onClick={handleClose}
          {...stylex.props(
            styles.closeButton,
            type === "error" && styles.errorCloseButton
          )}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default CenteredNotification;
