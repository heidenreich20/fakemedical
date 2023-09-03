import Logo from '../assets/logo.png'

const Nav = () => {
  return (
    <nav className='flex h-20 justify-center items-center gap-32'>
      <div className='flex cursor-pointer gap-2 justify-center items-center'>
        <img className='w-16 relative' src={Logo} alt='tooth logo' />
        <div>
          <p className='font-inter text-md text-neutral-500'>FakeDental</p>
          <p className='font-inter text-xs text-neutral-500'>Professional care</p>
        </div>
      </div>
      <ul className='font-inter text-neutral-600 cursor-pointer flex gap-10'>
        <li className='underline text-sky-600'>Contacto</li>
        <li>Quienes somos</li>
        <li>Especialidades</li>
        <li>Nuestras clínicas</li>
      </ul>
      <button className='text-neutral-100 font-semibold bg-sky-400 p-3 rounded-md'>Pide tu cita</button>
    </nav>
  )
}

export default Nav
