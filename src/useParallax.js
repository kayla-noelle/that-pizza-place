import { useEffect } from 'react'

// Moves the background element (bgRef) slower than the page as you scroll.
//
// - Without sectionRef: offset grows with page scroll. Use this for banners at
//   the very top of a page.
// - With sectionRef: offset is zero when the section is centered on screen and
//   grows as it moves away. Use this for sections further down the page.
//   The background must extend past the section by at least
//   (viewport height + section height) / 2 * speed on top and bottom.
export default function useParallax(bgRef, { speed = 0.4, sectionRef } = {}) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const update = () => {
      frame = 0
      const bg = bgRef.current
      if (!bg) return

      let offset
      if (sectionRef) {
        const section = sectionRef.current
        if (!section) return
        const rect = section.getBoundingClientRect()
        const vh = window.innerHeight
        if (rect.bottom < 0 || rect.top > vh) return // off screen
        offset = (vh / 2 - (rect.top + rect.height / 2)) * speed
      } else {
        offset = window.scrollY * speed
      }
      bg.style.transform = `translate3d(0, ${offset}px, 0)`
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [bgRef, sectionRef, speed])
}
