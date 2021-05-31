
import { faGithub, faGithubSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Typed from 'react-typed';
import "./Header.css"


const Header = () => {
    return (
        <div className="header-wrapper display-flex">

            <div className="main-info">
                <h1 className="text-warning">Hello, I am</h1>
                <h1 className="text-warning">Sajid</h1>
                <Typed
                    className="typed-text"
                    strings={["Frontend Web Developer", "Still Learning Web Development"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <div className="mt-3"> 
                    <a target="_blank" href="https://github.com/alikhanmohammadsajid" className="icon-holder">
                        <FontAwesomeIcon icon={faGithubSquare}
                            className="icon gh" />
                    </a>
                    <a href="https://www.linkedin.com/in/mohammad-sajid-ali-khan-7823b6201/" className="icon-holder" >
                        <FontAwesomeIcon icon={faLinkedinIn} className="icon in" />
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Header;