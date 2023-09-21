import "./Services.css"
import { cardsData } from "./servicesData"

export const Services = () => {
  return (
    <section className="services pt-5 pb-5 text-center" id="services">
        <div className="container">
            <div className="primary-title border-right m-auto mb-4 ">our services</div>
            <h3 className="fs-2 fw-bold text-capitalize m-auto mb-5">making Your Immigration Process Smooth and Stress-Free.</h3>
            <div className="row">
                {
                    cardsData.map(card => (
                        <div key={card.id} className="col-md-6 col-lg-3 text-start mb-4">
                            <div className="card w-100 h-100 p-4 pt-5">
                                <img src={card.img} className="card-img-top w-25 mb-3" alt={card.title} />
                                <h3 className="fs-4 text-capitalize text-black">{card.title}</h3>
                                <p className="desc fs-6 text-black-50">{card.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Services
