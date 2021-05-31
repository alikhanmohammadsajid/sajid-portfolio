import React from "react";
import logo from "../images/S.png";
import "./Navbar.css";
import resume from "../resume/Sajids Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFileDownload} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: 'white' }}></FontAwesomeIcon>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-link">
                                Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blog" className="nav-link">
                                Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">
                               Contact</Link>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-warning"> <a style={{
                                textDecoration: "none",
                                color: "white"
                            }} href={resume} download>
                                <FontAwesomeIcon icon={faFileDownload}></FontAwesomeIcon> Resume</a></button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;