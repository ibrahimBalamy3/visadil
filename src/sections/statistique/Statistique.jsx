import { useState } from "react"
import { statsData } from "./statsData"
import Container from "../../components/container/Container"
import ScrollTrigger from "react-scroll-trigger"
import CountUp from 'react-countup'
import "./Statistique.css"

export const Statistique = () => {
    const [ counterOn, setCounterOn ] = useState(false)
  return (
    <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
        <section className="stat pt-5 pb-5 text-light text-center" id="stat">
            <Container>
                <div className="row gap-4 gap-md-0">
                    {
                        statsData.map(item => (
                            <div key={item.id} className="col-md-6 col-lg-4  d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center mb-md-5 mb-lg-0">
                                <div className="image">
                                    <img className="img-fluid" src={item.img} alt="" />
                                </div>
                                <div className="content">
                                    <h3 className="fs-2 fw-bold text-light text-center text-md-start mb-0">
                                        +{counterOn && <CountUp start={0} end={item.number} duration={2} delay={0} />}
                                    </h3>
                                    <p className="fs-5 text-light text-capitalize text-center text-md-start mb-0">{item.category}</p>
                                </div>
                            </div> 
                        ))
                    }
                </div>
            </Container>
        </section>
    </ScrollTrigger>
  )
}

export default Statistique
