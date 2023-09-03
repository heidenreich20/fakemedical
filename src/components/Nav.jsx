import Logo from '../assets/logo.png'

const Nav = () => {
  return (
    <nav className='flex sticky top-0 z-20 bg-white shadow-md shadow-neutral-500/[0.3] h-20 justify-center items-center gap-32'>
      <a title='home' href='/' aria-label='home' className='flex cursor-pointer gap-2 justify-center items-center'>
        <img className='w-16 relative' src={Logo} alt='tooth logo' />
        <div>
          <p className='font-inter text-md text-neutral-500 italic'>FakeDental</p>
          <p className='font-inter text-xs text-neutral-500 italic'>Cuidado profesional</p>
        </div>
      </a>
      <ul className='font-inter text-neutral-600 cursor-pointer flex gap-10'>
        <li className='transition-all duration-150 ease-linear hover:underline hover:text-sky-600'>Contacto</li>
        <li className='transition-all duration-150 ease-linear hover:underline hover:text-sky-600'>Quienes somos</li>
        <li className='transition-all duration-150 ease-linear hover:underline hover:text-sky-600'>Especialidades</li>
        <li className='transition-all duration-150 ease-linear hover:underline hover:text-sky-600'>Nuestras clínicas</li>
      </ul>
      <button className='text-neutral-100 font-semibold bg-sky-400 p-3 px-12 rounded-md'>Pide tu cita</button>
    </nav>
  )
}

export default Nav
