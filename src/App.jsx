import './App.css'
import Main from './components/main/Main'
import About from './sections/about/About'
import Contact from './sections/contact/Contact'
import Footer from './sections/footer/Footer'
import Hero from './sections/hero/Hero'
import Offers from './sections/offers/Offers'
import Services from './sections/services/Services'
import Statistique from './sections/statistique/Statistique'
import Working from './sections/working/Working'

function App() {
  return(
    <>
      <Main>
        <Hero/>
        <About />
        <Statistique />
        <Services />
        <Offers />
        <Working />
        <Contact />
        <Footer />
      </Main>
    </>
  )
}

export default App
