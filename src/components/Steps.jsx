import { STEPS } from '../data/content.js'
import arrowOne from '../assets/step-arrow-1.png'
import arrowTwo from '../assets/step-arrow-2.png'
import './Steps.css'

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
        <path
          d="M0 64C249 -101 460 90 570 300S900 520 1440 553V860C1150 715 60 265 0 679Z"
          fill="#17513a"
        />
      </svg>

      <div className="steps__inner container">
        <ol className="steps__row">
          {STEPS.map((item, index) => (
            <li className="step-card" key={item.step}>
              <p className="step-card__label">{item.step}</p>
              <h3 className="step-card__title">{item.title}</h3>
              <p className="step-card__body">{item.body}</p>
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
