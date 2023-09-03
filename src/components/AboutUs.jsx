import ourTeam from '../assets/ourteam.webp'

const AboutUs = () => {
  return (
    <div className='flex gap-6 flex-col my-5 font-inter'>
      <section>
        <h2 className='flex justify-center text-xl font-bold font-inter text-sky-700'>Bienvenido!</h2>
        <p className='flex text-neutral-800 mt-5 justify-center text-3xl font-inter'>Odontología profesional</p>
        <strong className='text-neutral-800 flex justify-center text-4xl font-inter'>Clínica Dental FakeDental</strong>
      </section>
      <article className='flex flex-col gap-6 text-center w-1/3 mt-4 m-auto'>
        <p>¡Hola, bienvenido a <p className='strong-text'>Beladent!</p> Somos una <p className='strong-text'>clínica dental en Santiago de Chile</p> con el objetivo de ayudar y guiar a nuestros pacientes en su camino hacia la completa salud bucodental. Nuestros dentistas te ofrecerán atención de calidad y <p className='strong-text'>tratamientos personalizados</p> para conseguir la sonrisa que siempre soñaste.</p>
        <p>Nuestro principal objetivo es darte <p className='strong-text'>soluciones eficaces</p> a través de un equipo de profesionales que buscan tu bienestar físico y emocional mediante <p className='strong-text'>diagnósticos fiables, trabajos dentales éticos e innovadores y alta tecnología que promueve tu avance.</p></p>
        <p>¿Necesitas un <p className='strong-text'>dentista en Santiago de Chile</p> o un <p className='strong-text'>dentista en Las Condes?</p> ¡Cuenta con nosotros! Has llegado al lugar correcto.</p>
        <img className='aspect-video rounded-md object-cover' src={ourTeam} alt='our dentist team' />
      </article>
    </div>
  )
}

export default AboutUs
