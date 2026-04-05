import smileMobile from '../assets/smiling-mobile.avif'
import smileDesktop from '../assets/smiling-desktop.webp'

const Hero = () => {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: 'calc(100vh - 5rem)' }}>
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={smileMobile}
          type="image/avif"
        />
        <img
          src={smileDesktop}
          alt="Paciente sonriendo"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover object-[center_center] md:object-[65%_center]"
        />
      </picture>
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 flex items-center min-h-[calc(100vh-5rem)] px-6 lg:px-20 xl:px-32 max-w-7xl mx-auto">
        <div className="max-w-xl py-20">
          <div className="section-pill mb-8">
            Clínica Dental · Buenos Aires
          </div>
          <h1
            className="font-display mb-6"
            style={{
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              lineHeight: 1.05,
              fontWeight: 300,
              color: 'var(--color-dental-charcoal)',
            }}
          >
            Atrévete a
            <br />
            <em style={{ color: 'var(--color-dental-sage-dark)', fontStyle: 'italic' }}>
              volver a sonreír
            </em>
          </h1>

          <p className="mb-10 max-w-sm text-base/relaxed font-light" style={{ color: 'var(--color-dental-warm-gray)' }}>
            Odontología de calidad con un equipo comprometido con tu salud y bienestar.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contactForm" className="btn-primary">Pide tu cita</a>
            <a href="#specialties" className="btn-secondary">Ver especialidades</a>
          </div>
          <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-dental-bone">
            {[
              { number: '10+', label: 'Años de experiencia' },
              { number: '2.000+', label: 'Pacientes atendidos' },
              { number: '8', label: 'Especialidades' },
            ].map(({ number, label }) => (
              <div key={label}>
                <p className="font-display text-[1.75rem] font-semibold leading-none" style={{ color: 'var(--color-dental-charcoal)' }}>
                  {number}
                </p>
                <p className="text-xs mt-0.5 tracking-wide" style={{ color: 'var(--color-dental-warm-gray)' }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
