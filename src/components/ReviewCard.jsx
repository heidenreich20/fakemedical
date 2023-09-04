const ReviewCard = ({ score, profile, review }) => {
  return (
    <article className='flex p-5 font-inter bg-neutral-100 rounded-lg gap-3 flex-row md:flex-col justify-center items-center md:max-w-[250px] max-w-[95%] w-full'>
      <div className='flex justify-center flex-col items-center gap-3'>
        <img className='rounded-full' src={profile} alt='reviewer profile' />
        <h3 className='font-bold'>Opinión: {score}</h3>
      </div>
      <blockquote className='italic'>
        <p>{review}</p>
      </blockquote>
    </article>
  )
}

export default ReviewCard
