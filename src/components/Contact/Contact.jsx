import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'
const Contact = () => {
  return (
    <React.Fragment>
      <div className="contact-container">
        <div className="contact-wrapper">
          <div className="map">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d788.1918868435836!2d-122.40135362376377!3d37.795487053479334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858060477c73fb%3A0x57dd4a07dc9a200b!2s444%20Battery%20St%2C%20San%20Francisco%2C%20CA%2094111!5e0!3m2!1sen!2sus!4v1685920700241!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contact-right">
            <h1 className="contact-right-title">find us</h1>
            <div className="grid2x2">
              <div className="box ">
                <div>
                  <i className="fa-solid fa-map-location-dot"></i>
                  <h1>location:</h1>
                  <p>444 Battery St. | San Francisco, CA</p>
                </div>
              </div>
              <div className="box ">
                <div>
                  <i className="fa-solid fa-phone"></i>
                  <h1>phone:</h1>
                  <p>+1 555-666-0100</p>
                </div>
              </div>
              <div className="box ">
                <div>
                  <i className="fa-solid fa-envelope"></i>
                  <h1>mail:</h1>
                  <p>info@rbgcustom.com</p>
                </div>
              </div>
              <div className="box ">
                <div>
                  <i className="fa-solid fa-briefcase"></i>
                  <h1>careers:</h1>
                  <p>careers@rbgcustom.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Contact
