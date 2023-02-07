import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons';
import prod1 from '../assets/White_T-Shirt_Mockup.jpg'; 
import prod2 from '../assets/135.jpg';
import prod3 from '../assets/3384897_57893.jpg';

const FeatureProducts = () => {
    return (
        <div className='product1'>
            <h1> Featured Products </h1>
            <p> Summer Collection New Modern</p>
            <div className='pro-ctn'>
                <div className='pro'>
                    <img src={prod1} alt=""/>
                    <div className='des'>
                        <span>Adidas</span>
                        <h5>Cartoon Astronaut T-shirts</h5>
                        <div className='star'>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                        <h4>$78</h4>
                    </div>
                    <a href=""><FontAwesomeIcon icon={faCartShopping} className='cart'/></a>
                </div>
                <div className='pro'>
                    <img src={prod2} alt=""/>
                    <div className='des'>
                        <span>Adidas</span>
                        <h5>Cartoon Astronaut T-shirts</h5>
                        <div className='star'>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                        <h4>$78</h4>
                    </div>
                    <a href=""><FontAwesomeIcon icon={faCartShopping} className='cart'/></a>
                </div>
                <div className='pro'>
                    <img src={prod3} alt=""/>
                    <div className='des'>
                        <span>Adidas</span>
                        <h5>Cartoon Astronaut T-shirts</h5>
                        <div className='star'>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                        <h4>$78</h4>
                    </div>
                    <a href=""><FontAwesomeIcon icon={faCartShopping} className='cart'/></a>
                </div>
                <div className='pro'>
                    <img src={prod1} alt=""/>
                    <div className='des'>
                        <span>Adidas</span>
                        <h5>Cartoon Astronaut T-shirts</h5>
                        <div className='star'>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                        <h4>$78</h4>
                    </div>
                    <a href=""><FontAwesomeIcon icon={faCartShopping} className='cart'/></a>
                </div>
                <div className='pro'>
                    <img src={prod2} alt=""/>
                    <div className='des'>
                        <span>Adidas</span>
                        <h5>Cartoon Astronaut T-shirts</h5>
                        <div className='star'>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                        <h4>$78</h4>
                    </div>
                    <a href=""><FontAwesomeIcon icon={faCartShopping} className='cart'/></a>
                </div>
                <div className='pro'>
                    <img src={prod3} alt=""/>
                    <div className='des'>
                        <span>Adidas</span>
                        <h5>Cartoon Astronaut T-shirts</h5>
                        <div className='star'>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                        <h4>$78</h4>
                    </div>
                    <a href=""><FontAwesomeIcon icon={faCartShopping} className='cart'/></a>
                </div>
                <div className='pro'>
                    <img src={prod1} alt=""/>
                    <div className='des'>
                        <span>Adidas</span>
                        <h5>Cartoon Astronaut T-shirts</h5>
                        <div className='star'>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                        <h4>$78</h4>
                    </div>
                    <a href=""><FontAwesomeIcon icon={faCartShopping} className='cart'/></a>
                </div>
                <div className='pro'>
                    <img src={prod2} alt=""/>
                    <div className='des'>
                        <span>Adidas</span>
                        <h5>Cartoon Astronaut T-shirts</h5>
                        <div className='star'>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                        <h4>$78</h4>
                    </div>
                    <a href=""><FontAwesomeIcon icon={faCartShopping} className='cart'/></a>
                </div>
            </div>
        </div>
    )
}

export default FeatureProducts;