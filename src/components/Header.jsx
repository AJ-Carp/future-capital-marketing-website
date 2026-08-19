import { useEffect, useRef, useState } from 'react'
import { NAV, PHONE, PORTAL_URL } from '../data/content.js'
import { ChevronIcon, MenuIcon, PhoneIcon, UserIcon } from './Icons.jsx'
import logo from '../assets/FCFG-logo.png'
import './Header.css'

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileGroup, setMobileGroup] = useState(null)
  const navRef = useRef(null)

  // Close the desktop dropdown on outside click or Escape.
  useEffect(() => {
    if (!openMenu) return undefined

    function handlePointerDown(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMenu(null)
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') setOpenMenu(null)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [openMenu])

  // Lock body scroll while the mobile panel is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  function closeMobile() {
    setMobileOpen(false)
    setMobileGroup(null)
  }

  return (
    <header className="header">
      <div className="header__inner container">
        <a
          className="header__logo"
          href={import.meta.env.BASE_URL}
          aria-label="FutureCap Funding Group — home"
        >
          <img src={logo} alt="FutureCap Funding Group" width="2079" height="756" />
        </a>

        <nav className="header__nav" aria-label="Main" ref={navRef}>
          {NAV.map((group) => {
            const isOpen = openMenu === group.label
            return (
              <div className="nav-item" key={group.label}>
                <button
                  type="button"
                  className="nav-item__trigger"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={() => setOpenMenu(isOpen ? null : group.label)}
                >
                  {group.label}
                  <ChevronIcon
                    className={`nav-item__chevron${isOpen ? ' is-open' : ''}`}
                  />
                </button>
                {isOpen && (
                  <ul className="nav-menu">
                    {group.items.map((item) => (
                      <li key={item.label}>
                        <a href={item.href} onClick={() => setOpenMenu(null)}>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </nav>

        <div className="header__actions">
          <a className="header__phone" href={PHONE.href}>
            <PhoneIcon className="header__phone-icon" />
            <span>{PHONE.display}</span>
          </a>
          <a className="header__login" href={PORTAL_URL}>
            <UserIcon />
            <span>Customer Login</span>
          </a>
        </div>

        <button
          type="button"
          className="header__burger"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => (mobileOpen ? closeMobile() : setMobileOpen(true))}
        >
          <MenuIcon open={mobileOpen} />
        </button>
      </div>

      {mobileOpen && (
        <div className="mobile-nav" id="mobile-nav">
          <nav aria-label="Mobile">
            {NAV.map((group) => {
              const isOpen = mobileGroup === group.label
              return (
                <div className="mobile-nav__group" key={group.label}>
                  <button
                    type="button"
                    className="mobile-nav__trigger"
                    aria-expanded={isOpen}
                    onClick={() => setMobileGroup(isOpen ? null : group.label)}
                  >
                    {group.label}
                    <ChevronIcon
                      className={`nav-item__chevron${isOpen ? ' is-open' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <ul className="mobile-nav__list">
                      {group.items.map((item) => (
                        <li key={item.label}>
                          <a href={item.href} onClick={closeMobile}>
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            })}
          </nav>

          <div className="mobile-nav__actions">
            <a className="header__phone" href={PHONE.href}>
              <PhoneIcon className="header__phone-icon" />
              <span>{PHONE.display}</span>
            </a>
            <a className="btn btn--gold btn--block" href={PORTAL_URL}>
              Customer Login
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
