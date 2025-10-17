import Hero from './components/Hero'
import TrustBadges from './components/TrustBadges'
import Services from './components/Services'
import Certifications from './components/Certifications'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrustBadges />
      <Services />
      <Certifications />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
