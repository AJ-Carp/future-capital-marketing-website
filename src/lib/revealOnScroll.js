/**
 * Fade-in-on-scroll, as a callback ref.
 *
 * Attach it to any element that should rise into view:
 *
 *   <li data-reveal ref={revealRef}>
 *
 * The same call both hides the element and starts observing it, so the two can
 * never drift apart. An earlier version queried `[data-reveal]` once on mount
 * instead; anything React re-created afterwards — a hot reload, a conditional
 * remount — was hidden by CSS but never observed, and stayed invisible until a
 * full page reload.
 *
 * Nothing is hidden unless JavaScript is running and the visitor is happy with
 * motion, so the no-JS and reduced-motion cases render at full opacity.
 */

let observer = null
let motionOk = null

function motionWelcome() {
  if (motionOk === null) {
    motionOk =
      'IntersectionObserver' in window &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }
  return motionOk
}

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-revealed')
          // Reveal once — no re-hiding on the way back up.
          observer.unobserve(entry.target)
        }
      },
      // Positive bottom margin extends the root box below the viewport, so an
      // element starts revealing just before it scrolls into sight rather than
      // after it is already 10% of the way in. threshold 0 fires on the first
      // pixel that crosses.
      { rootMargin: '0px 0px 12% 0px', threshold: 0 },
    )
  }
  return observer
}

export default function revealRef(node) {
  if (!node || !motionWelcome()) return undefined

  node.classList.add('reveal')
  const obs = getObserver()
  obs.observe(node)

  // React 19 calls this on unmount in place of `ref(null)`.
  return () => obs.unobserve(node)
}
