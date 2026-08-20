import { PRODUCTS } from '../data/content.js'
import { ArrowRightIcon, CheckIcon } from './Icons.jsx'
import revealRef from '../lib/revealOnScroll.js'
import './Financing.css'

export default function Financing() {
  return (
    <section className="financing" aria-labelledby="financing-heading">
      {/* The green lobe that rises into this section is drawn by the Steps
          swoosh, so the two read as one continuous shape. */}
      <div className="financing__inner container">
        {/* The design has no visible section title; this keeps the section
            labelled for screen readers and search engines. */}
        <h2 className="visually-hidden" id="financing-heading">
          Financing options
        </h2>

        <ul className="financing__grid">
          {PRODUCTS.map((product, index) => (
            <li
              className="product-card"
              id={product.id}
              key={product.id}
              data-reveal
              ref={revealRef}
              /* Cards arrive in reading order rather than all at once. */
              style={{ '--reveal-delay': `${index * 110}ms` }}
            >
              <h3 className="product-card__title">{product.title}</h3>
              <p className="product-card__body">{product.body}</p>

              <ul className="check-list product-card__points">
                {product.points.map((point) => (
                  <li key={point}>
                    <CheckIcon strokeWidth={2.4} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <a className="btn btn--gold product-card__cta" href="#apply">
                Get Started
                <ArrowRightIcon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
