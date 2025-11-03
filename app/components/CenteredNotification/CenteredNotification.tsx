import { useCallback,useEffect, useState } from "react";
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
  errorMessage: {
    color: "#c62828",
  },

  closeButton: {
    background: "linear-gradient(135deg, #ff6b6b, #4ecdc4)",
    border: "none",
    borderRadius: "25px",
    color: "white",
    fontSize: "1rem",
    fontWeight: "bold",
    padding: "0.8rem 1.5rem",
    letterSpacing: "1px",
    cursor: "pointer",
    textTransform: "uppercase",
    minWidth: "100px",
    ":hover": {
      background: "linear-gradient(135deg, #ff5252, #26a69a)",
      transform: "translateY(-2px)",
      boxShadow: "0 8px 25px rgba(255, 107, 107, 0.6)",
    },
    transition: "all 0.3s ease",

    ":active": {
      transform: "translateY(0)",
    },

    boxShadow: "0 4px 15px rgba(255, 107, 107, 0.4)",

    "@media (max-width: 480px)": {
      fontSize: "0.9rem",
      letterSpacing: "0.5px",
      padding: "0.7rem 1.25rem",
      minWidth: "80px",
    },
  },

  errorNotification: {
    backgroundColor: "rgba(244, 67, 54, 0.25)",
    borderColor: "rgba(244, 67, 54, 1)",
  },

  dismissButton: {
    position: "absolute",
    right: "0.75rem",
    background: "none",
    top: "0.75rem",
    border: "none",
    cursor: "pointer",
    color: "#666",
    fontSize: "1.5rem",
    opacity: 0.7,
    padding: "0.25rem",
    borderRadius: "50%",
    transition: "all 0.2s ease",
    alignItems: "center",
    display: "flex",
    height: "32px",
    justifyContent: "center",
    ":hover": {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      opacity: 1,
      transform: "rotate(90deg)",
    },

    width: "32px",

    "@media (max-width: 480px)": {
      right: "0.5rem",
      height: "28px",
      top: "0.5rem",
      fontSize: "1.3rem",
      width: "28px",
    },
  },
  message: {
    fontSize: "1.1rem",
    fontWeight: "600",
    lineHeight: "1.5",
    "@media (max-width: 480px)": {
      fontSize: "0.95rem",
      margin: "0 0 1rem 0",
    },

    margin: "0 0 1.5rem 0",

    "@media (max-width: 768px)": {
      fontSize: "1rem",
      margin: "0 0 1.25rem 0",
    },
  },

  errorCloseButton: {
    ":hover": {
      background: "linear-gradient(135deg, #d32f2f, #ff5252)",
      boxShadow: "0 8px 25px rgba(244, 67, 54, 0.6)",
    },
    background: "linear-gradient(135deg, #f44336, #ff6b6b)",

    boxShadow: "0 4px 15px rgba(244, 67, 54, 0.4)",
  },

  notification: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "2rem",
    maxWidth: "500px",
    width: "100%",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    border: "3px solid rgba(76, 175, 80, 0.6)",
    position: "relative",
    boxSizing: "border-box",
    "@media (max-width: 768px)": {
      padding: "1.5rem",
      maxWidth: "95vw",
      borderRadius: "10px",
    },

    wordWrap: "break-word",

    "@media (max-width: 480px)": {
      maxWidth: "98vw",
      padding: "1.25rem",
      borderRadius: "8px",
    },
  },

  overlay: {
    left: 0,
    bottom: 0,
    position: "fixed",
    height: "100%",
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    right: 0,
    alignItems: "center",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    animationDuration: "0.3s",
    padding: "1rem",
    animationFillMode: "forwards",
    zIndex: 9999,
    "@media (max-width: 768px)": {
      padding: "0.75rem",
    },
    "@media (max-width: 480px)": {
      padding: "0.5rem",
    },

    animationTimingFunction: "ease-out",

    boxSizing: "border-box",
  },

  overlayFadeIn: {
    animationName: fadeIn,
  },

  overlayFadeOut: {
    animationName: fadeOut,
  },

  successMessage: {
    color: "#2e7d32",
  },

  successNotification: {
    backgroundColor: "rgba(245, 247, 248, 1)",
    borderColor: "rgba(76, 175, 80, 1)",
  },
});

interface CenteredNotificationProps {
  autoHide?: boolean;
  autoHideDelay?: number;
  isVisible: boolean;
  message: string;
  onClose: () => void;
  type: "error" | "success";
}

const CenteredNotification = ({
  autoHide = true,
  autoHideDelay = 10000,
  isVisible,
  message,
  onClose,
  type,
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
