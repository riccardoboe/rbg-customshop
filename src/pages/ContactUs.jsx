import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import ContactForm from '../components/ContactForm/ContactForm'
import Contact from '../components/Contact/Contact'
import GoToTop from '../GoToTop'

const ContactUs = () => {
  return (
    <React.Fragment>
      <GoToTop />
      <Navbar />
      <div className="home-container">
        <img src="../../backgroundcontact.jpg" alt="background" />

        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <ContactForm />
        </div>
      </div>
      <hr
        style={{
          marginTop: '50px',
          marginBottom: '50px',
          border: 'transparent',
        }}
      />
      <Contact />
      <Footer />
    </React.Fragment>
  )
}

export default ContactUs
