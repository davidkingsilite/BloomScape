import React from 'react';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOutdent } from '@fortawesome/free-solid-svg-icons';

function NavbarMobile() {

    const navRef = useRef();

    const showNavbar = () => {
            navRef.current.classList.toggle("responsive_nav");
    };
    
    return (
        <div>
            <FontAwesomeIcon icon={faOutdent} onClick={showNavbar} />
        </div>
    )
}

export default NavbarMobile;
