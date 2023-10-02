import Modal from './Modal'

const Contact = () => {
  return (
    <div id='contactForm' className='flex flex-col mb-20 gap-5 justify-center py-20 items-center bg-sky-700 w-full h-full'>
      <h3 className='text-white font-bold font-inter text-5xl'>Pida su cita</h3>
      <p className='font-inter text-white'>Nuestros profesionales están a su servicio</p>
      <Modal />
    </div>
  )
}

export default Contact
