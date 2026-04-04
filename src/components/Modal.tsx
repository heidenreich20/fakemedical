import { useState } from 'react'
import { createPortal } from 'react-dom'
import ModalContent from './ModalContent'

interface ModalProps {
  buttonLabel?: string  // ? means optional
  variant?: string
}

const Modal = ({ buttonLabel = 'Reservar cita', variant = 'sage' }: ModalProps) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className={variant === 'sage' ? 'btn-sage' : 'btn-primary'}
        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
      >
        {buttonLabel}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
        </svg>
      </button>

      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  )
}

export default Modal
