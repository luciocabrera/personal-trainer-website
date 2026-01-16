import * as stylex from '@stylexjs/stylex';

const pulseAnimation = stylex.keyframes({
  '0%': { transform: 'scale(1)' },
  '100%': { transform: 'scale(1)' },
  '50%': { transform: 'scale(1.02)' },
});

export const styles = stylex.create({
  disclaimer: {
    background: 'rgba(255, 107, 107, 0.1)',
    padding: '1rem',
    borderColor: 'rgba(255, 107, 107, 0.2)',
    borderRadius: '8px',
    borderStyle: 'solid',
    borderWidth: '1px',
    color: '#ff6b6b',
    fontSize: '1.1rem',
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: '0',
  },
  price: {
    background:
      'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(78, 205, 196, 0.1))',
    padding: '1.5rem',
    borderColor: 'rgba(78, 205, 196, 0.3)',
    borderRadius: '15px',
    borderStyle: 'solid',
    borderWidth: '1px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 5px 25px rgba(78, 205, 196, 0.2)',
    marginBottom: '1rem',
    // ":hover": {
    //   transform: "translateY(-5px)",
    //   boxShadow: "0 10px 40px rgba(78, 205, 196, 0.4)",
    // },
  },

  priceTitle: {
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    background: 'linear-gradient(135deg, #ff9500, #ff6b6b)',
    backgroundClip: 'text',
    fontWeight: 'bold',
    marginTop: 0,
  },

  pricing: {
    // padding: 0,
    // margin: 0,
    // background: "rgba(255, 255, 255, 0.95)",
    // borderRadius: "20px",
    // backdropFilter: "blur(10px)",
    // boxShadow: "0 8px 32px rgba(78, 205, 196, 0.2)",
    // border: "1px solid rgba(255, 255, 255, 0.3)",
    // gap: 0,
  },

  pricingGrid: {
    padding: '2rem',
    gap: '1.5rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  },

  // Mobile responsive styles
  // pricingMobile: {
  //   "@media (max-width: 768px)": {
  //     padding: "1rem",
  //   },
  // },
  pricingGridMobile: {
    gridTemplateColumns: {
      default: null,
      '@media (max-width: 768px)': '1fr',
    },
  },

  pricingIconContainer: {
    background:
      'linear-gradient(135deg, rgba(255, 149, 0, 0.1), rgba(78, 205, 196, 0.1))',
    margin: '0 auto',
    borderColor: 'rgba(255, 149, 0, 0.2)',
    borderStyle: 'solid',
    borderWidth: '1px',
    alignItems: 'center',
    backdropFilter: 'blur(10px)',
    display: 'flex',
    justifyContent: 'center',
    height: '250px',
    maxWidth: '100%',
    width: '100%',
  },

  pricingIconContainerMobile: {
    margin: {
      default: null,
      '@media (max-width: 768px)': 0,
    },
    height: {
      default: null,
      '@media (max-width: 768px)': '250px',
    },
    maxWidth: {
      default: null,
      '@media (max-width: 768px)': '100%',
    },
    width: {
      default: null,
      '@media (max-width: 768px)': '100%',
    },
  },

  pricingIconSvg: {
    animationDuration: '3s',
    animationIterationCount: 'infinite',
    animationName: pulseAnimation,
    animationTimingFunction: 'ease-in-out',
    willChange: 'transform',
  },

  pricingIconSvgMobile: {
    height: {
      default: null,
      '@media (max-width: 768px)': 'auto',
    },
    maxWidth: {
      default: null,
      '@media (max-width: 768px)': '300px',
    },
    width: {
      default: null,
      '@media (max-width: 768px)': '90%',
    },
  },

  pricingImage: {
    textAlign: 'center',
  },

  pricingTitle: {
    background: `
      linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 50%, rgba(255, 107, 107, 0.9) 100%),
      url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M40 10c16.569 0 30 13.431 30 30s-13.431 30-30 30S10 56.569 10 40 23.431 10 40 10zm0 4c-14.359 0-26 11.641-26 26s11.641 26 26 26 26-11.641 26-26S54.359 14 40 14z'/%3E%3Cpath d='M30 30h20v20H30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
    `,
    margin: 0,
    padding: '2rem',
    borderRadius: '20px 20px 0 0',
    backgroundRepeat: 'no-repeat, repeat',
    backgroundSize: 'cover, 80px 80px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
    color: 'white',
    fontSize: '2.2rem',
    fontWeight: 'bold',
    position: 'relative',
    textAlign: 'center',
    '::after': {
      background: 'rgba(255, 255, 255, 0.4)',
      borderRadius: '2px',
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
