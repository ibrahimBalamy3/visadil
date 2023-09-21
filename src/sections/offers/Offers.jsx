import { cardsdata } from "./offersData"
import "./Offers.css"

export const Offers = () => {
  return (
    <section className="offers text-center pt-5 pb-5" id="offers">
        <div className="container">
            <div className="primary-title border-right m-auto mb-4 text-light border-light">our offers</div>
            <h3 className="fs-2 fw-bold text-capitalize m-auto mb-5 text-light">making Your Immigration Process Smooth and Stress-Free.</h3>
            <div className="row flex-nowrap">
                {
                    cardsdata.map(card => (
                        <div key={card.id} className="col-md-6 col-lg-4 p-3">
                            <div className="h-100 card">
                                <div className="img-container">
                                    <img src={card.img} className="card-img-top" alt={card.title} />
                                </div>
                                <div className="card-body text-start mt-3 mb-3 ps-4 pe-4 text-center d-flex flex-column align-items-start justify-content-center">
                                    <h5 className="card-title fs-4 fw-bold text-capitalize">{card.title}</h5>
                                    <p className="card-text w-100 text-black-50 mt-2 mb-4 text-start">{card.description}</p>
                                    <a href="#" className="primary-btn fs-6 text-capitalize mt-3">Read More</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Offers