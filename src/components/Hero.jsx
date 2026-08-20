import { HERO } from '../data/content.js'
import { ArrowRightIcon, CheckIcon } from './Icons.jsx'
import photo from '../assets/small-business-owners.jpg'
import artwork from '../assets/hero-arrow.png'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner container">
        <div className="hero__copy">
          <h1 className="display-heading hero__headline">{HERO.headline}</h1>
          <div className="hero__card">
            <h2 className="hero__title">{HERO.title}</h2>
            <p className="hero__body">{HERO.body}</p>

            <ul className="check-list hero__points">
              {HERO.points.map((point) => (
                <li key={point}>
                  <CheckIcon strokeWidth={1.6} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <a className="hero__link" href="#apply">
              {HERO.linkText}
            </a>

            <div className="hero__cta">
              <a className="btn btn--gold-outline" href="#apply">
                {HERO.ctaText}
                <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="hero__art">
          {/* Exported from Figma (Frame 3) — decorative, so it stays out of the a11y tree. */}
          <img
            className="hero__arrow"
            src={artwork}
            alt=""
            aria-hidden="true"
            width="558"
            height="460"
          />
          <img
            className="hero__photo"
            src={photo}
            alt="Three small business owners standing together in the doorway of their shop"
            width="1300"
            height="681"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
