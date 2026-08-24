import { useEffect, useState } from 'react'

/**
 * Scroll offsets at which the header condenses and expands again.
 *
 * These are deliberately different. The header shrinks by 22px when it
 * condenses, and it is position: sticky — so that height change pulls the page
 * up and the browser's scroll anchoring compensates by lowering scrollY. With a
 * single threshold that correction drops the value straight back across the
 * line, the header expands, scrollY is pushed back over, and it oscillates
 * several dozen times a second. The gap between these two has to stay
 * comfortably wider than the height change for that loop to be impossible.
 */
const CONDENSE_AT = 72
const EXPAND_AT = 24

/**
 * True once the visitor has scrolled far enough for the header to condense.
 *
 * Reads are batched into an animation frame, so a fast scroll costs one
 * measurement per frame rather than one per event.
 */
export default function useScrolled() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let frame = 0

    function measure() {
      frame = 0
      const y = window.scrollY
      // Returning the same value makes React skip the re-render entirely.
      setScrolled((prev) => (prev ? y > EXPAND_AT : y > CONDENSE_AT))
    }

    function onScroll() {
      if (!frame) frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return scrolled
}
