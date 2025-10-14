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

const slideInFixed = stylex.keyframes({
  "0%": {
    transform: "scale(0.9)",
    opacity: 0,
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1,
  },
});

const slideOutFixed = stylex.keyframes({
  "0%": {
    transform: "scale(1)",
    opacity: 1,
  },
  "100%": {
    transform: "scale(0.9)",
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
    wordWrap: "break-word",
    overflowWrap: "break-word",
    hyphens: "auto",

    // Mobile responsive base styles
    "@media (max-width: 768px)": {
      textAlign: "left", // Better readability on mobile
      lineHeight: "1.4",
    },

    "@media (max-width: 480px)": {
      fontWeight: "600", // Slightly lighter weight for better mobile readability
      textAlign: "left",
    },
  },

  messageBoxFixed: {
    position: "relative",
    top: "0",
    left: "0",
    transform: "none",
    zIndex: 100,
    maxWidth: "100%",
    width: "100%",
    marginBottom: "2rem",
    marginTop: "0",
    boxShadow: "0 8px 32px rgba(76, 175, 80, 0.3)",
    border: "2px solid rgba(76, 175, 80, 0.6)",
    backgroundColor: "rgba(76, 175, 80, 0.15)",
    fontSize: "1.1rem",
    fontWeight: "600",
    padding: "1.5rem 2rem",

    // Mobile responsive styles
    "@media (max-width: 768px)": {
      fontSize: "1rem",
      padding: "1rem 1.5rem",
      marginBottom: "1.5rem",
      border: "1px solid rgba(76, 175, 80, 0.6)",
      boxShadow: "0 4px 16px rgba(76, 175, 80, 0.3)",
    },

    "@media (max-width: 480px)": {
      fontSize: "0.95rem",
      padding: "0.875rem 1rem",
      marginBottom: "1rem",
      borderRadius: "6px",
    },
  },

  messageBoxSlideIn: {
    animationName: slideIn,
  },

  messageBoxSlideOut: {
    animationName: slideOut,
  },

  messageBoxSlideInFixed: {
    animationName: slideInFixed,
  },

  messageBoxSlideOutFixed: {
    animationName: slideOutFixed,
  },

  successMessage: {
    backgroundColor: "rgba(76, 175, 80, 0.1)",
    color: "#2e7d32",
    border: "1px solid rgba(76, 175, 80, 0.3)",

    // Mobile responsive styles for success messages (when not using messageBoxFixed)
    "@media (max-width: 768px)": {
      fontSize: "0.95rem",
      lineHeight: "1.3",
    },

    "@media (max-width: 480px)": {
      fontSize: "0.9rem",
      lineHeight: "1.25",
    },
  },

  errorMessage: {
    backgroundColor: "rgba(244, 67, 54, 0.1)",
    color: "#c62828",
    border: "1px solid rgba(244, 67, 54, 0.3)",

    // Mobile responsive styles for error messages
    "@media (max-width: 768px)": {
      fontSize: "0.9rem",
      padding: "0.875rem 1rem",
      marginBottom: "1rem",
      border: "1px solid rgba(244, 67, 54, 0.4)",
      backgroundColor: "rgba(244, 67, 54, 0.08)",
      lineHeight: "1.3",
    },

    "@media (max-width: 480px)": {
      fontSize: "0.85rem",
      padding: "0.75rem 0.875rem",
      marginBottom: "0.875rem",
      borderRadius: "6px",
      lineHeight: "1.25",
      maxWidth: "100%",
      wordWrap: "break-word",
    },
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

    // Mobile responsive styles for better touch targets
    "@media (max-width: 768px)": {
      top: "0.5rem",
      right: "0.5rem",
      width: "28px",
      height: "28px",
      fontSize: "1.3rem",
    },

    "@media (max-width: 480px)": {
      top: "0.375rem",
      right: "0.375rem",
      width: "32px",
      height: "32px",
      fontSize: "1.4rem",
    },
  },
});

interface EnhancedMessageProps {
  message: string;
  type: "success" | "error";
  onDismiss?: () => void;
  autoHide?: boolean;
  autoHideDelay?: number;
  showAtTop?: boolean;
}

const EnhancedMessage = ({
  message,
  type,
  onDismiss,
  autoHide = false,
  autoHideDelay = 5000,
  showAtTop = false,
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
        showAtTop && styles.messageBoxFixed,
        // Use different animations for fixed vs regular positioning
        showAtTop ?
          isAnimatingOut ? styles.messageBoxSlideOutFixed
          : styles.messageBoxSlideInFixed
        : isAnimatingOut ? styles.messageBoxSlideOut
        : styles.messageBoxSlideIn,
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
