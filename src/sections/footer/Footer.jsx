import Logo from "../../assets/images/footerLogo.svg"
import "./Footer.css"

export const Footer = () => {
  return (
    <footer className="footer pt-5 pb-5">
        <div className="container">
            <div className="row g-5 g-md-3 g-lg-0">
                <div className="col-md-6 col-lg-3 d-flex flex-column align-items-center justify-content-center d-md-block">
                    <h4 className="title fs-4 mb-4">Get in touch</h4>
                    <div className="data">
                        <div className="data-container d-flex flex-column flex-md-row align-items-center gap-1 gap-md-3 text-light mb-4 mb-md-3 text-center text-md-start ">
                            <i className="fa-solid fa-location-dot fs-5"></i>
                            <p className="mb-0 text-center text-md-start">Bd Roudani ,14 Etage 2, N°4 25000 - Khouribga, Morocco</p>
                        </div>
                        <div className="data-container d-flex flex-column flex-md-row align-items-center gap-1 gap-md-3 text-light mb-4 mb-md-3 text-center text-md-start">
                            <i className="fa-solid fa-phone"></i>
                            <p className="mb-0 text-center text-md-start">+212602340804</p>
                        </div>
                        <div className="data-container d-flex flex-column flex-md-row align-items-center gap-1 gap-md-3 text-light mb-4 mb-md-3 text-center text-md-start">
                            <i className="fa-solid fa-envelope"></i>
                            <p className="mb-0 text-center text-md-start">Contact@visadil.com</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-1 d-flex flex-column align-items-center justify-content-center align-items-md-start justify-content-md-start">
                    <h4 className="title fs-4 mb-4">links</h4>

                    <a href="#about" className="text-light text-capitalize">about</a>
                    <a href="#offers" className="text-light text-capitalize">offers</a>
                    <a href="#services" className="text-light text-capitalize">services</a>
                    <a href="#contact" className="text-light text-capitalize">contact</a>
                </div>

                <div className="col-md-6 col-lg-2 d-flex flex-column align-items-center justify-content-center d-md-block">
                    <h4 className="title fs-4 mb-4">menu</h4>
                    <a href="#offers" className="text-light text-capitalize mb-1 d-block">Study Abroad</a>
                    <a href="#offers" className="text-light text-capitalize mb-1 d-block">Work Abroad</a>
                    <a href="#offers" className="text-light text-capitalize mb-1 d-block">Internship Abroad</a>
                    <a href="#offers" className="text-light text-capitalize mb-1 d-block">Treatment Abroad</a>
                    <a href="#offers" className="text-light text-capitalize mb-1 d-block">Travel Abroad</a>
                    <a href="#offers" className="text-light text-capitalize mb-1 d-block">Card Resident</a>
                </div>

                <div className="col-md-6 col-lg-2 ms-auto d-flex flex-column align-items-center justify-content-center d-md-block">
                    <img className="img-fluid mb-4" src={Logo} alt="" />
                    <div className="social-links">
                        <a href="#" className="social-link">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#" className="social-link">
                            <i className="fa-brands fa-tiktok"></i>
                        </a>
                        <a href="#" className="social-link">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#" className="social-link">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
                <div className="col-12 pt-5 d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-start gap-3 text-center">
                    <h3 className="logo text-capitalize fs-5 mb-0">©visadil</h3>
                    <p className="fs-6 text-light mb-0">copyright 2021 all rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer