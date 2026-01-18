import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  benefitCard: {
    padding: '1.5rem',
    borderColor: {
      default: 'rgba(78, 205, 196, 0.2)',
      ':hover': 'rgba(78, 205, 196, 0.4)',
    },
    borderRadius: '12px',
    borderStyle: 'solid',
    borderWidth: '1px',
    transition: 'all 0.3s ease',
    backgroundImage:
      'linear-gradient(135deg, rgba(78, 205, 196, 0.1), rgba(255, 107, 107, 0.1))',
    boxShadow: {
      default: null,
      ':hover': '0 4px 15px rgba(78, 205, 196, 0.2)',
    },
    transform: {
      default: null,
      ':hover': 'translateX(5px)',
    },
  },

  benefitDescription: {
    margin: 0,
    color: '#666',
    fontSize: '1rem',
    lineHeight: 1.6,
  },

  benefitIcon: {
    fontSize: '2.5rem',
    marginBottom: '0.5rem',
  },

  benefitTitle: {
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    backgroundImage: 'linear-gradient(135deg, #ff6b6b, #4ecdc4)',
    color: '#333',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },

  benefitsGrid: {
    gap: '1.5rem',
    display: 'grid',
    gridTemplateColumns: '1fr',
    order: {
      default: null,
      '@media (max-width: 968px)': 2,
    },
  },

  container: {
    margin: '0 auto',
    maxWidth: '1200px',
  },

  content: {
    gap: {
      default: '3rem',
      '@media (max-width: 968px)': '2rem',
    },
    alignItems: 'center',
    display: 'grid',
    gridTemplateColumns: {
      default: '1fr 1fr',
      '@media (max-width: 968px)': '1fr',
    },
  },

  image: {
    borderRadius: '15px',
    transition: 'transform 0.3s ease',
    display: 'block',
    transform: {
      default: null,
      ':hover': 'scale(1.02)',
    },
    height: 'auto',
    width: '100%',
  },

  imageContainer: {
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
    order: {
      default: null,
      '@media (max-width: 968px)': 1,
    },
    position: 'relative',
  },

  section: {
    padding: '0 2rem 2rem 2rem',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: {
      default: '20px',
      '@media (max-width: 768px)': '0',
    },
    borderStyle: 'solid',
    borderWidth: '1px',
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    boxShadow: '0 8px 32px rgba(78, 205, 196, 0.2)',
    marginBottom: '2rem',
  },

  subtitle: {
    margin: '0 auto 3rem',
    color: '#555',
    fontSize: '1.2rem',
    lineHeight: 1.6,
    textAlign: 'center',
    marginBottom: '3rem',
    maxWidth: '800px',
  },

  title: {
    margin: '0 -2rem 2rem -2rem',
    padding: '2rem',
    borderRadius: {
      default: '20px 20px 0 0',
      '@media (max-width: 768px)': '0',
    },
    backgroundImage: `
      linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 50%, rgba(255, 107, 107, 0.9) 100%),
      url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Cpath d='M20 20h10v10H20zM40 40h10v10H40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
    `,
    backgroundRepeat: 'no-repeat, repeat',
    backgroundSize: 'cover, 60px 60px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
    color: 'white',
    fontSize: '2.2rem',
    fontWeight: 'bold',
    position: 'relative',
    textAlign: 'center',
    '::after': {
      borderRadius: '2px',
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      content: '',
      position: 'absolute',
      transform: 'translateX(-50%)',
      bottom: '-8px',
      height: '4px',
      left: '50%',
      width: '80px',
    },
  },
});
