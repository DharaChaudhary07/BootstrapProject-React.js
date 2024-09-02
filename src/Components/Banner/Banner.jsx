import React from "react";
import BannerImg from "../../assets/banner-img.jpg";
import "./Banner.css";

const Banner = () => {
    return (
        <>
            <div className="banner">
                <div className="banner-img" style={{ backgroundImage: `url(${BannerImg})`, height: "800px" , width: "100%" , zIndex: "-1" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-10">
                                <div className="banner-content text-center">
                                    <h2 className="text-light">WE CARRY ONLY THE FINEST</h2>
                                    <h5 className="text-light">ITEMS AVAILABLE</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;