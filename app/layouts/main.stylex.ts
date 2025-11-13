import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  app: {
    backgroundColor: 'white',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flex: '1 1 0%',
    flexDirection: 'column',
    margin: '0 auto',
    maxWidth: '1200px',
    position: 'relative',
    width: '100%',
  },
  main: {
    containerName: 'mainContentContainer',
    containerType: 'inline-size',
    display: 'flex',
    flex: '1 1 0%',
    flexDirection: 'column',
    gap: '2rem',
    justifyContent: 'center',
    padding: {
      default: '2rem',
      '@media (max-width: 768px)': '1rem', // Mobile screens - much smaller header
    },
    paddingTop: {
      default: 'calc(80px + 2rem)',
      '@media (max-width: 768px)': 'calc(60px + 1rem)', // Mobile header height + content padding
    },
  },
});
