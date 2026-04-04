interface CardProps {
  title: string
  text: string
  icon: string
}

const Card = ({ title, text, icon }: CardProps) => {
  
  return (
    <div className="specialty-card">
      <img src={icon} alt={title} className="card-icon" loading="lazy" />
      <h3
        className="font-display"
        style={{ 
          fontSize: '1.2rem', 
          fontWeight: 400, 
          color: 'var(--dental-charcoal)', 
          lineHeight: 1.3 
        }}
      >
        {title}
      </h3>
      <p style={{ 
        fontSize: '0.875rem', 
        color: 'var(--dental-warm-gray)', 
        lineHeight: 1.7 
      }}>
        {text}
      </p>
    </div>
  );
};

export default Card;