import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  trainings: {
    backdropFilter: 'blur(10px)',
    background: 'rgba(255, 255, 255, 0.95)',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '20px',
    borderStyle: 'solid',
    borderWidth: '1px',
    boxShadow: '0 8px 32px rgba(78, 205, 196, 0.2)',
    containerName: 'trainingsSectionContainer',
    containerType: 'normal',
  },
  trainingsGrid: {
    display: 'grid',
    gap: '1.5rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    padding: '1.5rem',
  },
  trainingsGridMobile: {
    gridTemplateColumns: {
      default: 'repeat(auto-fit, minmax(300px, 1fr))',
      '@media (max-width: 768px)': '1fr',
    },
  },
  trainingsTitle: {
    background: `
      linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 50%, rgba(255, 107, 107, 0.9) 100%),
      url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Cpath d='M20 20h10v10H20zM40 40h10v10H40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
    `,
    backgroundRepeat: 'no-repeat, repeat',
    backgroundSize: 'cover, 60px 60px',
    borderRadius: '20px 20px 0 0',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
    color: 'white',
    fontSize: '2.2rem',
    fontWeight: 'bold',
    padding: '2rem',
    position: 'relative',
    textAlign: 'center',
  },
});
