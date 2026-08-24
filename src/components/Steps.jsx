import { STEPS } from '../data/content.js'
import arrowOne from '../assets/step-arrow-1.png'
import arrowTwo from '../assets/step-arrow-2.png'
import './Steps.css'

/* One shape, drawn three times: the flat green base plus two gold washes.
   Kept in a constant so the geometry is written once. */
const SWOOSH_PATH =
  'M0 64C249 -101 460 90 570 300S900 520 1440 553V860C1150 715 60 265 0 679Z'

/** Decorative connectors drawn in the gaps between the step cards. */
const STEP_ARROWS = [
  { src: arrowOne, width: 308, height: 74 },
  { src: arrowTwo, width: 312, height: 62 },
]

export default function Steps() {
  return (
    <section className="steps" id="how-it-works" aria-labelledby="steps-heading">
      {/* One continuous shape: the lobe rising into the Financing section above
          (y 0–460) and the band behind these cards (y 460–860) are a single
          path, so there is no seam where they meet. The `S` command mirrors the
          previous curve's handle, which is what keeps the join corner-free. */}
      <svg
        className="steps__swoosh"
        viewBox="0 0 1440 860"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          {/* Two gold washes over the flat green: one on the crest where the
              shape starts, one on the tail where it runs off the right edge.
              userSpaceOnUse so the centres are plain viewBox coordinates
              rather than fractions of a curved bounding box. */}
          <radialGradient
            id="swoosh-gold-top"
            gradientUnits="userSpaceOnUse"
            cx="280"
            cy="20"
            r="470"
          >
            <stop offset="0%" stopColor="#c19a4b" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#c19a4b" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="swoosh-gold-end"
            gradientUnits="userSpaceOnUse"
            cx="1440"
            cy="720"
            r="470"
          >
            <stop offset="0%" stopColor="#c19a4b" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#c19a4b" stopOpacity="0" />
          </radialGradient>
        </defs>

        <path className="steps__swoosh-base" d={SWOOSH_PATH} />
        <path d={SWOOSH_PATH} fill="url(#swoosh-gold-top)" />
        <path d={SWOOSH_PATH} fill="url(#swoosh-gold-end)" />
      </svg>

      <div className="steps__inner container">
        {/* The design shows no title here, but the section's aria-labelledby
            needs something to point at. */}
        <h2 className="visually-hidden" id="steps-heading">
          How it works
        </h2>

        <ol className="steps__row">
          {STEPS.map((item, index) => (
            <li className="step-card" key={item.step}>
              {/* The card's visuals live on this inner panel, not on the <li>.
                  Anything that makes the <li> a stacking context pulls the
                  connector arrow (z-index: -1) out in front of the card — see
                  the note on .step-card__arrow. */}
              <div className="step-card__panel">
                <p className="step-card__label">{item.step}</p>
                <h3 className="step-card__title">{item.title}</h3>
                <p className="step-card__body">{item.body}</p>
              </div>
              {STEP_ARROWS[index] && (
                <img
                  className={`step-card__arrow step-card__arrow--${index + 1}`}
                  src={STEP_ARROWS[index].src}
                  width={STEP_ARROWS[index].width}
                  height={STEP_ARROWS[index].height}
                  alt=""
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
