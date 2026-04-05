import location from '../assets/location.webp'
import phone from '../assets/phone.webp'
import time from '../assets/time.webp'
import mail from '../assets/mail.webp'

const contactItems = [
  {
    icon: location,
    label: 'Dirección',
    value: 'Avenida Siempreviva 742, Buenos Aires',
  },
  {
    icon: phone,
    label: 'Teléfono',
    value: '+54 (011) 111-222-333 · WhatsApp +54 1234-1234',
  },
  {
    icon: time,
    label: 'Horarios',
    value: 'Lunes a viernes, 9:00 – 19:00 hs.',
  },
  {
    icon: mail,
    label: 'Email',
    value: 'VerityDental@gmail.com',
  },
]

const ContactForm = () => {
  return (
    <section
      id="contactInfo"
      className="py-24 px-6 lg:px-20 xl:px-32"
      style={{ background: 'var(--dental-bone)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-pill mb-6 inline-flex">Contacto</div>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 300,
              color: 'var(--dental-charcoal)',
            }}
          >
            Encontranos en{' '}
            <em style={{ color: 'var(--dental-sage-dark)', fontStyle: 'italic' }}>Buenos Aires</em>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-8">
            {contactItems.map(({ icon, label, value }) => (
              <div key={label} className="contact-item">
                <div className="contact-icon-wrap">
                  <img src={icon} alt={label} loading="lazy" style={{ width: 18, height: 18 }} />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--dental-warm-gray)',
                      marginBottom: '2px',
                    }}
                  >
                    {label}
                  </p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--dental-charcoal)', lineHeight: 1.5 }}>
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(44,44,42,0.1)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016849939856!2d-58.38375938477024!3d-34.60373888045943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM2JzEzLjUiUyA1OMKwMjInNTMuNiJX!5e0!3m2!1ses!2sar!4v1234567890"
              width="100%"
              style={{ aspectRatio: '4/3', border: 0, borderRadius: '20px', display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Verity Dental"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
