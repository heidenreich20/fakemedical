import veneer from '../assets/veneer.png'
import screw from '../assets/screw.png'
import brackets from '../assets/brackets.png'
import whitetooth from '../assets/whitetooth.png'
import crown from '../assets/crown.png'
import rootcanal from '../assets/root-canal.png'
import toothfilling from '../assets/tooth-filling.png'
import emergency from '../assets/emergency.svg'
import Card from './Card'

const specialties = [
  { icon: veneer, title: 'Veneers cerámicos', text: 'Solución cosmética permanente para dientes fracturados, descoloridos o ligeramente desalineados.' },
  { icon: screw, title: 'Implantes dentales', text: 'El método más moderno para reemplazar dientes perdidos mediante prótesis fijadas con implantes.' },
  { icon: brackets, title: 'Ortodoncia', text: 'Alineadores invisibles, ortodoncia tradicional con brackets y ortopedia dental.' },
  { icon: whitetooth, title: 'Blanqueamientos', text: 'Dientes más blancos en sólo una hora. Mejora el color sin alterar ni dañar la estructura del diente.' },
  { icon: crown, title: 'Coronas y puentes', text: 'Reparan dientes con daños o manchas severas, restaurando forma, color y función.' },
  { icon: rootcanal, title: 'Tratamiento de conductos', text: 'Limpieza del canal radicular y sellado para evitar el crecimiento bacteriano.' },
  { icon: toothfilling, title: 'Rellenos', text: 'Restauración personalizada según el tamaño y forma de la caries que presente el diente.' },
  { icon: emergency, title: 'Emergencias', text: 'Atención inmediata para resolver urgencias dentales y aliviar el dolor lo antes posible.' },
]

const Specialties = () => {
  return (
    <section
      id="specialties"
      className="py-24 px-6 lg:px-20 xl:px-32"
      style={{ background: 'var(--dental-bone)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-pill mb-6 inline-flex">Especialidades y tratamientos</div>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 300,
              color: 'var(--dental-charcoal)',
              lineHeight: 1.2,
            }}
          >
            Todo lo que tu sonrisa{' '}
            <em style={{ color: 'var(--dental-sage-dark)', fontStyle: 'italic' }}>necesita</em>
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {specialties.map(({ icon, title, text }) => (
            <Card key={title} icon={icon} title={title} text={text} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Specialties
