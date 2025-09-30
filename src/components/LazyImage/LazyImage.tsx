import { useState, useRef, useEffect } from "react";
import type { LazyImageProps } from "./LazyImage.types";

const LazyImage = ({
  src,
  alt,
  className,
  width,
  height,
  loading = "lazy",
  sizes,
  srcSet,
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const optimizedSrc = getOptimizedImageUrl(src, width);
  const optimizedSrcSet = srcSet || generateSrcSet(src, width);

  return (
    <div className={`lazy-image-container ${className || ""}`}>
      {/* Placeholder */}
      {!isLoaded && (
        <div
          className="image-placeholder"
          style={{
            width: width || "100%",
            height: height || "auto",
            backgroundColor: "#f0f0f0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#999",
            fontSize: "14px",
          }}
        >
          Loading...
        </div>
      )}

      {/* Actual image */}
      <img
        ref={imgRef}
        src={isInView ? optimizedSrc : undefined}
        srcSet={isInView ? optimizedSrcSet : undefined}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        sizes={sizes}
        onLoad={handleLoad}
        style={{
          display: isLoaded ? "block" : "none",
          transition: "opacity 0.3s ease-in-out",
          opacity: isLoaded ? 1 : 0,
        }}
      />
    </div>
  );
};

// Helper function to optimize Unsplash images
const getOptimizedImageUrl = (src: string, width?: number): string => {
  // Only optimize external Unsplash images
  if (!src.includes("unsplash.com")) return src;

  const url = new URL(src);

  // Add optimization parameters for Unsplash
  if (width) {
    url.searchParams.set("w", width.toString());
  }
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "crop");
  url.searchParams.set("q", "80");

  return url.toString();
};

// Generate responsive srcSet for better performance
const generateSrcSet = (src: string, baseWidth?: number): string => {
  // Only generate srcSet for external Unsplash images
  if (!src.includes("unsplash.com")) return "";

  const widths = baseWidth
    ? [
        Math.round(baseWidth * 0.5),
        baseWidth,
        Math.round(baseWidth * 1.5),
        Math.round(baseWidth * 2),
      ]
    : [400, 800, 1200, 1600];

  return widths
    .map((width) => `${getOptimizedImageUrl(src, width)} ${width}w`)
    .join(", ");
};

export default LazyImage;
