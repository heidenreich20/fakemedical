import Modal from './Modal'

const Contact = () => {
  return (
    <section
      id="contactForm"
      className="py-24 px-6 text-center bg-dental-warm-gray"
    >
      <div className="max-w-2xl mx-auto">
        <div
          className="section-pill mb-8 inline-flex text-neuutral-800"
          style={{ borderColor: 'rgba(255,255,255,0.2)'}}
        >
          Tu sonrisa nos importa
        </div>

        <h2
          className="font-display mb-4"
          style={{
            fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
            fontWeight: 300,
            lineHeight: 1.15,
            color: 'white',
          }}
        >
          ¿Listo para tu{' '}
          <em style={{ color: 'var(--dental-sage)', fontStyle: 'italic' }}>primera visita?</em>
        </h2>

        <p
          style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: '1rem',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
          }}
        >
          Nuestros profesionales están disponibles para brindarte la atención que merecés.
          <br className="hidden md:block" />
          Pedí tu cita online y te contactamos a la brevedad.
        </p>

        <Modal buttonLabel="Reservar cita ahora" variant="light" />
      </div>
    </section>
  )
}

export default Contact
