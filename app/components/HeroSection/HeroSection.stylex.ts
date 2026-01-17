import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  hero: {
    margin: 0,
    padding: 0,
    borderRadius: {
      default: '15px',
      '@media (max-width: 768px)': '0',
    },
    gap: 0,
    alignItems: 'center',
    backgroundImage: 'linear-gradient(135deg, #ff9500, #ff6b6b)',
    boxShadow: {
      default: '0 8px 30px rgba(255, 107, 107, 0.4)',
      '@media (max-width: 768px)': 'none',
    },
    color: 'white',
    containerType: 'inline-size',
    display: 'flex',
    // flexWrap: 'wrap',
    flexWrap: {
      default: 'nowrap',
      '@container (max-width: 902px)': 'wrap',
    },
    textAlign: 'center',
    minHeight: 728,
  },
  heroContent: {
    padding: '3rem',
    flex: '1 1 0%',
    alignContent: 'start',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'start',
    minHeight: 261,
    minWidth: 300,
  },
  heroImage: {
    flex: '1 1 0%',
    overflow: 'hidden',
    // borderBottomRightRadius: '15px',
    // borderTopRightRadius: '15px',
    display: 'flex',
    maxHeight: 728,
    width: '100cqw',
  },
  heroImageImg: {
    // borderBottomLeftRadius: '15px',
    // borderBottomRightRadius: '15px',
    display: 'block',
    objectFit: 'cover',
    height: '100%',
    // width: '100cqw',
  },
  heroImageImgMobile: {
    maxHeight: {
      default: null,
      '@container (max-width: 902px)': 520,
    },
    width: {
      default: null,
      '@container (max-width: 902px)': '100cqw',
    },
  },
  heroImageMobile: {
    flex: {
      default: null,
      '@container (max-width: 902px)': '0 0 auto',
    },
    borderBottomLeftRadius: {
      default: null,
      '@container (max-width: 902px)': '0',
    },
    borderBottomRightRadius: {
      default: 15,
      '@container (max-width: 902px)': '0',
    },
    borderTopLeftRadius: {
      default: null,
      '@container (max-width: 902px)': '0px',
    },
    borderTopRightRadius: {
      default: 15,
      '@container (max-width: 902px)': '0px',
    },
  },
  heroMobile: {
    alignItems: {
      default: null,
      '@container (max-width: 902px)': 'stretch',
    },
    flexDirection: {
      default: null,
      '@container (max-width: 902px)': 'column',
    },
    textAlign: {
      default: null,
      '@container (max-width: 902px)': 'center',
    },
  },
  heroParagraph: {
    margin: '1rem 0',
    fontSize: '1.2rem',
  },
  heroSubtitle: {
    margin: '0.5rem 0',
    fontSize: '2rem',
  },
  heroSubtitleMobile: {
    fontSize: {
      default: null,
      '@media (max-width: 768px)': '1.5rem',
      '@container (max-width: 768px)': '1.5rem',
    },
  },
  heroTitle: {
    margin: 0,
    fontSize: '2.5rem',
  },
  heroTitleMobile: {
    fontSize: {
      default: null,
      '@media (max-width: 768px)': '2rem',
      '@container (max-width: 768px)': '2rem',
    },
  },
});
