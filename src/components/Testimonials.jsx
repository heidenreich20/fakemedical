import ReviewCard from './ReviewCard'
import scoreIcon from '../assets/score.png'
import user1 from '../assets/user1.jpg'
import user2 from '../assets/user2.jpg'
import user3 from '../assets/user3.jpg'
import user4 from '../assets/user4.jpg'

const Testimonials = () => {
  return (
    <section className='flex md:mx-0 mx-5 items-center flex-col w-full mb-20'>
     <h2 className='flex items-center outline mb-20 outline-2 p-1 px-4 rounded-full justify-center text-sm md:text-xl font-bold font-inter text-sky-700'><img className='flex aspect-auto w-6 md:w-8' src={scoreIcon} />Testimonios</h2>
      <div className='costumGrid justify-items-center sm:w-2/3 w-full text-center'>
        <ReviewCard profile={user1} score='⭐⭐⭐⭐⭐' review='Lorem ipsum dolor sit amet consectetur, adipisicing elit. At incidunt eligendi error ducimus officia quibusdam dolores cum tempore nobis facilis. Magni dolorum deleniti pariatur ad doloremque, obcaecati itaque saepe aut?' />
        <ReviewCard profile={user2} score='⭐⭐⭐⭐⭐' review='Lorem ipsum dolor sit amet consectetur, adipisicing elit. At incidunt eligendi error ducimus officia quibusdam dolores cum tempore nobis facilis. Magni dolorum deleniti pariatur ad doloremque, obcaecati itaque saepe aut?' />
        <ReviewCard profile={user3} score='⭐⭐⭐⭐' review='Lorem ipsum dolor sit amet consectetur, adipisicing elit. At incidunt eligendi error ducimus officia quibusdam dolores cum tempore nobis facilis. Magni dolorum deleniti pariatur ad doloremque, obcaecati itaque saepe aut?' />
        <ReviewCard profile={user4} score='⭐⭐⭐⭐' review='Lorem ipsum dolor sit amet consectetur, adipisicing elit. At incidunt eligendi error ducimus officia quibusdam dolores cum tempore nobis facilis. Magni dolorum deleniti pariatur ad doloremque, obcaecati itaque saepe aut?' />
      </div>
    </section>
  )
}

export default Testimonials
