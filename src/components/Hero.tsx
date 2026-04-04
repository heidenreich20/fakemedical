import smile from '../assets/smiling.webp'

const Hero = () => {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: 'calc(100vh - 5rem)' }}>
      {/* Background image */}
      <img
        src={smile}
        alt="Paciente sonriendo"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ objectPosition: '65% center' }}
      />

      {/* Gradient overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full min-h-[calc(100vh-5rem)] px-6 lg:px-20 xl:px-32 max-w-7xl mx-auto">
        <div className="max-w-xl py-20">
          {/* Label */}
          <div className="section-pill mb-8">
            <span>Clínica Dental · Buenos Aires</span>
          </div>

          {/* Headline */}
          <h1
            className="font-display mb-6"
            style={{
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              lineHeight: '1.05',
              fontWeight: 300,
              color: 'var(--dental-charcoal)',
            }}
          >
            Atrévete a
            <br />
            <em style={{ color: 'var(--dental-sage-dark)', fontStyle: 'italic' }}>
              volver a sonreír
            </em>
          </h1>

          {/* Subtext */}
          <p
            className="mb-10 max-w-sm"
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.7',
              color: 'var(--dental-warm-gray)',
              fontWeight: 300,
            }}
          >
            Odontología de calidad con un equipo comprometido con tu salud y bienestar.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            <a href="#contactForm" className="btn-primary">
              Pide tu cita
            </a>
            <a href="#specialties" className="btn-secondary">
              Ver especialidades
            </a>
          </div>

          {/* Trust bar */}
          <div
            className="flex flex-wrap gap-6 mt-12 pt-8"
            style={{ borderTop: '1px solid var(--dental-bone)' }}
          >
            {[
              { number: '10+', label: 'Años de experiencia' },
              { number: '2.000+', label: 'Pacientes atendidos' },
              { number: '8', label: 'Especialidades' },
            ].map(({ number, label }) => (
              <div key={label}>
                <p
                  className="font-display"
                  style={{ fontSize: '1.75rem', fontWeight: 600, color: 'var(--dental-charcoal)', lineHeight: 1 }}
                >
                  {number}
                </p>
                <p style={{ fontSize: '0.75rem', color: 'var(--dental-warm-gray)', marginTop: '2px', letterSpacing: '0.04em' }}>
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
