import { useState } from 'react'

interface ModalContentProps {
  onClose: () => void
}

export default function ModalContent({ onClose }: ModalContentProps) {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    message: '',
    specialist: 'crowns and bridges',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      onClose()
    }, 2000)
  }

  if (submitted) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-panel" style={{ textAlign: 'center', maxWidth: 380 }} onClick={(e) => e.stopPropagation()}>
          <div
            style={{
              width: 64, height: 64, borderRadius: '50%',
              background: 'var(--dental-bone)', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.5rem',
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--dental-sage-dark)" strokeWidth="2">
              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="font-display" style={{ fontSize: '1.75rem', fontWeight: 300, marginBottom: '0.5rem', color: 'var(--dental-charcoal)' }}>
            ¡Solicitud enviada!
          </h3>
          <p style={{ color: 'var(--dental-warm-gray)', fontSize: '0.9rem' }}>
            Nos pondremos en contacto contigo a la brevedad para confirmar tu cita.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
          <div>
            <h2 className="font-display" style={{ fontSize: '1.75rem', fontWeight: 300, color: 'var(--dental-charcoal)', lineHeight: 1.2 }}>
              Reservar cita
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--dental-warm-gray)', marginTop: '4px' }}>
              Completá el formulario y te contactamos
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              width: 32, height: 32, borderRadius: '50%',
              background: 'var(--dental-bone)', border: 'none',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}
            aria-label="Cerrar"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--dental-warm-gray)" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Row 1 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Nombre</label>
              <input className="form-input" type="text" id="name" name="name" placeholder="Tu nombre" required value={formData.name} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="surname">Apellido</label>
              <input className="form-input" type="text" id="surname" name="surname" placeholder="Tu apellido" required value={formData.surname} onChange={handleInputChange} />
            </div>
          </div>

          {/* Row 2 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input className="form-input" type="email" id="email" name="email" placeholder="tu@email.com" required value={formData.email} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="phone">Teléfono</label>
              <input className="form-input" type="tel" id="phone" name="phone" placeholder="+54 11 ..." required value={formData.phone} onChange={handleInputChange} />
            </div>
          </div>

          {/* Specialist */}
          <div className="form-group">
            <label className="form-label" htmlFor="specialist">Especialidad</label>
            <select className="form-input" id="specialist" name="specialist" value={formData.specialist} onChange={handleInputChange}>
              <option value="crowns and bridges">Coronas y puentes</option>
              <option value="veneers">Veneers cerámicos</option>
              <option value="implants">Implantes dentales</option>
              <option value="brackets">Ortodoncia</option>
              <option value="whitening">Blanqueamiento</option>
              <option value="rootcanal">Tratamiento de conductos</option>
              <option value="filling">Rellenos</option>
              <option value="emergency">Emergencia</option>
            </select>
          </div>

          {/* Message */}
          <div className="form-group">
            <label className="form-label" htmlFor="message">Mensaje <span style={{ fontWeight: 300, textTransform: 'none', letterSpacing: 0 }}>(opcional)</span></label>
            <textarea className="form-input" id="message" name="message" placeholder="¿Algún detalle adicional?" value={formData.message} onChange={handleInputChange} />
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '0.5rem' }}>
            <button type="button" className="btn-secondary" onClick={onClose}>Cancelar</button>
            <button type="submit" className="btn-sage">Enviar solicitud</button>
          </div>
        </form>
      </div>
    </div>
  )
}
