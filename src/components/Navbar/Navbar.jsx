import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 800) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <header className={navbar ? 'navbar active' : 'navbar'}>
      <div className="navbar-wrapper">
        <Link to="/" className="link">
          <img
            src={navbar ? '../../../rbglogo1.png' : '../../rbglogo2.png'}
            alt="logo"
          />
        </Link>
        <nav>
          <Link to="/" className="link">
            HOME
          </Link>
          <Link to="/about-us" className="link">
            ABOUT US
          </Link>
          <Link to="/contact-us" className="link">
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
