import React from 'react';
import {FaSearch} from 'react-icons/fa'
const Hero = () => {
    return (
        <>
        <div className="hero-container">
            <div className="hero-image">
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