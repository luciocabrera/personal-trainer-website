import * as stylex from '@stylexjs/stylex';

const confettiAnimation = stylex.keyframes({
  '0%': {
    opacity: 1,
    transform: 'translateY(-100vh) rotate(0deg)',
  },
  '100%': {
    opacity: 0,
    transform: 'translateY(100vh) rotate(720deg)',
  },
});

export const styles = stylex.create({
  confettiContainer: {
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'fixed',
    zIndex: 9999,
    height: '100%',
    left: 0,
    top: 0,
    width: '100%',
  },
  confettiPiece: (
    color: string,
    delay: string,
    duration: string,
    leftPosition: number,
  ) => ({
    animationDelay: delay,
    animationDuration: duration,
    animationFillMode: 'forwards',
    animationName: confettiAnimation,
    animationTimingFunction: 'linear',
    backgroundColor: color,
    position: 'absolute',
    height: '10px',
    left: `${leftPosition}%`,
    width: '10px',
  }),
});
