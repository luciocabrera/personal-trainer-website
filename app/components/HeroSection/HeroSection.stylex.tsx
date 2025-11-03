import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  hero: {
    alignItems: 'center',
    background: 'linear-gradient(135deg, #ff9500, #ff6b6b)',
    borderRadius: '15px',
    boxShadow: '0 8px 30px rgba(255, 107, 107, 0.4)',
    color: 'white',
    containerType: 'inline-size',
    display: 'flex',
    flexWrap: 'wrap',
    gap: 0,
    margin: 0,
    padding: 0,
    textAlign: 'center',
  },
  heroContent: {
    flex: '1 1 0%',
    padding: '3rem',
  },
  heroImage: {
    borderBottomRightRadius: '15px',
    borderTopRightRadius: '15px',
    display: 'flex',
    flex: '1 1 0%',
    maxHeight: 680,
    overflow: 'hidden',
  },
  heroImageImg: {
    display: 'block',
    height: '100%',
    objectFit: 'cover',
    width: '100%',
  },
  heroImageImgMobile: {
    maxHeight: {
      default: null,
      '@media (max-width: 870px)': 520,
    },
    width: {
      default: null,
      '@media (max-width: 870px)': '100cqw',
      '@container (max-width: 870px)': '100cqw',
    },
  },
  heroImageMobile: {
    borderBottomLeftRadius: {
      default: null,
      '@container (max-width: 870px)': '15px',
    },
    borderBottomRightRadius: {
      default: null,
      '@container (max-width: 870px)': '15px',
    },
    borderTopLeftRadius: {
      default: null,
      '@container (max-width: 870px)': '0px',
    },
    borderTopRightRadius: {
      default: null,
      '@container (max-width: 870px)': '0px',
    },
    flex: {
      default: null,
      '@container (max-width: 870px)': '0 0 auto',
    },
  },
  heroMobile: {
    alignItems: {
      default: null,
      '@container (max-width: 870px)': 'stretch',
    },
    flexDirection: {
      default: null,
      '@container (max-width: 870px)': 'column',
    },
    textAlign: {
      default: null,
      '@container (max-width: 870px)': 'center',
    },
  },
  heroParagraph: {
    fontSize: '1.2rem',
    margin: '1rem 0',
  },
  heroSubtitle: {
    fontSize: '2rem',
    margin: '0.5rem 0',
  },
  heroSubtitleMobile: {
    fontSize: {
      default: null,
      '@media (max-width: 768px)': '1.5rem',
      '@container (max-width: 768px)': '1.5rem',
    },
  },
  heroTitle: {
    fontSize: '2.5rem',
    margin: 0,
  },
  heroTitleMobile: {
    fontSize: {
      default: null,
      '@media (max-width: 768px)': '2rem',
      '@container (max-width: 768px)': '2rem',
    },
  },
});
