import "./Contact.css"

export const Contact = () => {
  return (
    <section className="contact pt-5 pb-5 ps-3 pe-4 ps-lg-0 pe-lg-0 text-center" id="contact">
        <div className="container">
            <div className="row">
                <div className="content col-lg-6 p-3 p-md-4 p-lg-5">
                    <div className="primary-title mt-5 border-right m-auto mb-4 ">Working process</div>  
                    <h3 className="fs-1 fw-bold text-capitalize mt-5 mb-5 text-light">Get in touch, Let's Take the First Step Together.</h3>
                    <p className="fs-5 mb-5 text-light">Our team is dedicated to your satisfaction. We respond within 24 hours.</p>
                </div>
                <div className="form col-lg-6 pt-5 pb-lg-5 p-lg-5 d-flex align-items-center">
                    <form action="https://formsubmit.co/contact@visadil.com" method="POST" className="row">
                        <div className="col-md-6 p-0 pe-md-3">
                            <input className="input w-100 p-2 ps-0" type="text" name="name" id="name" placeholder="full name" required/>
                        </div>
                        <div className="col-md-6 p-0 ps-md-3 mt-4 mt-md-0">
                            <input className="input w-100 p-2 ps-0" type="email" name="email" id="email" placeholder="email" required/>
                        </div>
                        <div className="col-12 ps-0 pe-0 mt-4 mb-4">
                            <input className="input w-100 p-0" type="text" name="subject" id="subject" placeholder="subject" required/>
                        </div>
                        <div className="col-12 ps-0 pe-0 mb-4">
                            <textarea className="w-100" name="message" id="message" placeholder="message" required></textarea>
                        </div>
                        <button type="submit" className="primary-btn mt-5 mt-lg-0">let's collaborate</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
