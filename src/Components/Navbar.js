import React from "react";
import logo from "../S.png";
import "./Navbar.css";
import resume from "../resume/Sajid Khan Resume (2).pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFileAlt, faHome, faThermometerEmpty } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: 'white' }}></FontAwesomeIcon>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                               Contact</a>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-warning"> <a style={{
                                textDecoration: "none",
                                color: "white"
                            }} href={resume} download>
                                <FontAwesomeIcon icon={faFileAlt}></FontAwesomeIcon> Resume</a></button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;