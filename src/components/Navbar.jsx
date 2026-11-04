import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import logo from '../assets/LogoRSV.png'
import './Navbar.css'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Commercial', path: '/commercial' },
  { name: 'Residential', path: '/residential' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-inner">

        {/* ── Logo ── */}
        <Link to="/" className="navbar-logo" aria-label="RSV Infra Home">
          <img src={logo} alt="RSV Infra — Upward Growth Always" />
        </Link>

        {/* ── Desktop links ── */}
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `navbar-link${isActive ? ' active' : ''}`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && <span className="navbar-link-underline" />}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA ── */}
        <div className="navbar-cta">
          <Link to="/contact" className="btn-gold text-sm">
            Book a Site Visit
          </Link>
        </div>

        {/* ── Mobile toggle ── */}
        <button
          className="navbar-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* ── Mobile menu ── */}
      <div className={`navbar-mobile ${open ? 'open' : 'closed'}`}>
        <ul className="navbar-mobile-list">
          {navLinks.map((link, i) => (
            <li
              key={link.path}
              style={{ transitionDelay: open ? `${i * 60}ms` : '0ms' }}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `navbar-mobile-link${isActive ? ' active' : ''}`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li className="navbar-mobile-cta">
            <Link to="/contact" className="btn-gold" style={{ width: '100%' }}>
              Book a Site Visit
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
