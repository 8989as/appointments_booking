import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="container">
            <div className="banner-container container-fluid d-flex flex-column flex-md-row justify-content-between align-items-start position-relative">
                <div className="col-md-6 d-flex flex-column gap-3">
                    <div className="banner-title">
                        <span className="text-uppercase fw-medium">Break through the noise </span>
                        <span className="fst-italic">with <strong>Cultark</strong>!</span>
                    </div>
                    <div className="banner-subtitle text-primary">
                        Where Culture, Strategy, And Creativity Collide.
                    </div>
                </div>

                <div className="col-md-5 d-flex flex-column gap-3 text-primary banner-text-wrapper">
                    <div>Ready To Make An Impact? Let’s Create Something Unforgettable!</div>
                    <div>We Craft Bold Brand Narratives, Engaging Content And Performance-Driven Campaigns That Captivate And Convert</div>
                </div>

                <img src="/assets/images/top-left.svg" className="vector-1" alt="vector" />
                <img src="/assets/images/bottom-right.svg" className="vector-2" alt="vector" />
                <img src="/assets/images/star.svg" className="stars-icon-1" alt="star" />
                <img src="/assets/images/star.svg" className="stars-icon-2" alt="star" />
                <img src="/assets/images/star.svg" className="stars-icon-3" alt="star" />
            </div>
        </div>
    );
};

export default Banner;
