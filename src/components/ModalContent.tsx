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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(onClose, 2000)
  }

  if (submitted) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-panel flex flex-col items-center text-center"
          style={{ maxWidth: 380 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
            style={{ background: 'var(--color-dental-bone)' }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-dental-sage-dark)" strokeWidth="2">
              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="font-display text-[1.75rem] font-light mb-2" style={{ color: 'var(--color-dental-charcoal)' }}>
            ¡Solicitud enviada!
          </h3>
          <p className="text-sm" style={{ color: 'var(--color-dental-warm-gray)' }}>
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
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="font-display text-[1.75rem] font-light leading-tight" style={{ color: 'var(--color-dental-charcoal)' }}>
              Reservar cita
            </h2>
            <p className="text-sm mt-1" style={{ color: 'var(--color-dental-warm-gray)' }}>
              Completá el formulario y te contactamos
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-0 cursor-pointer"
            style={{ background: 'var(--color-dental-bone)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-dental-warm-gray)" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group">
              <label className="form-label" htmlFor="name">Nombre</label>
              <input className="form-input" type="text" id="name" name="name" placeholder="Tu nombre" required value={formData.name} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="surname">Apellido</label>
              <input className="form-input" type="text" id="surname" name="surname" placeholder="Tu apellido" required value={formData.surname} onChange={handleInputChange} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input className="form-input" type="email" id="email" name="email" placeholder="tu@email.com" required value={formData.email} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="phone">Teléfono</label>
              <input className="form-input" type="tel" id="phone" name="phone" placeholder="+54 11 ..." required value={formData.phone} onChange={handleInputChange} />
            </div>
          </div>

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

          <div className="form-group">
            <label className="form-label" htmlFor="message">
              Mensaje <span className="normal-case tracking-normal font-light">(opcional)</span>
            </label>
            <textarea className="form-input" id="message" name="message" placeholder="¿Algún detalle adicional?" value={formData.message} onChange={handleInputChange} />
          </div>

          <div className="flex justify-end gap-3 mt-2">
            <button type="button" className="btn-secondary" onClick={onClose}>Cancelar</button>
            <button type="submit" className="btn-sage">Enviar solicitud</button>
          </div>
        </form>
      </div>
    </div>
  )
}
