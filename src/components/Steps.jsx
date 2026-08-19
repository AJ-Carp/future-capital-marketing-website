import { STEPS } from '../data/content.js'
import './Steps.css'

/** Curved connector arrow shown between the step cards on wide screens. */
function StepArrow({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 130 76"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M6 64C46 60 70 46 94 26"
        stroke="#1f7a54"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path d="M91.7 11.5 124.8 10.6 104.3 36.5Z" fill="#1f7a54" />
    </svg>
  )
}

export default function Steps() {
  return (
    <section className="steps" id="how-it-works" aria-labelledby="steps-heading">
      <svg
        className="steps__swoosh"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M0 0h620c260 0 530 110 820 235v165C1150 255 880 155 0 150Z"
          fill="#17513a"
        />
      </svg>

      <div className="steps__inner container">
        <h2 className="display-heading steps__heading" id="steps-heading">
          3 steps to apply
        </h2>

        <ol className="steps__row">
          {STEPS.map((item, index) => (
            <li className="step-card" key={item.step}>
              <p className="step-card__label">{item.step}</p>
              <h3 className="step-card__title">{item.title}</h3>
              <p className="step-card__body">{item.body}</p>
              {index < STEPS.length - 1 && (
                <StepArrow className={`step-card__arrow step-card__arrow--${index + 1}`} />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
