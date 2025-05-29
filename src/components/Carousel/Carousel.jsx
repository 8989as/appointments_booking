import React from 'react';
import './Carousel.css';

const Carousel = ({ darkMode }) => {
  return (
    <div className="container py-5">
      <div
        data-layer="Frame 1686557491"
        className={`d-flex justify-content-center align-items-center gap-4 gap-md-5 position-relative ${darkMode ? 'dark-mode' : ''}`}
      >
        <div
          data-svg-wrapper
          data-layer="Vector"
          className="carousel-arrow position-relative me-md-4"
        >
          <svg width="27" height="50" viewBox="0 0 27 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.9998 3.75C23.9998 3.75 3.00005 19.4004 3 25.0002C2.99995 30.5999 24 46.25 24 46.25" stroke="#2009AF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Items Container - matches Frame 2 */}
        <div
          data-layer="Frame 2"
          className="d-flex justify-content-start align-items-center gap-3 carousel-items-container"
        >
          {/* Rectangle Items */}
          <div className="carousel-item">
            {darkMode ? (
              <img className="carousel-image" src="assets/images/placeholder_dark.png" alt="" />
            ) : (
              <img className="carousel-image" src="assets/images/placeholder.png" alt="" />
            )}
          </div>
          <div className="carousel-item">
            {darkMode ? (
              <img className="carousel-image" src="assets/images/placeholder_dark.png" alt="" />
            ) : (
              <img className="carousel-image" src="assets/images/placeholder.png" alt="" />
            )}
          </div>
          <div className="carousel-item">
            {darkMode ? (
              <img className="carousel-image" src="assets/images/placeholder_dark.png" alt="" />
            ) : (
              <img className="carousel-image" src="assets/images/placeholder.png" alt="" />
            )}
          </div>
        </div>

        {/* Right Arrow - matches second Vector */}
        <div
          data-svg-wrapper
          data-layer="Vector"
          className="carousel-arrow position-relative ms-md-4"
        >
          <svg width="27" height="50" viewBox="0 0 27 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.00017 3.75C3.00017 3.75 24 19.4004 24 25.0002C24 30.5999 3 46.25 3 46.25" stroke="#2009AF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Carousel;