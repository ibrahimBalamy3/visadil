import Navbar from "../../components/navbar/Navbar"
import HeroContent from '../../components/heroContent/HeroContent'
import Container from "../../components/container/Container"
import './Hero.css'

export const Hero = () => {
  return (
    <section className="hero position-relative ps-2 pe-2" id="hero">
      <Container classes="h-100 position-relative d-flex align-items-center justify-content-center">
        <Navbar />
        <HeroContent />
      </Container>
    </section>
  )
}

export default Hero
