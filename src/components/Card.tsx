interface CardProps {
  title: string
  text: string
  icon: string
}

const Card = ({ title, text, icon }: CardProps) => {
  return (
    <div className="specialty-card">
      <img
        src={icon}
        alt={title}
        loading="lazy"
        decoding="async"
        width={40}
        height={40}
        className="card-icon"
      />
      <h3
        className="font-display text-[1.2rem] font-normal leading-tight"
        style={{ color: 'var(--color-dental-charcoal)' }}
      >
        {title}
      </h3>
      <p className="text-sm/relaxed" style={{ color: 'var(--color-dental-warm-gray)' }}>
        {text}
      </p>
    </div>
  )
}

export default Card
