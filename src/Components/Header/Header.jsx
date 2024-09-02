import React from "react";
import Logo from "../../assets/logo.png"
import { FaBars } from "react-icons/fa6";
import "./Header.css"



const Header = () => {

    const list = [{
        name: "Main Home",
    }, {
        name: "Minimal Home",
    },{
        name: "Masonry Home",
    },{
        name: "Classic Home",
    },{
        name:"Passepartout Home",
    },{
        name:"Left Menu Home",
    },{
        name:"Boxed Home",
    },{
        name:"Full Screen Home",
    },{
        name:"Product Showcase",
    },{
        name:"Slider Showcase",
    },{
        name:"Simple Home",
    },{
        name:"Split Showcase",
    },{
        name:"Landing Page"
    }];

    const list2 = [{
        name: "About Us",
    },{
        name: "What We Do",
    },{
        name: "Our Team",
    },{
        name: "Meet The Crew",
    },{
        name: "Team Member",
    },{
        name: "Our Services",
    },{
        name: "Pricing Plans",
    },{
        name: "Payment"
    },{
        name:"Testimonials",
    },{
        name: "Gift Card",
    },{
        name: "Terms & Conditions",
    },{
        name: "Contact Us",
    },{
        name: "Leave Us A Note",
    },{
        name: "FAQ",
    },{
        name: "Coming Soon",
    }];

    const list3 = [{
        name: "Left Sidebar",
    },{
        name: "With Filter",
    },{
        name: "Masonry - Grid",
    },{
        name: "Masonary - Wide"
    },{
        name: "Shop Carousel"
    },{
        name: "Shop Boxed"
    },{
        name: "Single Catagory"
    }];

    return (
        <>
            <header className="">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-2 p-3">
                            <img src={Logo} alt="logo" className=""/> 
                        </div>
                        <div className="col-8">
                            <nav>
                            <ul className="d-flex justify-content-center">
                                <li className="p-3">
                                    <a href="#" className="text-decoration-none text-light mb-5">HOME</a>
                                    <div className="dropdown-menu justify-content-center text-light p-3 mt-2 rounded">
                                    <ul className="text-light list-unstyled">
                                        { list.map((list)=>(
                                            <li className={list.class} key={list.name}>
                                                <a href="#" className="dropdown-item">
                                                    {list.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                    </div>
                                </li>
                                <li className="p-3">
                                    <a href="#" className="text-decoration-none text-light">PAGES</a>
                                    <div className="dropdown-menu text-light p-3 mt-2 rounded">
                                    <ul className="text-light list-unstyled">
                                        { list2.map((list2)=>(
                                            <li className={list2.class} key={list2.name}>
                                                <a href="#" className="dropdown-item">
                                                        {list2.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                    </div>
                                </li>
                                <li className="p-3">
                                    <a href="#" className="text-decoration-none text-light">SHOP</a>
                                    <div className="dropdown-menu text-light p-3 mt-2 rounded">
                                        <ul className="text-light list-unstyled">
                                        <h6 className="text-dark font-weight-bold cursor-pointer text-center mb-3" style={{fontSize:"14px", fontWeight:"bold"}}>SHOP TYPES</h6 >
                                        { list3.map((list3)=>(
                                            <li className={list3.class} key={list3.name}>
                                                <a href="#" className="dropdown-item">
                                                    {list3.name}
                                                </a>
                                            </li>
                                        ))}
                                        </ul>
                                    </div>
                                </li>
                                <li className="p-3">
                                    <a href="#" className="text-decoration-none text-light">PORTFOLIO</a>
                                </li>
                                <li className="p-3">
                                    <a href="#" className="text-decoration-none text-light">BLOG</a>
                                </li>
                                <li className="p-3">
                                    <a href="#" className="text-decoration-none text-light">ELEMENTS</a>
                                </li>
                            </ul>
                            </nav>
                        </div>
                        <div className="col-2 justify-content-end d-flex">
                            <a href="#" className="text-decoration-none text-light">
                                {/* <span className="ml-3">CART ($0) </span> */}
                            <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                                <FaBars className="fs-2 p-1"  />
                            </button>
                            {/* <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <div>
                                        I will not close if you click outside of me.
                                    </div>
                                </div>
                            </div> */}
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
};

export default Header;