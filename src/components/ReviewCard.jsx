const ReviewCard = ({ score, profile, review, name }) => {
  return (
    <article className='flex p-5 font-inter bg-neutral-100 rounded-lg gap-3 flex-row md:flex-col justify-center items-center md:max-w-[250px] max-w-[95%] w-full'>
      <div className='flex justify-center flex-col items-center gap-3'>
        <img loading='lazy' className='rounded-full shadow-md shadow-neutral-400' src={profile} alt='reviewer profile' />
        <p className='font-bold text-xs md:text-base text-neutral-700'>{name}</p>
        <h3 className='font-bold text-xs md:text-base text-neutral-700'>Opinión: {score}</h3>
      </div>
      <blockquote className='italic text-neutral-600'>
        <p>{review}</p>
      </blockquote>
    </article>
  )
}

export default ReviewCard
