import veneer from '../assets/veneer.png'
import screw from '../assets/screw.png'
import brackets from '../assets/brackets.png'
import whitetooth from '../assets/whitetooth.png'
import tooth from '../assets/tooth-icon.png'
import crown from '../assets/crown.png'
import rootcanal from '../assets/root-canal.png'
import toothfilling from '../assets/tooth-filling.png'
import emergency from '../assets/emergency.svg'
import Card from './Card'

const Specialties = () => {
  return (
    <div id='specialties' className='flex items-center flex-col w-full mb-20'>
      <h2 className='flex items-center outline mb-20 outline-2 p-1 px-4 rounded-full justify-center text-sm md:text-xl font-bold font-inter text-sky-700'><img className='flex aspect-auto w-6 md:w-8' src={tooth} />Especialidades y Tratamientos</h2>
      <section className='costumGrid justify-items-center sm:w-2/3 w-full text-center'>
        <Card icon={veneer} title='Veneers cerámicos' text='Una solución cosmética permanente para dientes fracturados, descoloridos o ligeramente desalineados.' />
        <Card icon={screw} title='Implantes dentales' text='El método más moderno para solucionar este problema es la prótesis fijada mediante implantes dentales.' />
        <Card icon={brackets} title='Ortodoncia' text='Nuevo tratamiento con Alineadores Invisibles. Ortodoncia tradicional con brackets. Ortopedía.' />
        <Card icon={whitetooth} title='Blanqueamientos' text='¡Dientes más blancos en sólo una hora! Mejora el color del diente sin alterar ni dañar su estructura.' />
        <Card icon={crown} title='Coronas y puentes' text='Reparan dientes con daños o manchas severas. Se restaura la forma del diente, el color y la función.' />
        <Card icon={rootcanal} title='Tratamiento de conductos' text='Limpiar el canal y sellarlo para que las bacterias no vuelvan a crecer en su interior.' />
        <Card icon={toothfilling} title='Rellenos' text='Dependiendo del tamaño y forma de la caries que presente el diente, se elige la mejor forma de restaurarlo.' />
        <Card icon={emergency} title='Emergencias' text='Atención y contención necesaria en esos momentos, para solucionar el problema lo antes posible.' />
      </section>
    </div>
  )
}

export default Specialties
