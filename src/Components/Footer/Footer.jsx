import React from "react";
import './Footer.css'


const Footer = () => {
    return (
        <>

        <div>
            <footer className="footer bg-light d-flex">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <h4 className="text-uppercase">Customer Service</h4>
                            <ul>
                                <li><a href="#">Help & Contact Us</a></li>
                                <li><a href="#">Returns & Refunds</a></li>
                                <li><a href="#">Online Stores</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <h4 className="text-uppercase">Company</h4>
                            <ul>
                                <li><a href="#">What We Do</a></li>
                                <li><a href="#">Available Services</a></li>
                                <li><a href="#">Latest Posts</a></li>
                                <li><a href="#">FAQs</a></li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <h4 className="text-uppercase">Social Media</h4>
                            <ul>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">Tumblr</a></li>
                                <li><a href="#">Pinterest</a></li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <h4 className="text-uppercase">Profile</h4>
                            <ul>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">Checkout</a></li>
                                <li><a href="#">Order Tracking</a></li>
                                <li><a href="#">Help & Support</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="line" style={{width: "100%", height: "1px", backgroundColor: "black", marginTop: "50px"}}></div> */}
                    <span className="mt-5">© 2021 Qode Interactive, All Rights Reserved</span>
                </div>
            </footer>
        </div>
        </>
    )
}

export default Footer;