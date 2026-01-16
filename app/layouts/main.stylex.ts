import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  app: {
    margin: '0 auto',
    flex: '1 1 0%',
    backgroundColor: 'white',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    maxWidth: '1200px',
    width: '100%',
  },
  main: {
    padding: {
      default: '2rem',
      '@media (max-width: 768px)': '1rem', // Mobile screens - much smaller header
    },
    flex: '1 1 0%',
    gap: '2rem',
    containerName: 'mainContentContainer',
    containerType: 'inline-size',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: {
      default: 'calc(80px + 2rem)',
      '@media (max-width: 768px)': 'calc(60px + 1rem)', // Mobile header height + content padding
    },
  },
});
