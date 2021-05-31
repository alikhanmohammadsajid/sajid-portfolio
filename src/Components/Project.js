import React from 'react';
import "./Project.css";
import phono from "../images/phono.PNG";
import games from "../images/games.PNG";
import sports from "../images/sports.PNG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGithubSquare, faPlaystation } from '@fortawesome/free-brands-svg-icons';

const projects = [
    {
        name: "Phono",
        images: phono,
        liveLink: "https://phono-mobile.web.app/",
        gitLink: "https://github.com/alikhanmohammadsajid/phono",
        point1: "● It’s a single-page mobile shop web app.",
        point2: "● Here admin can add products for the customer.",
        point3: "● Customers can buy mobiles and they can give a review here.",
        Technology: "HTML,React.js, Node.js, Express.js, MongoDB, Firebase Authentication,CSS, Bootstrap4."
    },
    {
        name: "Games Planet",
        images: games,
        liveLink: "https://games-planet-pro.web.app/",
        gitLink: "https://github.com/alikhanmohammadsajid/games-planet",
        point1: "● A single-page games web app. Here anyone can buy games.",
        point2: "● Here admin can add games for the customer.",
        point3: "● If you want to buy those games you have to log in here.",
        Technology: "HTML,React.js, Node.js, Express.js, MongoDB, Firebase Authentication,CSS, Bootstrap4."
    },
    {
        name: "Sports Mania",
        images: sports,
        liveLink: "https://mystifying-haibt-57849c.netlify.app/",
        gitLink: "https://github.com/alikhanmohammadsajid/sports-mania",
        point1: "● It’s a React-based web app, where has many teams.",
        point2: "● All the premiere league teams are included here. ",
        point3: "● If you click explores button you will know about the team information.",
        Technology: "HTML, React.js, Bootstrap, CSS."
    }
]

const Project = () => {
    return (
        <div className="bg-dark pb-3 pt-5">
            <div className="container text-center text-uppercase">
                <h1 className="text-warning">Projects</h1>
            </div>

            <div>
                {projects.map((project) => {
                    return <div className="mb-2 bg-light container">
                        <div className=" row shadow-lg p-3 mb-5 bg-body rounded d-flex  justify-content-center">
                            <div className="col-md-6 mt-5">
                                <img src={project.images} className="image" alt="..." />
                            </div>

                            <div className="card-body container justify-content-center col-md-6">
                                <h3 className="card-title text-dark align-center">{project.name}</h3>
                                <p className="card-text text-dark align-center">{project.point1}</p>
                                <p className="card-text text-dark align-center">{project.point2}</p>
                                <p className="card-text text-dark align-center">{project.point3}</p>
                                <p className="card-text text-dark align-center">TECHNOLOGY : {project.Technology}</p>
                                <a target="_blank" href={project.liveLink} className="icon-holder" >
                                    <FontAwesomeIcon icon={faPlaystation} className="icon in" />
                                </a>
                                <a target="_blank" href={project.gitLink} className="icon-holder">
                                    <FontAwesomeIcon icon={faGithubSquare}
                                        className="icon gh" />
                                </a>
                            </div> 
                        </div>
                    </div>

                })
                }
            </div>
        </div>
    );
};

export default Project;