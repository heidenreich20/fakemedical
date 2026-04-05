interface ReviewCardProps {
  score: string
  profile: string
  review: string
  name: string
}

const ReviewCard = ({ score, profile, review, name }: ReviewCardProps) => {
  const starCount = (score.match(/⭐/g) ?? []).length

  return (
    <article className="review-card">
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"
            fill={i < starCount ? 'var(--color-dental-gold)' : 'var(--color-dental-bone)'}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <blockquote className="text-sm/relaxed italic grow" style={{ color: 'var(--color-dental-warm-gray)' }}>
        {`"${review}"`}
      </blockquote>
      <div className="flex items-center gap-3 pt-4 border-t border-dental-bone">
        <img
          src={profile}
          alt={name}
          loading="lazy"
          decoding="async"
          width={40}
          height={40}
          className="rounded-full object-cover shrink-0"
          style={{ width: 40, height: 40 }}
        />
        <div>
          <p className="text-sm font-medium" style={{ color: 'var(--color-dental-charcoal)' }}>{name}</p>
          <p className="text-xs" style={{ color: 'var(--color-dental-warm-gray)' }}>Paciente verificado</p>
        </div>
      </div>
    </article>
  )
}

export default ReviewCard
