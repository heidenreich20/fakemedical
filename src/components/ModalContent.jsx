export default function ModalContent({ onClose }) {
  return (
    <div className='modal'>
      <section className='bg-neutral-100 p-5 rounded-lg'>
        <button className='font-inter flex w-full justify-end text-neutral-700' onClick={onClose}>&#10006;</button>
        <div>Im a modal dialog</div>
      </section>
    </div>
  )
}
