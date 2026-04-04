interface ReviewCardProps {
  score: string
  profile: string
  review: string
  name: string
}

const ReviewCard = ({ score, profile, review, name }: ReviewCardProps) => {
  const starCount = (score?.match(/⭐/g) || []).length;

  return (
    <article className="review-card">
      <div style={{ display: 'flex', gap: '3px' }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width="14" height="14" viewBox="0 0 24 24"
            fill={i < starCount ? 'var(--dental-gold)' : 'var(--dental-bone)'}
            style={{ flexShrink: 0 }}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      <blockquote
        style={{
          fontSize: '0.9rem',
          lineHeight: 1.75,
          color: 'var(--dental-warm-gray)',
          fontStyle: 'italic',
          margin: 0,
          flexGrow: 1,
        }}
      >
        {review}
      </blockquote>

      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '12px', 
        paddingTop: '1rem', 
        borderTop: '1px solid var(--dental-bone)' 
      }}>
        <img
          src={profile}
          alt={name}
          loading="lazy"
          style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
        />
        <div>
          <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--dental-charcoal)', margin: 0 }}>
            {name}
          </p>
          <p style={{ fontSize: '0.75rem', color: 'var(--dental-warm-gray)', margin: 0 }}>
            Paciente verificado
          </p>
        </div>
      </div>
    </article>
  );
};

export default ReviewCard;