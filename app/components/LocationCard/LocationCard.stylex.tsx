import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  comingSoon: {
    background: 'rgba(233, 30, 99, 0.1)',
    padding: '0.2rem 0.8rem',
    borderRadius: '15px',
    color: '#e91e63',
    display: 'inline-block',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
  },

  comingSoonMobile: {
    fontSize: {
      default: null,
      '@media (max-width: 768px)': '0.75rem',
    },
  },

  locationCard: {
    background:
      'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(78, 205, 196, 0.1))',
    padding: '1.5rem',
    borderColor: 'rgba(78, 205, 196, 0.3)',
    borderRadius: '15px',
    borderStyle: 'solid',
    borderWidth: '1px',
    transition: 'box-shadow 0.3s ease',
    boxShadow: {
      default: '0 8px 30px rgba(78, 205, 196, 0.2)',
      ':hover': '0 12px 40px rgba(78, 205, 196, 0.4)',
    },
    display: 'flex',
    flexDirection: 'column',
    minHeight: '400px',
  },

  locationCardParagraph: {
    margin: '0 0 1rem 0',
    color: '#666',
    fontSize: '0.9rem',
  },

  locationCardTitle: {
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    background: 'linear-gradient(135deg, #ff9500, #ff6b6b)',
    margin: '0 0 0.5rem 0',
    backgroundClip: 'text',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },

  locationDetails: {
    margin: '1rem 0',
    flexGrow: 1,
  },

  locationDetailsDiv: {
    margin: '0.5rem 0',
    fontSize: '0.9rem',
    lineHeight: 1.4,
  },

  // Mobile responsive styles
  locationDetailsDivMobile: {
    fontSize: {
      default: null,
      '@media (max-width: 768px)': '0.85rem',
    },
  },

  mapContainer: {
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    marginTop: '1rem',
  },

  mapIframe: {
    borderColor: 'transparent',
    borderRadius: '8px',
    borderStyle: 'none',
    borderWidth: 0,
  },

  trainingCapacity: {
    color: '#ff9500',
    fontWeight: 500,
  },

  trainingDates: {
    background: 'rgba(156, 39, 176, 0.1)',
    padding: '0.3rem 0.6rem',
    borderRadius: '12px',
    color: '#9c27b0',
    display: 'inline-block',
    fontSize: '0.85rem',
    fontWeight: 500,
    marginTop: '0.3rem',
  },

  trainingDatesMobile: {
    fontSize: {
      default: null,
      '@media (max-width: 768px)': '0.8rem',
    },
  },

  trainingLocation: {
    color: '#666',
    fontStyle: 'italic',
  },

  trainingTime: {
    color: '#ff6b6b',
    fontSize: '1rem',
    fontWeight: 'bold',
  },

  trainingTimeMobile: {
    fontSize: {
      default: null,
      '@media (max-width: 768px)': '0.9rem',
    },
  },

  trainingType: {
    color: '#4ecdc4',
    fontSize: '0.95rem',
    fontWeight: 600,
  },

  trainingTypeMobile: {
    fontSize: {
      default: null,
      '@media (max-width: 768px)': '0.85rem',
    },
  },
});
