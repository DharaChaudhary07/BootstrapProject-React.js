import React from "react";
import AboutBannerImg from '../../../assets/about-us-img.jpg';
import './AboutBanner.css';

const AboutBanner = () => {
    return (
        <div className="about-banner">
            <div className="about-banner-img" style={{ backgroundImage: `url(${AboutBannerImg})`, height: "500px", width: "100%"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-light text-center"> About Us</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;