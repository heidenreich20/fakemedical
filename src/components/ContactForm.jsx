import location from '../assets/location.png'
import phone from '../assets/phone.png'
import time from '../assets/time.png'
import mail from '../assets/mail.png'
import map from '../assets/map.png'

const ContactForm = () => {
  return (
    <section className='flex mb-10 lg:flex-row flex-col items-center justify-center gap-16 lg:gap-24 text-neutral-800'>
      <div className='flex p-5 lg:p-0 flex-col gap-12'>
        <div>
          <h3 className='text-4xl font-inter'>Contáctanos</h3>
          <p className='italic font-inter'>Contáctanos para pedir tu cita</p>
        </div>
        <ul className='pl-5 font-inter flex flex-col gap-5'>
          <li className='flex items-center gap-3'>
            <img className='aspect-square h-6 outline outline-1 outline-sky-700 outline-offset-4 rounded-full' src={location} alt='location icon' />
            <div>
              <strong className='text-neutral-700 text-sm'>Dirección</strong>
              <p className='text-neutral-500 text-sm'>Avenida Siempreviva 742, Buenos Aires, Argentina</p>
            </div>
          </li>
          <li className='flex items-center gap-3'>
            <img className='aspect-square h-6 outline outline-1 outline-sky-700 outline-offset-4 rounded-full' src={phone} alt='location icon' />
            <div>
              <strong className='text-neutral-700 text-sm'>Número de contacto</strong>
              <p className='text-neutral-500 text-sm'>Llamadas a +54 (011) 111-222-333, Whatsapp +54 1234-1234</p>
            </div>
          </li>
          <li className='flex items-center gap-3'>
            <img className='aspect-square h-6 outline outline-1 outline-sky-700 outline-offset-4 rounded-full' src={time} alt='location icon' />
            <div>
              <strong className='text-neutral-700 text-sm'>Abierto desde</strong>
              <p className='text-neutral-500 text-sm'>Lunes a viernes de 9AM a 7PM</p>
            </div>
          </li>
          <li className='flex items-center gap-3'>
            <img className='aspect-square h-6 outline outline-1 outline-sky-700 outline-offset-4 rounded-full' src={mail} alt='location icon' />
            <div>
              <strong className='text-neutral-700 text-sm'>Mail</strong>
              <p className='text-neutral-500 text-sm'>fakedental@gmail.com</p>
            </div>
          </li>
        </ul>
      </div>
      <img className='lg:aspect-video aspect-square rounded-lg object-cover w-2/3 lg:w-1/3' src={map} alt='google maps' />
    </section>
  )
}

export default ContactForm
