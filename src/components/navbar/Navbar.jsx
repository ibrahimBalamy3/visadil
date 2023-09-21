import Logo from "../../assets/images/logo.svg"
import { navTitles } from "./navData"
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg position-absolute left-0 right-0 p-0" id="home">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="logo" className="logo"/>
        </a>
        <button 
          className="navbar-toggler" 
          type="button"
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <div 
          className="collapse-md navbar-collapse p-2 d-flex-md justify-content-around gap-4" 
          id="navbarSupportedContent"
          >
          <ul className="navbar-nav mb-2 mb-lg-0 gap-4 text-center">
            {
              navTitles.map((navTitle)=> (
                <li className="nav-item" key={navTitle.id}>
                  <a 
                    className="nav-link fs-6 fw-light" 
                    aria-current="page" 
                    href={`#${navTitle.url}`}
                  >{navTitle.title}</a>
                </li>
                ))
            }
          </ul>
          <a href="#" className="nav-btn">log in</a>
        </div>
    </nav>
  )
}

export default Navbar
