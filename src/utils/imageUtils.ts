// Edge-compatible image URLs - fallback strategy
export const getImageUrl = (imagePath: string): string => {
  // Check if it's already a full URL (starts with http, https, or /)
  if (
    imagePath.startsWith("http") ||
    imagePath.startsWith("/") ||
    imagePath.startsWith("data:")
  ) {
    return imagePath;
  }

  // For relative paths, ensure they work in all browsers
  return new URL(imagePath, import.meta.url).href;
};

// Alternative: Use public folder images for better browser compatibility
export const publicImageUrls = {
  "strength-training": "/images/strength-training.jpg",
  running: "/images/running-training.jpg",
  "parent-child": "/images/parent-child-training.jpg",
};
