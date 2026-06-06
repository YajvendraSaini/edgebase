import { useEffect, useRef } from 'react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4'

const FADE_DURATION = 0.5

export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let rafId: number

    const updateOpacity = () => {
      const { currentTime, duration } = video

      if (duration && !Number.isNaN(duration)) {
        let opacity = 1

        if (currentTime < FADE_DURATION) {
          opacity = currentTime / FADE_DURATION
        } else if (currentTime > duration - FADE_DURATION) {
          opacity = (duration - currentTime) / FADE_DURATION
        }

        video.style.opacity = String(Math.max(0, Math.min(1, opacity)))
      }

      rafId = requestAnimationFrame(updateOpacity)
    }

    const handleEnded = () => {
      video.style.opacity = '0'
      window.setTimeout(() => {
        video.currentTime = 0
        void video.play()
      }, 100)
    }

    void video.play()
    video.addEventListener('ended', handleEnded)
    rafId = requestAnimationFrame(updateOpacity)

    return () => {
      cancelAnimationFrame(rafId)
      video.removeEventListener('ended', handleEnded)
    }
  }, [])

  return (
    <div
      className="pointer-events-none absolute z-0"
      style={{ top: '300px', inset: 'auto 0 0 0' }}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        style={{ opacity: 0 }}
        src={VIDEO_URL}
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    </div>
  )
}
