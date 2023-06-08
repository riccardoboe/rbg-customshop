import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <React.Fragment>
      <section id="contact">
        <div className="contact-box">
          <div className="contact-links">
            <div className="links">
              <h3>Shoot us a message</h3>
              <div className="link">
                <a>
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </div>
              <div className="link">
                <a>
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </div>
              <div className="link">
                <a>
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
              <div className="link">
                <a>
                  <i className="fa-regular fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form>
              <div className="form-item">
                <input type="text" name="sender" required />
                <label>Your name</label>
              </div>
              <div className="form-item">
                <input type="text" name="email" required />
                <label>Your Email</label>
              </div>
              <div className="form-item">
                <textarea className="" name="message" required></textarea>
                <label>How can we help?</label>
              </div>
              <button className="submit-btn">
                Send &nbsp;<i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default ContactForm
