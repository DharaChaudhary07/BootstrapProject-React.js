import React from "react";
import ConceptImg from "../../assets/concept-img.jpg";
import "./Concept.css";

const Concept = () => {
    return (
       <>
            <div className="concept ">
                <div className="concept-img" style={{ backgroundImage: `url(${ConceptImg})`, height: "", width: "100%"  }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="concept-content text-center">
                                    <h1 className="mb-3">Most Powerful Concept</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient</p>
                                    <div className="btn">
                                        Purchase
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
       </>
    );
};

export default Concept;