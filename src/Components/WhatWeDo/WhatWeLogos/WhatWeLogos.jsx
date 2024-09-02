import React from "react";
import './WhatWeLogos.css';
import Img1 from '../.././../assets/client-1h.png';


const WhatWeLogos = () => {
    return(
        <>
            <div className="WhatWeLogos " style={{ marginTop: "100px" }}> 
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <img src={Img1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default WhatWeLogos;