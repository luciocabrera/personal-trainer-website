import * as stylex from '@stylexjs/stylex';

import type { ConfettiProps } from './Confetti.types';

import { CONFETTI_PIECES } from './Confetti.constants';
import { styles } from './Confetti.stylex';

const Confetti = ({ isActive }: ConfettiProps) => {
  if (!isActive) return;

  return (
    <div {...stylex.props(styles.confettiContainer)}>
      {CONFETTI_PIECES.map((piece) => (
        <div
          key={piece.id}
          {...stylex.props(
            styles.confettiPiece(
              piece.color,
              piece.delay,
              piece.duration,
              piece.left,
            ),
          )}
        />
      ))}
    </div>
  );
};

export default Confetti;
