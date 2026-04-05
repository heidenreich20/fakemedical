import { useState, useEffect } from 'react'
import Logo from '../assets/logo.avif'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#aboutUs', label: 'Quiénes somos' },
    { href: '#specialties', label: 'Especialidades' },
    { href: '#testimonials', label: 'Testimonios' },
    { href: '#contactInfo', label: 'Contacto' },
  ]

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(248,245,240,0.97)' : 'rgba(248,245,240,0.95)',
        borderBottom: `1px solid ${scrolled ? 'var(--dental-bone)' : 'transparent'}`,
        boxShadow: scrolled ? '0 2px 20px rgba(44,44,42,0.06)' : 'none',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="flex items-center justify-between px-6 lg:px-12 xl:px-20 h-20 max-w-7xl mx-auto">
        {/* Logo */}
        <a href="/" aria-label="Inicio" className="flex items-center gap-3 focus-visible:outline-none">
          <img src={Logo} alt="Verity Dental logo" className="w-9 h-9 object-contain" />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold" style={{ color: 'var(--dental-charcoal)', letterSpacing: '0.02em' }}>
              Verity Dental
            </span>
            <span className="text-xs font-light" style={{ color: 'var(--dental-warm-gray)', letterSpacing: '0.06em' }}>
              Cuidado profesional
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="nav-link">{label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contactForm"
          className="hidden md:block btn-primary text-sm"
          style={{ padding: '0.65rem 1.5rem' }}
        >
          Pide tu cita
        </a>

        {/* Burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 focus-visible:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menú"
        >
          <span
            className="block w-6 h-0.5 transition-all duration-300 origin-center"
            style={{
              backgroundColor: 'var(--dental-charcoal)',
              transform: isMenuOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none',
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: 'var(--dental-charcoal)',
              opacity: isMenuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300 origin-center"
            style={{
              backgroundColor: 'var(--dental-charcoal)',
              transform: isMenuOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : 'closed'}`}>
        <div
          className="px-6 pb-5 flex flex-col gap-1"
          style={{ borderTop: '1px solid var(--dental-bone)' }}
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="py-3 text-sm font-light"
              style={{ color: 'var(--dental-warm-gray)', borderBottom: '1px solid var(--dental-bone)' }}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contactForm"
            className="btn-primary text-center mt-3"
            onClick={() => setIsMenuOpen(false)}
          >
            Pide tu cita
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
