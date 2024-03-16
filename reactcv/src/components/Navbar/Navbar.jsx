import React, { useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../Navbar/Navbar.css';
import { BsBank2 } from "react-icons/bs";


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
          <BsBank2 className='App-logo' />
            <nav ref={navRef} className={isOpen ? 'responsive_nav' : ''}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Portfolio</a>
                <a href="#">Contact</a>
                <button className='nav-close-btn' onClick={toggleNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={toggleNavbar}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
        </header>
    );
}

export default Navbar;
