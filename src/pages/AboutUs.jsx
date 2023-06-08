import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const AboutUs = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="home-container">
        <img src="../../backgroundabout.jpg" alt="background" />
        <div className="home-wrapper">
          <div className="image-text-container">
            <div className="image-text">
              <h1>ABOUT US</h1>
              <h4>We love to get feedback!</h4>
              <p>
                We will be more than happy to solve your problems. Scroll down
                and fill up the contact form and we will get to you ass soon as
                possible
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div>our message</div>
      <hr />
      <div>reviews</div>
      <hr />
      <Footer />
    </React.Fragment>
  )
}

export default AboutUs
