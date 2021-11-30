import React from 'react';
import {FaSearch} from 'react-icons/fa'
import logo from '../resources/images/logo.png'
const Hero = () => {
    return (
        <>
        <div className="hero-container">
            <div className="hero-image">
                <div className="logo">
                    <img src={logo} alt="foody" width="50%"/>

                </div>
                <form>
                    <input className="form-control search" placeholder="Search Recipe"/>
                    <span id="search" >
                    <FaSearch />
                    </span>
                </form>

            </div>
            
        </div>
        </>
    );
};

export default Hero;