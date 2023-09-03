import smile from '../assets/smiling.webp'

const Hero = () => {
  return (
    <section className='flex'>
      <div className='flex relative h-[800px] w-full'>
        <img className='flex w-full aspect-video object-cover' src={smile} alt='person smiling' />
        <div className='flex gap-12 flex-col h-full ml-40 absolute items-start justify-center'>
          <h1 className='font-inter text-sky-900 font-bold text-8xl'>¡Atrévete a <p className='text-white'>volver a sonreír!</p></h1>
          <section className='flex text-white gap-6 font-inter'>
            <button className='bg-sky-900 cursor-pointer p-4 px-6 rounded-md'>Especialidades</button>
            <button className='bg-slate-800 cursor-pointer p-4 px-6 rounded-md'>Contacto</button>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Hero
