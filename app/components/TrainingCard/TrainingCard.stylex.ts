import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  training: {
    background:
      'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(78, 205, 196, 0.1))',
    borderColor: 'rgba(78, 205, 196, 0.3)',
    borderRadius: '15px',
    borderStyle: 'solid',
    borderWidth: '1px',
    gap: '16px',
    transition: 'box-shadow 0.3s ease',
    boxShadow: {
      default: '0 5px 25px rgba(78, 205, 196, 0.2)',
      ':hover': '0 10px 40px rgba(78, 205, 196, 0.4)',
    },
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1rem',
  },
  trainingBody: { padding: '1.5rem', minHeight: 200 },
  trainingDescription: {
    margin: 0,
    color: '#666',
    flexGrow: 1,
    fontSize: '1rem',
    lineHeight: 1.6,
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
    overflow: 'hidden',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    height: '350px',
    marginBottom: '1rem',
    width: '100%',
  },
  trainingImageImg: {
    backgroundColor: '#f0f0f0',
    display: 'block',
    objectFit: 'cover',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    height: '350px',
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
