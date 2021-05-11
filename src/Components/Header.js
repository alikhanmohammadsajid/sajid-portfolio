
import React from 'react';
import Typed from 'react-typed';
import "./Header.css"


const Header = () => {
    return (
        <div className="header-wrapper display-flex">
            
            <div className="main-info">
                <h1>Hello,</h1>
                <h1>I am</h1>
                <Typed
                    className="typed-text"
                    strings={["Sajid", "Frontend Web Developer", "Still Learning Web Development"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </div>

        </div>
    );
};

export default Header;