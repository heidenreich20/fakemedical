import smile from '../assets/smiling.webp'

const Hero = () => {
  return (
    <div className='flex relative h-[800px]'>
      <img className='flex w-full aspect-video object-cover' src={smile} alt='person smiling' />
      <div className='flex h-full ml-40 absolute items-center'>
        <h1 className='font-inter text-neutral-800 font-bold text-8xl'>¡Atrévase a <p className='text-sky-700'>volver a sonreír!</p></h1>
      </div>
    </div>
  )
}

export default Hero
