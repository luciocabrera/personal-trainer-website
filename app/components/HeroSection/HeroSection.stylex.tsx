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
    // flexWrap: 'wrap',
    flexWrap: {
      default: 'nowrap',
      '@container (max-width: 902px)': 'wrap',
    },
    gap: 0,
    margin: 0,
    minHeight: 728,
    padding: 0,
    textAlign: 'center',
  },
  heroContent: {
    alignContent: 'start',
    alignItems: 'center',
    display: 'flex',
    flex: '1 1 0%',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'start',
    minHeight: 261,
    minWidth: 300,
    padding: '3rem',
  },
  heroImage: {
    // borderBottomRightRadius: '15px',
    // borderTopRightRadius: '15px',
    display: 'flex',
    flex: '1 1 0%',
    maxHeight: 728,
    overflow: 'hidden',
    width: '100cqw',
  },
  heroImageImg: {
    // borderBottomLeftRadius: '15px',
    // borderBottomRightRadius: '15px',
    display: 'block',
    height: '100%',
    objectFit: 'cover',
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
    borderBottomLeftRadius: {
      default: null,
      '@container (max-width: 902px)': '15px',
    },
    borderBottomRightRadius: {
      default: 15,
      '@container (max-width: 902px)': '15px',
    },
    borderTopLeftRadius: {
      default: null,
      '@container (max-width: 902px)': '0px',
    },
    borderTopRightRadius: {
      default: 15,
      '@container (max-width: 902px)': '0px',
    },
    flex: {
      default: null,
      '@container (max-width: 902px)': '0 0 auto',
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
