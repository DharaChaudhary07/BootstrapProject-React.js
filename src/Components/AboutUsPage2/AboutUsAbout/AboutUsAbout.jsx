import React from "react";
import AboutImg from '../../../assets/about-us-img2.jpg';
import './AboutUsAbout.css'

const AboutAbout = () => {
    return(
        <>
            <div className="AboutAbout">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="Aboutimg">
                                <img src={AboutImg} alt="" style={{width: "100%"}}/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="about-content d-flex">
                                <div className="btn-1">
                                    <span className="text-uppercase">About us</span>
                                </div>
                                <div className="btn">
                                    <span className="text-uppercase">Services</span>
                                </div>
                                <div className="btn">
                                    <span className="text-uppercase">History</span>
                                </div>
                            </div>
                            <p className="pt-5 pb-5" style={{color: "#929292"}}>Vestibulum ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt, lectus eu volutpat mattis, ante metus lacinia tellus, vitae condimentum nulla enim bibendum nibh. Praesent turpis risus, interdum nec venenatis id, pretium sit amet purus. Interdum et malesuada fames ac ante ipsum primis in faucibus.  Aliquam eu lorem nibh. Mauris ex dolor, rutrum in odio vel, suscipit ultrices nunc. Cras ipsum dolor, eleifend et nisl vel, tempor molestie nibh.</p>
                            <span className="text-uppercase " style={{color: "#929292", fontWeight: "bold", fontSize:"14px"}}>LEARN MORE</span>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AboutAbout;