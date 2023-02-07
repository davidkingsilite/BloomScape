import React from 'react';
import { useRef } from 'react';
import Banner from './Banner';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faShoppingBasket, faOutdent } from "@fortawesome/free-solid-svg-icons";
import { Component } from 'react';
 


class Navbar extends Component {
   
  state={clicked: false};

  handleClick = () => {
   this.setState({clicked:!this.state.clicked})
  }

  render (){
    return (
      <div>
        <Banner />
   <div className="navbar" >
    <h3 className="title">Bloom Scape</h3>
     <div className={this.state.clicked ? "links links--responsive" : "links"}>
    <NavLink to="/" className={({isActive}) => (isActive ? "active" : null)} >PLANTS</NavLink>
    <NavLink to="/catalogue" className={({isActive}) => (isActive ? "active" : null)} >CARE TOOLS</NavLink>
    <NavLink to="/contact" className={({isActive}) => (isActive ? "active" : null)} >GIFTS</NavLink>
    <NavLink to="/search/id" className={({isActive}) => (isActive ? "active" : null)}>LEARN</NavLink>
    <NavLink to="/corporate" className={({isActive}) => (isActive ? "active" : null)}>CORPORATE GIFTING</NavLink>
    <NavLink to="" className={({isActive}) => (isActive ? "active" : null)}> <FontAwesomeIcon icon={faShoppingBasket} className="links__mob"/> </NavLink>
    </div>

    <div className='mobile' >
          <FontAwesomeIcon icon={faShoppingBasket} />
         <div onClick={this.handleClick}> 
            {this.state.clicked ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faOutdent}/> } 
         </div>        
    </div>
    </div>
   </div> 
)
   }
};
export default Navbar;

