import React from 'react';
import Image from '../assets/tem.jpg';

const Features = () => {
    return (
        <div className="fe-ctn">  
            <div className="fe-box">
                <img src={Image} alt="" className="img-ctn"/>
                <h6> Free Shipping </h6>
            </div>
            <div className="fe-box">
                <img src={Image} alt="" className="img-ctn"/>
                <h6> Online Order </h6>
            </div>
            <div className="fe-box">
                <img src={Image} alt="" className="img-ctn"/>
                <h6> Save Money </h6>
            </div>
            <div className="fe-box">
                <img src={Image} alt="" className="img-ctn"/>
                <h6> Promotions </h6>
            </div>
            <div className="fe-box">
                <img src={Image} alt="" className="img-ctn"/>
                <h6> Costing </h6>
            </div>
             <div className="fe-box">
                <img src={Image} alt="" className="img-ctn"/>
                <h6> Coding </h6>
            </div>
        </div>
    )
}

export default Features;

