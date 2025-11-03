import * as stylex from "@stylexjs/stylex";

const confettiAnimation = stylex.keyframes({
  "0%": {
    opacity: 1,
    transform: "translateY(-100vh) rotate(0deg)",
  },
  "100%": {
    opacity: 0,
    transform: "translateY(100vh) rotate(720deg)",
  },
});

const styles = stylex.create({
  confettiContainer: {
    height: "100%",
    left: 0,
    overflow: "hidden",
    pointerEvents: "none",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 9999,
  },
  confettiPiece: {
    animationFillMode: "forwards",
    animationName: confettiAnimation,
    animationTimingFunction: "linear",
    height: "10px",
    position: "absolute",
    width: "10px",
  },
});

interface ConfettiProps {
  isActive: boolean;
}

// Pre-defined confetti pieces to avoid Math.random() in render
const CONFETTI_PIECES = [
  { color: "#ff6b88", delay: "0s", duration: "3s", id: 1, left: 10 },
  { color: "#4ecdc4", delay: "0.2s", duration: "2.5s", id: 2, left: 20 },
  { color: "#45b7d1", delay: "0.4s", duration: "3.2s", id: 3, left: 30 },
  { color: "#96ceb4", delay: "0.1s", duration: "2.8s", id: 4, left: 40 },
  { color: "#feca57", delay: "0.6s", duration: "3.1s", id: 5, left: 50 },
  { color: "#ff9ff3", delay: "0.3s", duration: "2.7s", id: 6, left: 60 },
  { color: "#54a0ff", delay: "0.5s", duration: "3.3s", id: 7, left: 70 },
  { color: "#5f27cd", delay: "0.7s", duration: "2.6s", id: 8, left: 80 },
  { color: "#ff6b88", delay: "0.8s", duration: "3s", id: 9, left: 90 },
  { color: "#4ecdc4", delay: "0.9s", duration: "2.9s", id: 10, left: 15 },
  { color: "#45b7d1", delay: "1s", duration: "3.4s", id: 11, left: 25 },
  { color: "#96ceb4", delay: "0.15s", duration: "2.4s", id: 12, left: 35 },
  { color: "#feca57", delay: "1.1s", duration: "3.5s", id: 13, left: 45 },
  { color: "#ff9ff3", delay: "0.25s", duration: "2.3s", id: 14, left: 55 },
  { color: "#54a0ff", delay: "1.2s", duration: "3.6s", id: 15, left: 65 },
  { color: "#5f27cd", delay: "0.35s", duration: "2.2s", id: 16, left: 75 },
  { color: "#ff6b88", delay: "1.3s", duration: "3.7s", id: 17, left: 85 },
  { color: "#4ecdc4", delay: "0.45s", duration: "2.1s", id: 18, left: 95 },
  { color: "#45b7d1", delay: "1.4s", duration: "3.8s", id: 19, left: 5 },
  { color: "#96ceb4", delay: "0.55s", duration: "2s", id: 20, left: 12 },
];

const Confetti = ({ isActive }: ConfettiProps) => {
  if (!isActive) return null;

  return (
    <div {...stylex.props(styles.confettiContainer)}>
      {CONFETTI_PIECES.map((piece) => (
        <div
          key={piece.id}
          {...stylex.props(styles.confettiPiece)}
          style={{
            animationDelay: piece.delay,
            animationDuration: piece.duration,
            backgroundColor: piece.color,
            left: `${piece.left}%`,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
