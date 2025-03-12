"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface ImageWithSkeletonProps {
  src: string
  alt: string
  className?: string
  height?: string
}

export const ImageWithSkeleton = ({ src, alt, className = "", height = "h-96" }: ImageWithSkeletonProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  return (
    <div className={`relative ${height} ${className}`}>
      {/* Skeleton Loading */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-muted animate-pulse rounded-lg"
        />
      )}

      {/* Image */}
      <motion.img
        src={src}
        alt={alt}
        className={`rounded-lg shadow-xl ${height} object-cover w-full ${
          isLoading || hasError ? "invisible" : "visible"
        }`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true)
          setIsLoading(false)
        }}
      />

      {/* Error Fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-muted/50 flex items-center justify-center rounded-lg">
          <span className="text-muted-foreground">Image not available</span>
        </div>
      )}
    </div>
  )
}

