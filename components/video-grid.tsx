"use client"

import { useRef } from "react"

interface VideoItemProps {
  src: string
  title: string
  subtitle?: string
  featured?: boolean
  badge?: string
}

function VideoItem({ src, title, subtitle, featured, badge }: VideoItemProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    videoRef.current?.play()
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div 
      className={`group relative overflow-hidden ${featured ? "aspect-[9/16] sm:col-span-2 sm:row-span-2" : "aspect-[9/16]"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        muted
        loop
        playsInline
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      {badge && (
        <div className="absolute left-4 top-4 bg-accent px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.2em] text-foreground">
          {badge}
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
        <p className={`font-serif text-white ${featured ? "text-2xl" : "text-lg"}`}>{title}</p>
        {subtitle && <p className="mt-2 text-sm text-white/70">{subtitle}</p>}
      </div>
    </div>
  )
}

const videos = [
  {
    src: "/videos/texas.mp4",
    title: "Muslim Texas",
    subtitle: "Documentary Series",
    featured: true,
    badge: "Featured Series",
  },
  {
    src: "/videos/lifestyle-moments.mp4",
    title: "Lifestyle",
  },
  {
    src: "/videos/reflections.mp4",
    title: "Reflections",
  },
  {
    src: "/videos/charity.mp4",
    title: "Charity",
  },
  {
    src: "/videos/faith-journey.mp4",
    title: "Faith",
  },
]

export function VideoGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {videos.map((video) => (
        <VideoItem key={video.src} {...video} />
      ))}
    </div>
  )
}
