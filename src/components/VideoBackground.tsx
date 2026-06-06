import { useEffect, useRef } from 'react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4'

const FADE_DURATION = 0.15

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
      video.currentTime = 0
      void video.play()
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
    <div className="pointer-events-none absolute inset-0 z-0">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        style={{ opacity: 0 }}
        src={VIDEO_URL}
        muted
        playsInline
      />
    </div>
  )
}
