import ourTeam from '../assets/ourteam.avif'

const AboutUs = () => {
  return (
    <section id="aboutUs" className="py-24 px-6 lg:px-20 xl:px-32 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <img
            src={ourTeam}
            alt="Nuestro equipo de odontólogos"
            width={600}
            height={450}
            className="w-full object-cover rounded-2xl"
            style={{ aspectRatio: '4/3', boxShadow: '0 20px 60px rgba(44,44,42,0.1)' }}
            loading="lazy"
          />
          <div
            className="absolute -bottom-6 -right-4 lg:-right-8 rounded-2xl px-6 py-4 shadow-lg"
            style={{ background: 'var(--dental-sage-dark)' }}
          >
            <p className="font-display text-3xl font-semibold text-white leading-none">10+</p>
            <p style={{ fontSize: '0.75rem', color: 'white', marginTop: '2px', opacity: 0.95, whiteSpace: 'nowrap' }}>
              Años de experiencia
            </p>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="section-pill mb-6">Quiénes somos</div>
          <h2
            className="font-display mb-6"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 300,
              lineHeight: 1.2,
              color: 'var(--dental-charcoal)',
            }}
          >
            Clínica Dental{' '}
            <em style={{ color: 'var(--dental-sage-dark)', fontStyle: 'italic' }}>Verity Dental</em>
          </h2>
          <div className="divider mb-8" style={{ margin: '0 0 2rem 0' }} />
          <div className="flex flex-col gap-5" style={{ color: 'var(--dental-warm-gray)', lineHeight: 1.8 }}>
            <p>
              Somos una <strong style={{ color: 'var(--dental-charcoal)', fontWeight: 500 }}>clínica dental en Buenos Aires</strong> con el objetivo de acompañar a nuestros pacientes en su camino hacia la completa salud bucodental. Nuestros profesionales te ofrecerán atención de calidad y{' '}
              <strong style={{ color: 'var(--dental-charcoal)', fontWeight: 500 }}>tratamientos personalizados</strong> para conseguir la sonrisa que siempre soñaste.
            </p>
            <p>
              Nuestro principal objetivo es darte <strong style={{ color: 'var(--dental-charcoal)', fontWeight: 500 }}>soluciones eficaces</strong> a través de un equipo comprometido con tu bienestar físico y emocional, con diagnósticos fiables, trabajos dentales éticos e innovadores y alta tecnología.
            </p>
            <p>
              ¿Necesitás un dentista en Buenos Aires? <strong style={{ color: 'var(--dental-charcoal)', fontWeight: 500 }}>¡Llegaste al lugar correcto!</strong>
            </p>
          </div>
          <div className="flex gap-6 mt-10">
            <a href="#contactForm" className="btn-sage">Pide tu cita</a>
            <a href="#specialties" className="btn-secondary">Especialidades</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
