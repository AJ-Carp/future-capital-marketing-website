import { PRODUCTS } from '../data/content.js'
import { CheckIcon } from './Icons.jsx'
import './Financing.css'

export default function Financing() {
  return (
    <section className="financing" aria-labelledby="financing-heading">
      {/* The green lobe that rises into this section is drawn by the Steps
          swoosh, so the two read as one continuous shape. */}
      <div className="financing__inner container">
        {/* The design has no visible section title; this keeps the section
            labelled for screen readers and search engines. */}
        <h2 className="financing__heading" id="financing-heading">
          Financing options
        </h2>

        <ul className="financing__grid">
          {PRODUCTS.map((product) => (
            <li className="product-card" id={product.id} key={product.id}>
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
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
