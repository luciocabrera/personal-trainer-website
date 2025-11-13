import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  training: {
    background:
      'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(78, 205, 196, 0.1))',
    borderColor: 'rgba(78, 205, 196, 0.3)',
    borderRadius: '15px',
    borderStyle: 'solid',
    borderWidth: '1px',
    boxShadow: {
      default: '0 5px 25px rgba(78, 205, 196, 0.2)',
      ':hover': '0 10px 40px rgba(78, 205, 196, 0.4)',
    },
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginBottom: '1rem',
    transform: {
      default: null,
      ':hover': 'translateY(-5px)',
    },
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  trainingBody: { minHeight: 362, padding: '1.5rem' },
  trainingDescription: {
    color: '#666',
    flexGrow: 1,
    fontSize: '1rem',
    lineHeight: 1.6,
    margin: 0,
  },
  trainingDescriptionMobile: {
    fontSize: {
      default: null,
      '@media (max-width: 768px)': '0.9rem',
    },
  },
  trainingDescriptionSmallMobile: {
    fontSize: {
      default: null,
      '@media (max-width: 480px)': '0.85rem',
    },
  },
  trainingImage: {
    background: '#f0f0f0',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    height: '250px',
    marginBottom: '1rem',
    overflow: 'hidden',
    width: '100%',
  },
  trainingImageImg: {
    backgroundColor: '#f0f0f0',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    display: 'block',
    height: '250px',
    objectFit: 'cover',
    width: '100%',
  },
  trainingImageImgMobile: {
    height: {
      default: null,
      '@media (max-width: 768px)': '100%',
    },
  },
  trainingImageImgSmallMobile: {
    height: {
      default: null,
      '@media (max-width: 480px)': '100%',
    },
  },
  trainingImageMobile: {
    height: {
      default: null,
      '@media (max-width: 768px)': '100%',
    },
  },
  trainingImageSmallMobile: {
    height: {
      default: null,
      '@media (max-width: 480px)': '100%',
    },
  },
  trainingMobile: {
    gap: {
      default: null,
      '@media (max-width: 768px)': '12px',
    },
  },
  trainingSmallMobile: {
    gap: {
      default: null,
      '@media (max-width: 480px)': '10px',
    },
  },
  trainingTitle: {
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    background: 'linear-gradient(135deg, #ff9500, #ff6b6b)',
    backgroundClip: 'text',
    fontSize: '1.4rem',
    fontWeight: 'bold',
    lineHeight: 1.3,
    marginBottom: '0.5rem',
    marginTop: 0,
  },
  trainingTitleMobile: {
    fontSize: {
      default: null,
      '@media (max-width: 768px)': '1.25rem',
    },
  },
  trainingTitleSmallMobile: {
    fontSize: {
      default: null,
      '@media (max-width: 480px)': '1.1rem',
    },
  },
});
