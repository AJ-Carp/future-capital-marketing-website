import { FOOTER, NAV, PHONE, PORTAL_URL } from '../data/content.js'
import { PhoneIcon } from './Icons.jsx'
import logo from '../assets/FCFG-logo.png'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <img
            className="footer__logo"
            src={logo}
            alt="FutureCap Funding Group"
            width="2079"
            height="756"
          />
          <p className="footer__blurb">{FOOTER.blurb}</p>

          <ul className="footer__contact">
            <li>
              <a href={PHONE.href}>
                <PhoneIcon width="18" height="18" />
                <span>{PHONE.display}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${FOOTER.email}`}>{FOOTER.email}</a>
            </li>
            <li className="footer__address">
              {FOOTER.address.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </li>
          </ul>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          {NAV.map((group) => (
            <div className="footer__col" key={group.label}>
              <h2 className="footer__col-title">{group.label}</h2>
              <ul>
                {group.items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer__col">
            <h2 className="footer__col-title">Get started</h2>
            <ul>
              <li>
                <a href="#apply">Apply now</a>
              </li>
              <li>
                <a href={PORTAL_URL}>Customer Login</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="footer__legal">
        <div className="container">
          <p className="footer__disclaimer">{FOOTER.disclaimer}</p>

          <div className="footer__bottom">
            <p>&copy; {year} FutureCap Funding Group. All rights reserved.</p>
            <ul className="footer__legal-links">
              {FOOTER.legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
