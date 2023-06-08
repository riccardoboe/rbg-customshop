import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'

import 'slick-carousel/slick/slick-theme.css'
import './Artist.css'

const Artist = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <React.Fragment>
      <div className="artist-title">
        <img
          img
          src="../artisttitle.jpg"
          alt="artisttitle"
          className="artist-title-img"
        />
        <h1 className="artist-title-text">artists</h1>
        <h3>
          <span style={{ fontWeight: '200' }}>Signature</span> series
        </h3>
        <p>
          The Artist Signature Series gives you the best results of the working
          relationship our custom shop and with the talented and incredible
          artists who play our instruments.
        </p>
      </div>
      <div className="container">
        <Slider {...settings}>
          <div className="wrapper">
            <img
              img
              src="../artist/hector-bermudez-iIWDt0fXa84-unsplash.jpg"
              alt="pic1"
            />
            <h1 className="hidden-artist">
              Hector Loomis
              <br />
              <span>Appleton (WI)</span>
            </h1>
          </div>
          <div className="wrapper">
            <img
              img
              src="../artist/quinton-coetzee-Sa3EVAhnSrc-unsplash.jpg"
              alt="pic2"
            />
            <h1 className="hidden-artist">
              Quinton Hetfield
              <br />
              <span>Downey (CA)</span>
            </h1>
          </div>
          <div className="wrapper">
            <img
              img
              src="../artist/ben-collins-rutIvSaJiuQ-unsplash.jpg"
              alt="pic3"
            />
            <h1 className="hidden-artist">
              Benny Smalls
              <br />
              <span>Springfield (IL)</span>
            </h1>
          </div>
          <div className="wrapper">
            <img
              img
              src="../artist/debra-fisher-PPLpumj7ibA-unsplash.jpg"
              alt="pic4"
            />
            <h1 className="hidden-artist">
              Fisher Peres
              <br />
              <span>Tampa (FL)</span>
            </h1>
          </div>
          <div className="wrapper">
            <img
              img
              src="../artist/wyanna-wenceslao-UBqwLun5RFU-unsplash.jpg"
              alt="pic5"
            />
            <h1 className="hidden-artist">
              Wynn Hammett
              <br />
              <span>San Francisco (CA)</span>
            </h1>
          </div>
          <div className="wrapper">
            <img
              img
              src="../artist/alejandro-morelos-ZnNflI-kGDw-unsplash.jpg"
              alt="pic6"
            />
            <h1 className="hidden-artist">
              Alejandra Smith
              <br />
              <span>London (UK)</span>
            </h1>
          </div>
        </Slider>
      </div>
    </React.Fragment>
  )
}

export default Artist
