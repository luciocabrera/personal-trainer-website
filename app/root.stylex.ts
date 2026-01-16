import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  body: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    margin: 0,
    padding: 0,
    color: '#333',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    overflowX: 'hidden',
  },
  html: {
    scrollBehavior: 'smooth',
    overflowX: 'hidden',
    scrollPaddingTop: {
      default: '100px',
      '@media (max-width: 768px)': '80px', // Mobile screens
    },
  },
});
