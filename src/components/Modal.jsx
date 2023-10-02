import { useState } from 'react'
import { createPortal } from 'react-dom'
import ModalContent from './ModalContent'

const Modal = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <button onClick={() => setShowModal(true)} className='flex gap-2 hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white outline-offset-4 hover:stroke-white stroke-sky-700 hover:text-white transition-colors duration-250 ease-in-out justify-center mt-10 font-inter items-center px-10 py-4 bg-neutral-50 rounded-lg text-sky-700'>Reservar <svg className='stroke-inherit' width='24px' height='24px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' stroke='#000000'><g id='SVGRepo_bgCarrier' strokeWidth='0'></g><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g><g id='SVGRepo_iconCarrier'> <path d='M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z' stroke='inherit' strokeWidth='2' strokeLinecap='round'></path></g></svg></button>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
        document.body
      )}
    </>
  )
}

export default Modal
