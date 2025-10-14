import { useState, useEffect, useCallback } from "react";
import * as stylex from "@stylexjs/stylex";

const slideIn = stylex.keyframes({
  "0%": {
    transform: "translateY(-100%)",
    opacity: 0,
  },
  "100%": {
    transform: "translateY(0)",
    opacity: 1,
  },
});

const slideOut = stylex.keyframes({
  "0%": {
    transform: "translateY(0)",
    opacity: 1,
  },
  "100%": {
    transform: "translateY(-100%)",
    opacity: 0,
  },
});

const styles = stylex.create({
  messageBox: {
    padding: "1rem 1.5rem",
    borderRadius: "8px",
    marginBottom: "1rem",
    fontSize: "1rem",
    fontWeight: "bold",
    textAlign: "center",
    position: "relative",
    animationDuration: "0.3s",
    animationTimingFunction: "ease-out",
    animationFillMode: "forwards",
  },

  messageBoxSlideIn: {
    animationName: slideIn,
  },

  messageBoxSlideOut: {
    animationName: slideOut,
  },

  successMessage: {
    backgroundColor: "rgba(76, 175, 80, 0.1)",
    color: "#2e7d32",
    border: "1px solid rgba(76, 175, 80, 0.3)",
  },

  errorMessage: {
    backgroundColor: "rgba(244, 67, 54, 0.1)",
    color: "#c62828",
    border: "1px solid rgba(244, 67, 54, 0.3)",
  },

  dismissButton: {
    position: "absolute",
    top: "0.5rem",
    right: "0.75rem",
    background: "none",
    border: "none",
    fontSize: "1.2rem",
    cursor: "pointer",
    color: "inherit",
    opacity: 0.7,
    transition: "opacity 0.2s ease",
    padding: "0.25rem",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "24px",
    height: "24px",

    ":hover": {
      opacity: 1,
      backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
  },
});

interface EnhancedMessageProps {
  message: string;
  type: "success" | "error";
  onDismiss?: () => void;
  autoHide?: boolean;
  autoHideDelay?: number;
}

const EnhancedMessage = ({
  message,
  type,
  onDismiss,
  autoHide = false,
  autoHideDelay = 5000,
}: EnhancedMessageProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const handleDismiss = useCallback(() => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsVisible(false);
      onDismiss?.();
    }, 300); // Match animation duration
  }, [onDismiss]);

  // Auto-hide functionality with useEffect
  useEffect(() => {
    if (autoHide && isVisible) {
      const timer = setTimeout(() => {
        if (isVisible && !isAnimatingOut) {
          handleDismiss();
        }
      }, autoHideDelay);

      return () => clearTimeout(timer);
    }
  }, [autoHide, autoHideDelay, isVisible, isAnimatingOut, handleDismiss]);

  if (!isVisible) return null;

  return (
    <div
      {...stylex.props(
        styles.messageBox,
        isAnimatingOut ? styles.messageBoxSlideOut : styles.messageBoxSlideIn,
        type === "success" ? styles.successMessage : styles.errorMessage
      )}
    >
      {message}
      <button
        type="button"
        onClick={handleDismiss}
        {...stylex.props(styles.dismissButton)}
        aria-label="Dismiss message"
      >
        ×
      </button>
    </div>
  );
};

export default EnhancedMessage;
