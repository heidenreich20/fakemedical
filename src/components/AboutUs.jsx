import ourTeam from '../assets/ourteam.webp'
import tooth from '../assets/tooth-icon.png'

const AboutUs = () => {
  return (
    <div id='aboutUs' className='flex gap-6 flex-col my-16 font-inter'>
      <section className='flex flex-col items-center justify-center'>
        <h2 className='flex items-center outline mb-5 outline-2 p-1 px-4 rounded-full justify-center text-xl font-bold font-inter text-sky-700'><img className='flex aspect-auto w-8' src={tooth} />Bienvenido!</h2>
        <p className='flex text-neutral-800 mt-5 justify-center text-3xl font-inter'>Odontología profesional</p>
        <strong className='text-neutral-800 flex justify-center text-2xl lg:text-4xl font-inter'>Clínica Dental FakeDental</strong>
      </section>
      <article className='flex flex-col gap-6 text-center w-2/3 md:w-1/3 mt-4 m-auto'>
        <h5>¡Hola, bienvenido a <p className='strong-text'>FakeDental!</p> Somos una <p className='strong-text'>clínica dental en Buenos Aires</p> con el objetivo de ayudar y guiar a nuestros pacientes en su camino hacia la completa salud bucodental. Nuestros dentistas te ofrecerán atención de calidad y <p className='strong-text'>tratamientos personalizados</p> para conseguir la sonrisa que siempre soñaste.</h5>
        <h5>Nuestro principal objetivo es darte <p className='strong-text'>soluciones eficaces</p> a través de un equipo de profesionales que buscan tu bienestar físico y emocional mediante <p className='strong-text'>diagnósticos fiables, trabajos dentales éticos e innovadores y alta tecnología que promueve tu avance.</p></h5>
        <h5>¿Necesitas un <p className='strong-text'>dentista en Argentina</p> o un <p className='strong-text'>dentista en Buenos Aires?</p> ¡Conta con nosotros! Llegaste al lugar correcto.</h5>
        <img className='aspect-video rounded-md object-cover' src={ourTeam} alt='our dentist team' />
      </article>
    </div>
  )
}

export default AboutUs
