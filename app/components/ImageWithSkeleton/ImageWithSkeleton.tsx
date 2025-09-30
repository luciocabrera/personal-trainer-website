import { useState } from "react";
import "./ImageWithSkeleton.css";
import type { ImageWithSkeletonProps } from "./ImageWithSkeleton.types";

const ImageWithSkeleton = ({
  src,
  alt,
  className,
  width,
  height,
  loading = "lazy",
}: ImageWithSkeletonProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Debug: Log the src
  console.log("ImageWithSkeleton rendering with src:", src, typeof src);

  const handleLoad = () => {
    console.log("Image loaded successfully:", src);
    setIsLoading(false);
  };

  const handleError = () => {
    console.error("Image failed to load:", src);
    setHasError(true);
    setIsLoading(false);
  };

  return (
    <div className={`image-with-skeleton ${className || ""}`}>
      {/* Skeleton Placeholder */}
      {isLoading && (
        <div className="image-skeleton">
          <div className="skeleton-shimmer"></div>
        </div>
      )}

      {/* Actual Image - Always rendered but hidden until loaded */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "8px",
          display: isLoading || hasError ? "none" : "block",
          backfaceVisibility: "hidden",
        }}
      />

      {/* Error Fallback */}
      {hasError && (
        <div className="image-error">
          <div className="error-icon">📷</div>
          <span>Image unavailable</span>
        </div>
      )}
    </div>
  );
};

export default ImageWithSkeleton;
