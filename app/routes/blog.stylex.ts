import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  blogCard: {
    background: 'white',
    borderRadius: {
      default: '20px',
      '@media (max-width: 768px)': '0',
    },
    overflow: 'hidden',
    transition: 'box-shadow 0.3s ease',
    boxShadow: {
      default: '0 5px 25px rgba(0, 0, 0, 0.1)',
      ':hover': '0 10px 40px rgba(78, 205, 196, 0.3)',
      '@media (max-width: 768px)': 'none',
    },
  },
  blogGrid: {
    gap: {
      default: '2rem',
      '@media (max-width: 768px)': '1.5rem',
    },
    display: 'grid',
    gridTemplateColumns: {
      default: 'repeat(auto-fit, minmax(350px, 1fr))',
      '@media (max-width: 768px)': '1fr',
    },
  },
  blogSection: {
    padding: {
      default: '4rem 2rem',
      '@media (max-width: 768px)': '1.5rem 0',
    },
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
  },
  category: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    color: 'white',
    fontSize: '0.85rem',
    fontWeight: 'bold',
    position: 'absolute',
    left: '1rem',
    top: '1rem',
  },
  container: {
    margin: '0 auto',
    maxWidth: '1200px',
  },
  content: {
    padding: {
      default: '1.5rem',
      '@media (max-width: 768px)': '1rem',
    },
  },
  date: {
    color: '#999',
  },
  excerpt: {
    color: '#666',
    fontSize: {
      default: '1rem',
      '@media (max-width: 768px)': '0.9rem',
    },
    lineHeight: 1.6,
    marginBottom: '1.25rem',
  },
  image: {
    transition: 'transform 0.3s ease',
    objectFit: 'cover',
    transform: {
      default: null,
      ':hover': 'scale(1.05)',
    },
    height: '100%',
    width: '100%',
  },
  imageContainer: {
    overflow: 'hidden',
    position: 'relative',
    height: {
      default: '250px',
      '@media (max-width: 768px)': '200px',
    },
  },
  meta: {
    gap: '1rem',
    alignItems: 'center',
    color: '#999',
    display: 'flex',
    fontSize: {
      default: '0.9rem',
      '@media (max-width: 768px)': '0.85rem',
    },
    marginBottom: '0.75rem',
  },
  postTitle: {
    color: '#333',
    fontSize: {
      default: '1.5rem',
      '@media (max-width: 768px)': '1.25rem',
    },
    fontWeight: 'bold',
    marginBottom: '0.75rem',
  },
  readMore: {
    background: 'linear-gradient(135deg, #4ecdc4 0%, #44a3a0 100%)',
    padding: '0.75rem 1.5rem',
    borderRadius: '25px',
    textDecoration: 'none',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    boxShadow: {
      default: null,
      ':hover': '0 5px 15px rgba(78, 205, 196, 0.4)',
    },
    color: 'white',
    display: 'inline-block',
    fontWeight: 'bold',
    transform: {
      default: null,
      ':hover': 'translateY(-2px)',
    },
  },
  readTime: {
    color: '#999',
  },
  subtitle: {
    color: '#666',
    fontSize: {
      default: '1.2rem',
      '@media (max-width: 768px)': '1rem',
    },
    textAlign: 'center',
    marginBottom: {
      default: '3rem',
      '@media (max-width: 768px)': '1.5rem',
    },
  },
  title: {
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    backgroundClip: 'text',
    fontSize: {
      default: '3rem',
      '@media (max-width: 768px)': '2rem',
    },
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '0.5rem',
  },
});
