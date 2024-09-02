import React from "react";
import AboutImg from "../../assets/about-img1.jpg";
import AboutImg2 from "../../assets/about-img2.jpg";
import AboutImg3 from "../../assets/about-img3.jpg";
import AboutImg4 from "../../assets/about-img4.jpg";
import AboutImg5 from "../../assets/about-img5.jpg";
import AboutImg6 from "../../assets/about-img6.jpg";
import {FaStar} from "react-icons/fa6";
import "./AboutUs.css";


const AboutUs = () => {
    return (
        <>
            <div className="AboutUs" style={{ marginTop: "50px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="about-product text-center align-items-center">
                                <div className="about-img" style={{ width: "400px", height: "400px",marginLeft: "", marginRight: "200px"}}>
                                    <img src={AboutImg} alt="" />
                                </div>
                                <div className="about-content">
                                    <h5 className="">GOLD WALL CLOCK</h5>
                                    <div className="star">
                                        <FaStar /> 
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />S
                                    </div>
                                    <span>$250</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-5">
                            <div className="about-product text-center align-items-center">
                                <div className="about-img" style={{ width: "400px", height: "400px",marginLeft: "", marginRight: "200px"}}>
                                    <img src={AboutImg2} alt="" />
                                </div>
                                <div className="about-content">
                                    <h5 className="text-uppercase">Black Alarm Clock</h5>
                                    <div className="star">
                                        <FaStar /> 
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <span>$250</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="about-product text-center align-items-center">
                                <div className="about-img" style={{ width: "400px", height: "400px",marginLeft: "", marginRight: "200px"}}>
                                    <img src={AboutImg3} alt="" />
                                </div>
                                <div className="about-content">
                                    <h5 className="text-uppercase">Anigram Rooster</h5>
                                    <div className="star">
                                        <FaStar /> 
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <span>$210</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="about-product text-center align-items-center">
                                <div className="about-img" style={{ width: "400px", height: "400px",marginLeft: "", marginRight: "200px"}}>
                                    <img src={AboutImg4} alt="" />
                                </div>
                                <div className="about-content">
                                    <h5 className="text-uppercase">White Wall Clock</h5>
                                    <div className="star">
                                        <FaStar /> 
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <span>$250</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="about-product text-center align-items-center">
                                <div className="about-img" style={{ width: "400px", height: "400px",marginLeft: "", marginRight: "200px"}}>
                                    <img src={AboutImg5} alt="" />
                                </div>
                                <div className="about-content">
                                    <h5 className="text-uppercase">Flash</h5>
                                    <div className="star">
                                        <FaStar /> 
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <span>$135</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="about-product text-center align-items-center">
                                <div className="about-img" style={{ width: "400px", height: "400px",marginLeft: "", marginRight: "200px"}}>
                                    <img src={AboutImg6} alt="" />
                                </div>
                                <div className="about-content">
                                    <h5 className="text-uppercase">Brown Chair</h5>
                                    <div className="star">
                                        <FaStar /> 
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <span>$460</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AboutUs;