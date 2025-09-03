import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const ImageWithSkeleton = ({ src, alt }: { src: string; alt: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Optional: Add progressive loading effect
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoading(false);
    img.onerror = () => {
      setHasError(true);
      setIsLoading(false);
    };
  }, [src]);

  return (
    <div className="relative h-96 w-full overflow-hidden rounded-lg">
      {/* Animated Skeleton */}
      <motion.div
        initial={false}
        animate={{ opacity: isLoading ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100"
        style={{
          backgroundSize: '200% 100%',
          animation: isLoading ? 'shimmer 1.5s infinite linear' : 'none',
        }}
      >
        {/* Optional: Add subtle pulse animation */}
        <motion.div
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-white/20"
        />
      </motion.div>

      {/* Actual Image */}
      <motion.img
        src={src}
        alt={alt}
        className="h-96 w-full object-cover rounded-lg"
        initial={{ opacity: 0 }}
        animate={{
          opacity: hasError ? 0 : isLoading ? 0 : 1,
          transition: { delay: 0.2 }
        }}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
      />

      {/* Error State */}
      {hasError && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-gray-50 flex items-center justify-center rounded-lg"
        >
          <div className="text-center p-4">
            <span className="text-gray-400 text-sm">Image unavailable</span>
            <p className="text-gray-300 text-xs mt-1">Visual representation coming soon</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}; 