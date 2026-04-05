import { useState, useEffect } from 'react'
import Logo from '../assets/logo.avif'

const navLinks = [
  { href: '#aboutUs', label: 'Quiénes somos' },
  { href: '#specialties', label: 'Especialidades' },
  { href: '#testimonials', label: 'Testimonios' },
  { href: '#contactInfo', label: 'Contacto' },
]

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'shadow-[0_2px_20px_rgba(44,44,42,0.06)] border-b border-dental-bone'
          : 'border-b border-transparent'
      }`}
      style={{ backgroundColor: 'rgba(248,245,240,0.97)', backdropFilter: 'blur(12px)' }}
    >
      <div className="flex items-center justify-between px-6 lg:px-12 xl:px-20 h-20 max-w-7xl mx-auto">
        {/* Logo */}
        <a href="/" aria-label="Inicio" className="flex items-center gap-3">
          <img src={Logo} alt="Verity Dental logo" width={36} height={36} className="w-9 h-9 object-contain" />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold tracking-wide" style={{ color: 'var(--color-dental-charcoal)' }}>
              Verity Dental
            </span>
            <span className="text-xs font-light tracking-widest" style={{ color: 'var(--color-dental-warm-gray)' }}>
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
        <a href="#contactForm" className="btn-primary hidden md:block" style={{ padding: '0.65rem 1.5rem' }}>
          Pide tu cita
        </a>

        {/* Burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menú"
          aria-expanded={isMenuOpen}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-px transition-all duration-300 origin-center"
              style={{
                backgroundColor: 'var(--color-dental-charcoal)',
                transform: i === 0 && isMenuOpen ? 'rotate(45deg) translate(3px, 3px)'
                  : i === 2 && isMenuOpen ? 'rotate(-45deg) translate(3px, -3px)'
                  : 'none',
                opacity: i === 1 && isMenuOpen ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : 'closed'}`}>
        <div className="px-6 pb-5 flex flex-col gap-1 border-t border-dental-bone">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="py-3 text-sm font-light border-b border-dental-bone"
              style={{ color: 'var(--color-dental-warm-gray)' }}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a href="#contactForm" className="btn-primary text-center mt-3" onClick={() => setIsMenuOpen(false)}>
            Pide tu cita
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
