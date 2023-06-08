import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Artist from '../components/artists/Artist'
import Footer from '../components/Footer/Footer'
import { Link } from 'react-router-dom'
import Contact from '../components/Contact/Contact'
import ContactForm from '../components/ContactForm/ContactForm'

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="home-container">
        <video
          id="videoBG"
          poster="/vidback/homeloading.png"
          autoPlay
          muted
          loop
        >
          <source src="/vidback/video.mp4" type="video/mp4" />
        </video>
        <div className="home-wrapper">
          <div className="image-text-container">
            <div className="image-text">
              <h1>
                RB GUITARS{' '}
                <span style={{ fontWeight: '200' }}>CUSTOM SHOP</span>
              </h1>
              <h4>Your ultimate guitar experience</h4>
              <p>
                Welcome to our custom shop guitar store, a haven for discerning
                musicians and enthusiasts seeking the ultimate expression of
                their musical identity. Step into a world where craftsmanship,
                artistry, and personalization converge to create instruments as
                unique as the players who wield them.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="title">
          <span>Our </span>
          <strong>Services</strong>
        </p>

        <div className="services-container">
          <div className="services-wrapper">
            <img src="../../serviceguitar.jpg" alt="guitars" />
            <h2>
              <span>Custom guitars</span>
            </h2>
            <p>
              Unique and personalized guitar that is tailored to the
              specifications and preferences of a specific musician. It is
              handcrafted by skilled luthiers and guitar builders who work
              closely with the player to create a one-of-a-kind guitar that
              meets their needs in terms of sound, playability, aesthetics, and
              functionality.
            </p>
          </div>

          <div className="services-wrapper">
            <img src="../../servicebass.jpg" alt="basses" />
            <h2>
              <span>Custom basses</span>
            </h2>
            <p>
              Custom bass guitars individually crafted instrument that is
              tailored to the artistic vision of a bassist. It is meticulously
              built by skilled artisans or bass luthiers who work closely with
              the musician to create a bass that delivers exceptional sonic
              characteristics, and comfortable playability.
            </p>
          </div>

          <div className="services-wrapper">
            <img src="../../servicerepair.jpg" alt="repairs" />
            <h2>
              <span>Instrument repair</span>
            </h2>
            <p>
              We offer a professional service that specializes in the
              maintenance, restoration, and repair of musical instruments. This
              services is provided by our skilled technicians and luthiers who
              have in-depth knowledge and expertise in working with various
              instruments.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <Artist />
      <hr />

      <div className="about-container">
        <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ fontWeight: '200' }}>OUR</span> STORY
        </h1>
        <div className="about-wrapper">
          <div className="about-left">
            <h1>
              For twenty years, RBG has been bringing <br />
              <span>
                game-changing instruments that power players world-wide.
              </span>
            </h1>

            <Link to="/about-us" className="about-link">
              See who we are &rarr;
            </Link>
          </div>
          <div className="about-right">
            <div className="about-center">
              <h1 style={{ textAlign: 'center' }}>
                core <span>values</span>
              </h1>
            </div>
            <ul>
              <li>
                <i className="fa-solid fa-circle-check"></i>{' '}
                <strong>Passion for Music:</strong> A genuine love and passion
                for music, particularly for guitars and the art of playing them.
              </li>
              <li>
                <i className="fa-solid fa-circle-check"></i>{' '}
                <strong>Customer Satisfaction:</strong> Ensuring that every
                customer has a positive experience and is satisfied with their
                purchase and the service received.
              </li>
              <li>
                <i className="fa-solid fa-circle-check"></i>{' '}
                <strong>Expertise and Knowledge:</strong> Providing a
                knowledgeable and skilled staff who can offer expert advice,
                guidance, and product information to customers.
              </li>
              <li>
                <i className="fa-solid fa-circle-check"></i>{' '}
                <strong>Quality Products:</strong> Offering a wide selection of
                high-quality guitars, basses, accessories, and related products
                from reputable brands.
              </li>
              <li>
                <i className="fa-solid fa-circle-check"></i>{' '}
                <strong>Community Engagement:</strong> Actively engaging with
                the local music community, sponsoring events, collaborating with
                musicians, and supporting local artists and bands.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr />
      <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>
        <span style={{ fontWeight: '200' }}>GET IN</span> TOUCH
      </h1>
      <Contact />
      <hr
        style={{
          marginTop: '50px',
          marginBottom: '50px',
          border: 'transparent',
        }}
      />
      <ContactForm />
      <hr
        style={{
          marginBottom: '0',
          border: 'transparent',
        }}
      />

      <Footer />
    </React.Fragment>
  )
}

export default Home
