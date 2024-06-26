import smile from '../assets/smiling.webp'

const Hero = () => {
  return (
    <section className='flex'>
      <div className='flex relative h-[800px] w-full'>
        <img className='flex object-right w-full aspect-video object-cover' src={smile} alt='person smiling' />
        <div className='flex gap-12 flex-col h-full md:w-fit w-full items-center absolute md:translate-x-48 md:items-start justify-center'>
          <h1 className='font-inter text-sky-900 font-bold text-4xl lg:text-8xl'>¡Atrévete a <p className='text-white'>volver a sonreír!</p></h1>
          <section className='flex text-white gap-6 font-inter'>
            <a href='#specialties' className='bg-sky-800 hover:bg-sky-900 transition-colors duration-150 ease-in-out cursor-pointer p-4 px-6 focus-visible:outline focus-visible:outline-2 rounded-lg focus-visible:outline-sky-700 outline-offset-4'>Especialidades</a>
            <a className='bg-slate-700 hover:bg-slate-800 transition-colors duration-150 ease-in-out cursor-pointer p-4 px-6 focus-visible:outline focus-visible:outline-2 rounded-lg focus-visible:outline-sky-700 outline-offset-4'>Contacto</a>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Hero
