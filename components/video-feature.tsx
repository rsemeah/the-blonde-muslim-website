"use client"

import { useRef, useEffect, useState } from "react"

interface VideoFeatureProps {
  src: string
  poster?: string
  className?: string
  aspectRatio?: "portrait" | "square" | "landscape" | "cinematic"
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  overlay?: boolean
}

export function VideoFeature({
  src,
  poster,
  className = "",
  aspectRatio = "portrait",
  autoPlay = true,
  muted = true,
  loop = true,
  overlay = true,
}: VideoFeatureProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const aspectClasses = {
    portrait: "aspect-[3/4]",
    square: "aspect-square",
    landscape: "aspect-video",
    cinematic: "aspect-[21/9]",
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)

    let playPromise: Promise<void> | undefined

    // Autoplay when in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && autoPlay) {
            playPromise = video.play()
            playPromise?.catch(() => {})
          } else {
            // Wait for play() promise to resolve before pausing
            if (playPromise !== undefined) {
              playPromise.then(() => {
                video.pause()
              }).catch(() => {})
            } else {
              video.pause()
            }
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(video)

    return () => {
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("pause", handlePause)
      observer.disconnect()
    }
  }, [autoPlay])

  return (
    <div className={`relative overflow-hidden bg-secondary ${aspectClasses[aspectRatio]} ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted={muted}
        loop={loop}
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
      )}
    </div>
  )
}

// Full-bleed hero video component
export function VideoHero({
  src,
  children,
  className = "",
}: {
  src: string
  children?: React.ReactNode
  className?: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.play().catch(() => {})
    }
  }, [])

  return (
    <section className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Video Background */}
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/40" />
      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        {children}
      </div>
    </section>
  )
}
