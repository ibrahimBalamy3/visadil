import { cardsData } from "./workingData"
import "./Working.css"

export const Working = () => {
  return (
    <section className="working pt-5 pb-5 text-center" id="process">
        <div className="container">
            <div className="primary-title border-right m-auto mb-4 ">Working process</div>
            <h3 className="fs-2 fw-bold text-capitalize m-auto mb-5">3 Easy Steps to Get Quick Help</h3>
            <div className="row">
                {
                    cardsData.map(card => (
                        <div key={card.id} className="col-md-6 col-lg-4 d-flex justify-content-center p-4">
                            <div className="circle-card bg-light rounded-circle position-relative">
                                <div className="border-effect">
                                    <div className="sticker text-light text-center rounded-circle">
                                        <h4 className="fs-3 fw-bold m-0">0{card.id}</h4>
                                        <p className="fs-6 m-0 text-capitalize">step</p>
                                    </div>
                                </div>
                                <h3 className="fw-bold text-black text-capitalize mt-4 mt-md-5">{card.title}</h3>
                                <p className="text-black-50">{card.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Working
