const Card = ({ title, text, icon }) => {
  return (
    <div className='flex bg-neutral-100 p-5 rounded-lg items-center flex-col gap-4 max-w-[250px]'>
      <img className='w-16 outline outline-2 outline-sky-700 rounded-full outline-offset-8' src={icon} alt='veneers' />
      <h3 className='font-bold font-inter text-xl text-sky-700'>{title}</h3>
      <p className='font-inter'>{text}</p>
    </div>
  )
}

export default Card
