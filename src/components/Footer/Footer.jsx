import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-left">
          <h1>
            RBG Custom Shop <span>Unleash your inner rockstar with us.</span>
          </h1>
          <h3>
            +1 555-666-0100
            <br />
            info@rbgcustom.com
          </h3>
        </div>
        <div className="footer-right">
          <a href="">Back to Top</a>

          <a href="/">Home page</a>
          <a href="/about-us">About page</a>
          <a href="/contact-us">Contact page</a>
          <a
            href="https://github.com/riccardoboe"
            target="_blank"
            rel="noreferrer"
            style={{ textTransform: 'uppercase' }}
          >
            Official Store
          </a>
        </div>
        <hr className="footer-hr" />
        <div className="bottom">
          <div>
            <span>HQ</span> - 444 Battery St. | San Francisco, CA
          </div>
          <div>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
          <div className="copyright">
            Terms | Privacy | RBGuitars, LLC © 2023
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
