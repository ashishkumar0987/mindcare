import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../images/ngoLogo1-min.jpg";
import logo1 from "../images/ngoLogo2-min.jpg";
import logo2 from "../images/ngoLogo3-min.jpg";
import logo3 from "../images/ngoLogo4-min.jpg";
import logo4 from "../images/ngoLogo5-min.jpg";

class Logoslider extends Component {
  render() {
    const logos = [logo, logo1, logo2, logo3, logo4];

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <>
        <div className="home-logoslider-mainContainer">
          <h2 className="slider-title">
            NGOs We Support
          </h2>
          <Slider {...settings}>
            {logos.map((logoSrc, index) => (
              <div className="home-logoslider-container" key={index}>
                <div className="logo-image-wrapper">
                  <img 
                    src={logoSrc} 
                    alt={`NGO Logo ${index + 1}`} 
                    className="logo-image"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        
        <style jsx>{`
          .home-logoslider-mainContainer {
            width: 100%;
            max-width: 1200px;
            margin: 40px auto;
            padding: 20px;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          }

          .slider-title {
            text-align: center;
            color: #333;
            margin-bottom: 30px;
            font-size: 28px;
            font-weight: 600;
            position: relative;
            padding-bottom: 15px;
          }

          .slider-title:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 3px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 3px;
          }

          .home-logoslider-container {
            display: flex !important;
            justify-content: center;
            align-items: center;
            padding: 20px;
            outline: none;
          }

          .logo-image-wrapper {
            width: 100%;
            height: 180px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: white;
            border-radius: 12px;
            padding: 15px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            transition: all 0.3s ease;
            overflow: hidden;
          }

          .logo-image-wrapper:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }

          .logo-image {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            transition: transform 0.3s ease;
          }

          .logo-image:hover {
            transform: scale(1.05);
          }

          /* Slick slider customizations */
          .slick-dots {
            bottom: -40px;
          }

          .slick-dots li button:before {
            color: #667eea;
            font-size: 10px;
          }

          .slick-dots li.slick-active button:before {
            color: #764ba2;
          }

          .slick-prev:before, .slick-next:before {
            color: #667eea;
            font-size: 24px;
          }

          .slick-prev {
            left: -40px;
            z-index: 1;
          }

          .slick-next {
            right: -40px;
            z-index: 1;
          }

          /* Responsive adjustments */
          @media (max-width: 768px) {
            .home-logoslider-mainContainer {
              margin: 20px auto;
              padding: 15px;
            }

            .slider-title {
              font-size: 24px;
              margin-bottom: 20px;
            }

            .logo-image-wrapper {
              height: 150px;
              padding: 10px;
            }

            .slick-prev {
              left: -25px;
            }

            .slick-next {
              right: -25px;
            }
          }

          @media (max-width: 480px) {
            .logo-image-wrapper {
              height: 120px;
            }

            .slick-prev:before, .slick-next:before {
              font-size: 18px;
            }
          }
        `}</style>
      </>
    );
  }
}

export default Logoslider;