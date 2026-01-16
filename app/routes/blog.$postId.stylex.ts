import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  backLink: {
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    color: {
      default: '#4ecdc4',
      ':hover': '#44a3a0',
    },
    display: 'inline-block',
    fontSize: '1rem',
    fontWeight: 600,
    marginBottom: '2rem',
  },
  container: {
    padding: {
      default: '4rem 2rem',
      '@media (max-width: 768px)': '1rem 0',
    },
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
  },
  content: {
    margin: '0 auto',
    padding: {
      default: '3rem',
      '@media (max-width: 768px)': '1.5rem 1rem',
    },
    borderRadius: {
      default: '20px',
      '@media (max-width: 768px)': '0',
    },
    backgroundColor: 'white',
    boxShadow: {
      default: '0 5px 25px rgba(0, 0, 0, 0.1)',
      '@media (max-width: 768px)': 'none',
    },
    maxWidth: '800px',
  },
  loading: {
    padding: '4rem',
    color: '#666',
    fontSize: '1.2rem',
    textAlign: 'center',
  },
  markdown: {
    color: '#333',
    fontSize: {
      default: '1.1rem',
      '@media (max-width: 768px)': '1rem',
    },
    lineHeight: 1.8,
  },
});
