import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export default function ModalContent ({ onClose }) {
  // Create state variables to store form data
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    message: '',
    specialist: 'crowns and bridges' // Default value
  })

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault() // Prevent the default form submission behavior

    // Display an alert with the form data
    alert(JSON.stringify(formData, null, 2))

    // Optionally, you can send the form data to a server here

    // Close the modal
    onClose()
  }

  return (
    <div className='modal'>
      <section className='bg-sky-700 p-5 w-fit rounded-lg'>
        <div className='flex w-full justify-end'>
          <button
            className='font-inter justify-end text-neutral-100'
            onClick={onClose}
          >
            &#10006;
          </button>
        </div>
        <form
          className='flex flex-col font-inter text-neutral-100 gap-2 mt-5'
          action='submit'
          onSubmit={handleSubmit}
        >
          <div className='flex justify-between gap-10'>
            <section className='flex flex-col gap-3'>
              <label htmlFor='name'>Nombre</label>
              <input
                onChange={handleInputChange}
                required
                className='rounded-sm p-2 text-neutral-700'
                type='text'
                id='name'
                name='name'
                value={formData.name}
              />
              <label htmlFor='surname'>Apellido</label>
              <input
                onChange={handleInputChange}
                required
                className='rounded-sm p-2 text-neutral-700'
                type='text'
                id='surname'
                name='surname'
                value={formData.surname}
              />
              <label htmlFor='email'>Email</label>
              <input
                onChange={handleInputChange}
                required
                className='rounded-sm p-2 text-neutral-700'
                type='email'
                id='email'
                name='email'
                value={formData.email}
              />
            </section>
            <section className='flex flex-col gap-3'>
              <label htmlFor='phone'>Teléfono</label>
              <input
                onChange={handleInputChange}
                required
                className='rounded-sm p-2 text-neutral-700'
                type='tel'
                id='phone'
                name='phone'
                value={formData.phone}
              />
              <label htmlFor='message'>Mensaje</label>
              <textarea
                autoComplete='off'
                onChange={handleInputChange}
                className='rounded-sm h-full text-neutral-700 p-1'
                name='message'
                id='message'
                cols='30'
                rows='5'
                value={formData.message}
              />
            </section>
          </div>
          <label htmlFor='specialist'>Especialidad</label>
          <select
            className='text-neutral-700 rounded-sm p-2'
            name='specialist'
            id='specialist'
            value={formData.specialist}
            onChange={handleInputChange}
          >
            <option value='crowns and bridges'>Coronas y puentes</option>
            <option value='veneers'>Veneers</option>
            <option value='implants'>Implantes</option>
            <option value='brackets'>Ortodoncia</option>
            <option value='whitening'>Blanqueamiento</option>
          </select>
          <div className='flex justify-end'>
            <button
              type='submit'
              className='mt-5 font-inter bg-sky-500 text-white px-3 py-2 rounded-sm'
            >
              Enviar
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}
