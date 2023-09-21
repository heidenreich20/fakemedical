import { useState } from 'react'
import Logo from '../assets/logo.png'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='sticky top-0 z-20 bg-neutral-50/[0.95] shadow-md shadow-neutral-500/[0.3]'>
      <div className='flex lg:justify-center justify-between lg:px-0 px-5 items-center gap-8 lg:gap-16 xl:gap-32 h-20'>
        <a title='home' href='/' aria-label='home' className='flex cursor-pointer gap-2 justify-center items-center'>
          <img className='md:w-fit w-12' src={Logo} alt='tooth logo' />
          <div className='md:block hidden'>
            <p className='font-inter md:text-base text-sm text-neutral-500 italic'>FakeDental</p>
            <p className='font-inter text-xs text-neutral-500 italic'>Cuidado profesional</p>
          </div>
        </a>
        <ul className='font-inter md:flex hidden text-base xl:text-lg text-neutral-600 cursor-pointer gap-5 lg:gap-10'>
          <li className='transition-all duration-150 ease-linear hover:underline hover:text-sky-600'>Contacto</li>
          <li className='transition-all duration-150 ease-linear hover:underline hover:text-sky-600'><a href='#aboutUs'>Quienes somos</a></li>
          <li className='transition-all duration-150 ease-linear hover:underline hover:text-sky-600'><a href='#specialties'>Especialidades</a></li>
        </ul>
        <button onClick={toggleMenu}>
          <svg className='md:hidden block stroke-sky-700' width='64px' height='64px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M4 6H20M4 12H20M4 18H20' stroke='inherit' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          </svg>
        </button>
        <a href='#contactForm' className='text-neutral-100 md:block hidden box-content font-semibold bg-sky-700 p-2 xl:p-3 px-6 xl:px-12 rounded-md'>Pide tu cita</a>
      </div>
      <div className={`burger-menu h-[100vh] bg-black/[0.5]  ${isMenuOpen ? 'burger-menu-open' : 'burger-menu-close'}`}>
        <div className='h-fit border-t-2 bg-neutral-50/[0.95] w-full border-sky-600'>
          <ul className='font-inter w-full justify-around flex p-5 text-base xl:text-lg text-neutral-600 cursor-pointer'>
            <li className='transition-all duration-150 ease-linear hover:underline hover:text-sky-600'>Contacto</li>
            <li className='transition-all duration-150 ease-linear hover:underline hover:text-sky-600'><a href='#aboutUs'>Quienes somos</a></li>
            <li className='transition-all duration-150 ease-linear hover:underline hover:text-sky-600'><a href='#specialties'>Especialidades</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
