
import React from 'react';
import Typed from 'react-typed';
import "./Header.css"

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Hello, I</h1>
                <h1> am</h1>
                <Typed
                    className="typed-text"
                    strings={["Frontend Web Developer", "Still Learning Web Development"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="" className="btn-main">contact me</a>
            </div>
            
        </div>
    );
};

export default Header;