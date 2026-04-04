import Nav from './Nav'
import Hero from './Hero'
import AboutUs from './AboutUs'
import Specialties from './Specialties'
import Contact from './Contact'
import Testimonials from './Testimonials'
import ContactForm from './ContactForm'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AboutUs />
        <Specialties />
        <Contact />
        <Testimonials />
        <ContactForm />
      </main>
      <footer
        style={{
          background: 'var(--dental-charcoal)',
          padding: '2rem 1.5rem',
          textAlign: 'center',
        }}
      >
        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem', letterSpacing: '0.04em' }}>
          © {new Date().getFullYear()} Verity Dental · Todos los derechos reservados · Buenos Aires, Argentina
        </p>
      </footer>
    </>
  )
}

export default App
