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
    padding: '4rem 2rem',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
  },
  content: {
    margin: '0 auto',
    padding: '3rem',
    borderRadius: '20px',
    backgroundColor: 'white',
    boxShadow: '0 5px 25px rgba(0, 0, 0, 0.1)',
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
    fontSize: '1.1rem',
    lineHeight: 1.8,
  },
});
