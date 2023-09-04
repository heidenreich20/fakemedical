import ReviewCard from './ReviewCard'
import scoreIcon from '../assets/score.png'
import user1 from '../assets/user1.jpg'
import user2 from '../assets/user2.jpg'
import user3 from '../assets/user3.jpg'
import user4 from '../assets/user4.jpg'

const Testimonials = () => {
  return (
    <section className='flex md:mx-0 mx-5 items-center flex-col w-fit md:w-full mb-20'>
      <h2 className='flex items-center outline mb-20 outline-2 p-1 px-4 rounded-full justify-center text-sm md:text-xl font-bold font-inter text-sky-700'><img className='flex aspect-auto w-6 md:w-8' src={scoreIcon} />Testimonios</h2>
      <div className='costumGrid justify-items-center sm:w-2/3 w-full text-center'>
        <ReviewCard profile={user1} name='Juan Martinez' score='⭐⭐⭐⭐⭐' review='Fui a FakeDental para un chequeo de rutina y quedé impresionado. La limpieza y el cuidado que brindaron a mis dientes fue excepcional. Definitivamente seguiré viniendo aquí para mis necesidades dentales.' />
        <ReviewCard profile={user2} name='Maria Rodriguez' score='⭐⭐⭐⭐⭐' review='Excelente servicio en FakeDental. El personal es amable y profesional. Mi visita al dentista fue sin dolor y muy informativa. ¡Recomendaría FakeDental a todos mis amigos y familiares!' />
        <ReviewCard profile={user3} name='Ana Lopez' score='⭐⭐⭐⭐' review='FakeDental ha sido mi elección de dentista durante años, y nunca me ha decepcionado. El equipo siempre es atento y se toman el tiempo para explicar cualquier procedimiento. ' />
        <ReviewCard profile={user4} name='Carlos Ramirez' score='⭐⭐⭐⭐' review='Me encanta FakeDental. El ambiente es relajante, y el personal es muy profesional. Recientemente tuve un blanqueamiento dental aquí, y los resultados fueron sorprendentes. ¡Mi sonrisa nunca ha lucido mejor!' />
      </div>
    </section>
  )
}

export default Testimonials
