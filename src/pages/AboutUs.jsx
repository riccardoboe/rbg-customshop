import React from 'react'
import GoToTop from '../GoToTop'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const AboutUs = () => {
  return (
    <React.Fragment>
      <GoToTop />
      <Navbar />
      <div className="home-container">
        <img src="../../backgroundabout.jpg" alt="background" />
        <div className="home-wrapper">
          <div className="image-text-container">
            <div className="image-text">
              <h1>ABOUT US</h1>
              <h4>All you need to enhance your musical journey</h4>
              <p>
                Your ultimate destination for all things guitar-related!
                Established with a passion for music and a love for guitars, we
                aim to provide musicians of all levels with a one-stop-shop for
                their instrument needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="message">
        <div className="message-wrapper">
          <img
            src="/reviews/john-pratt-I4zSNSxR8oA-unsplash.jpg"
            alt="oldguy"
          />
          <div className="message-text">
            <h1>our message</h1>
            <p>
              We are driven by our commitment to quality, convenience, and
              community. We take pride in offering a carefully curated selection
              of high-quality instruments that inspire musicians to reach new
              heights of creativity and expression. <br /> We offer handpicked,
              high-quality instruments, a user-friendly online platform for easy
              shopping, and foster a supportive community of musicians
            </p>
          </div>
        </div>
      </div>

      <hr />
      <div className="reviews">
        <img
          src="/reviewbackground.jpg"
          alt="review-bg"
          className="reviews-background"
        />
        <div className="reviews-wrapper">
          <h1 className="review-title">client's reviews</h1>
          <div className="review-one">
            <div className="review-name">
              <img
                src="/reviews/vitalii-khodzinskyi-VKHwG0LdyPQ-unsplash.jpg"
                alt="review"
                style={{ filter: 'none', marginRight: '10px' }}
              />
              <h1>Vitaly kodinksy</h1>
            </div>
            <br />
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <p>
              I must say the guitar I bought has exceeded all my expectations.
              The craftsmanship is top-notch, with flawless finishing and
              attention to detail. The playability is smooth and effortless.
              Whether I'm strumming chords or shredding solos, this guitar
              performs flawlessly. I highly recommend this guitar to any serious
              musician or guitar enthusiast.
            </p>
          </div>
          <div className="review-two">
            <div className="review-name">
              <img
                src="/reviews/elias-jonassonn-1LKIBPi4_KI-unsplash.jpg"
                alt="review"
                style={{ filter: 'none', marginRight: '10px' }}
              />
              <h1>elias jonass</h1>
            </div>
            <br />
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <p>
              I've been playing guitar for years, and this instrument has
              quickly become my go-to choice. From blues to rock, jazz to
              country, this guitar handles it all with finesse. The tonal range
              is incredible, allowing me to dial in the perfect sound for any
              genre or playing style. The build quality is exceptional, and the
              guitar feels solid and reliable in my hands. It stays in tune
              remarkably well, even during intense playing sessions.
            </p>
          </div>
          <div className="review-one">
            <div className="review-name">
              <img
                src="/reviews/alekon-pictures-gqX0rPCmdiU-unsplash.jpg"
                alt="review"
                style={{ filter: 'none', marginRight: '10px' }}
              />
              <h1>alex pickens</h1>
            </div>
            <br />
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <p>
              The bass I bought is a true masterpiece both in terms of
              aesthetics and functionality. The elegant design caught my eye
              immediately, and I couldn't resist adding it to my collection.
              Beyond its stunning appearance, this bass delivers on all fronts.
              The sound is warm, vibrant, and full-bodied, offering a harmonious
              blend of highs and lows. Recording in the studio or performing on
              stage, this bass stands out in terms of both sound quality and
              stage presence. It's a true gem that I'm proud to play.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default AboutUs
