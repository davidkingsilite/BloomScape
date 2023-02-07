import React from 'react';
import Appstorelogo from '../assets/Screen Shot 2023-01-25 at 3.50.20 PM.png';
import Googlestore from '../assets/Screen Shot 2023-01-25 at 3.48.10 PM.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFaceAngry} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className='foot-ctn'>
           <div> <h2>Bloom Scapes </h2> 
                 <h4> Contact</h4>
                 <p><strong> Address: </strong> 55 Victoria Island, Lagos, Nigeria </p>
                 <p><strong>Phone: </strong> 09076537549</p>
                 <p><strong>Hours: </strong> 10:00 - 18:00, Mon - Sat </p>
                 <div  className='follow'>
                    <h4> Follow Us</h4>
                    <FontAwesomeIcon icon={faFaceAngry}/>                
                    <FontAwesomeIcon icon={faFaceAngry}/>                
                 </div>
           </div>
           
           <div className='col'>
                <h4> About</h4>
                <a href='#'> About Us</a>
                <a href='#'> Delivery Information </a>
                <a href='#'> Privacy Policy</a>
                <a href='#'> Terms & Conditions</a>
                <a href='#'> Contact Us</a>
           </div>
           <div className='col'>
                <h4>My Account</h4>
                <a href='#'>Sign Up</a>
                <a href='#'>View cart</a>
                <a href='#'>My wishlist</a>
                <a href='#'>Track My Order</a>
                <a href='#'>Help</a>
           </div>
           <div>
                <h4> Install App</h4>
                <p> From App store or Google Play</p>
                <div className='row'>
                     <img src={Appstorelogo} className='logo1' alt=""/>
                     <img src={Googlestore} className='logo2' alt=""/>
                </div>
                <p> Secured Payment Gateways </p>
                
           </div>
        </div>
    )
}

export default Footer;
