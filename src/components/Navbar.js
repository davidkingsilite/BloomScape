import React from 'react';
import Banner from './Banner';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

    return (
      <div>
        <Banner />
   <div className="navbar">
    <h3 className="title">Bloom Scape</h3>
     <div className="links">
    <NavLink to="/" className={({isActive}) => (isActive ? "active" : null)} >PLANTS</NavLink>
    <NavLink to="/catalogue" className={({isActive}) => (isActive ? "active" : null)} >CARE TOOLS</NavLink>
    <NavLink to="/contact" className={({isActive}) => (isActive ? "active" : null)} >GIFTS</NavLink>
    <NavLink to="/search/id" className={({isActive}) => (isActive ? "active" : null)}>LEARN</NavLink>
    <NavLink to="/" className={({isActive}) => (isActive ? "active" : null)}>CORPORATE GIFTING</NavLink>
    </div>
    </div>
   </div>
   
);
};
export default Navbar;

