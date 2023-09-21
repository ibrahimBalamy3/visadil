import WomenImg from "../../assets/images/woman.png"
import './About.css'

export const About = () => {
  return (
    <section className="about" id="about">
        <div className="container">
            <div className="row  align-items-center">
                <div className="col-lg-4 mt-5 mb-5">
                    <div className="primary-title mb-5">about us</div>
                    <h2 className="fs-2 fw-bold c-yellow text-capitalize mt-3">Our Team, Your Passport to Success.</h2>
                    <p className="text-black text-left mt-3 mb-5">Visadil has grown into a leading visa consultancy and processing firm. Located in the heart of Tanger, Morocco, our team is composed of experienced visa consultants, legal professionals, and processing staff. Together, we're committed to providing our clients with comprehensive, efficient, and expert immigration services.</p>
                    <a href="" className="primary-btn">let's talk</a>
                </div>
                <div className="col-lg-8">
                    <div className="image">
                        <img className='img-fluid  object-fit-cover' src={WomenImg} alt="woman image" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About