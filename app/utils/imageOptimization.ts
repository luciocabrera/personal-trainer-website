/**
 * Image optimization utilities for better build performance
 */

// Preload critical images
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Lazy loading with intersection observer
export const lazyLoadImage = (
  img: HTMLImageElement,
  src: string,
  placeholder?: string
) => {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLImageElement;
          target.src = src;
          target.classList.remove('lazy');
          observer.unobserve(target);
        }
      });
    });

    if (placeholder) {
      img.src = placeholder;
    }
    img.classList.add('lazy');
    observer.observe(img);
  } else {
    // Fallback for browsers without IntersectionObserver
    img.src = src;
  }
};

// Generate responsive image sources
export const generateResponsiveImages = (baseSrc: string) => {
  const extension = baseSrc.split('.').pop();
  const baseName = baseSrc.replace(`.${extension}`, '');

  return {
    desktop: baseSrc,
    mobile: `${baseName}-mobile.${extension}`,
    tablet: `${baseName}-tablet.${extension}`,
    webp: `${baseName}.webp`,
    webpMobile: `${baseName}-mobile.webp`,
  };
};
