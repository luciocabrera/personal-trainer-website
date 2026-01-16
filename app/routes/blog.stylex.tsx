import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  blogSection: {
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    padding: '4rem 2rem',
  },
  container: {
    margin: '0 auto',
    maxWidth: '1200px',
  },
  title: {
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    backgroundClip: 'text',
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  subtitle: {
    color: '#666',
    fontSize: '1.2rem',
    marginBottom: '3rem',
    textAlign: 'center',
  },
  blogGrid: {
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: {
      default: 'repeat(auto-fit, minmax(350px, 1fr))',
      '@media (max-width: 768px)': '1fr',
    },
  },
  blogCard: {
    background: 'white',
    borderRadius: '20px',
    boxShadow: {
      default: '0 5px 25px rgba(0, 0, 0, 0.1)',
      ':hover': '0 10px 40px rgba(78, 205, 196, 0.3)',
    },
    overflow: 'hidden',
    transition: 'box-shadow 0.3s ease',
  },
  imageContainer: {
    height: '250px',
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    height: '100%',
    objectFit: 'cover',
    transform: {
      default: null,
      ':hover': 'scale(1.05)',
    },
    transition: 'transform 0.3s ease',
    width: '100%',
  },
  category: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '20px',
    color: 'white',
    fontSize: '0.85rem',
    fontWeight: 'bold',
    left: '1rem',
    padding: '0.5rem 1rem',
    position: 'absolute',
    top: '1rem',
  },
  content: {
    padding: '1.5rem',
  },
  meta: {
    alignItems: 'center',
    color: '#999',
    display: 'flex',
    fontSize: '0.9rem',
    gap: '1rem',
    marginBottom: '1rem',
  },
  date: {
    color: '#999',
  },
  readTime: {
    color: '#999',
  },
  postTitle: {
    color: '#333',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  excerpt: {
    color: '#666',
    fontSize: '1rem',
    lineHeight: 1.6,
    marginBottom: '1.5rem',
  },
  readMore: {
    background: 'linear-gradient(135deg, #4ecdc4 0%, #44a3a0 100%)',
    borderRadius: '25px',
    boxShadow: {
      default: null,
      ':hover': '0 5px 15px rgba(78, 205, 196, 0.4)',
    },
    color: 'white',
    display: 'inline-block',
    fontWeight: 'bold',
    padding: '0.75rem 1.5rem',
    textDecoration: 'none',
    transform: {
      default: null,
      ':hover': 'translateY(-2px)',
    },
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
});
