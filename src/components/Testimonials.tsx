import ReviewCard from './ReviewCard'
import user1 from '../assets/user1.webp'
import user2 from '../assets/user2.webp'
import user3 from '../assets/user3.webp'
import user4 from '../assets/user4.webp'

const reviews = [
  {
    profile: user1,
    name: 'Juan Martínez',
    score: '⭐⭐⭐⭐⭐',
    review: 'Fui a Verity Dental para un chequeo de rutina y quedé impresionado. La limpieza y el cuidado que brindaron a mis dientes fue excepcional. Definitivamente seguiré viniendo aquí.',
  },
  {
    profile: user2,
    name: 'María Rodríguez',
    score: '⭐⭐⭐⭐⭐',
    review: 'Excelente servicio. El personal es amable y muy profesional. Mi visita fue sin dolor y muy informativa. ¡Recomendaría Verity Dental a todos mis amigos y familiares!',
  },
  {
    profile: user3,
    name: 'Ana López',
    score: '⭐⭐⭐⭐',
    review: 'Verity Dental ha sido mi dentista durante años y nunca me ha decepcionado. El equipo siempre es atento y se toman el tiempo para explicar cada procedimiento.',
  },
  {
    profile: user4,
    name: 'Carlos Ramírez',
    score: '⭐⭐⭐⭐⭐',
    review: 'Me encanta el ambiente relajante y el equipo tan profesional. Recientemente tuve un blanqueamiento y los resultados fueron sorprendentes. ¡Mi sonrisa nunca lució mejor!',
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-6 lg:px-20 xl:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-pill mb-6 inline-flex">Testimonios</div>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 300,
              color: 'var(--dental-charcoal)',
              lineHeight: 1.2,
            }}
          >
            Lo que dicen{' '}
            <em style={{ color: 'var(--dental-sage-dark)', fontStyle: 'italic' }}>nuestros pacientes</em>
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {reviews.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
