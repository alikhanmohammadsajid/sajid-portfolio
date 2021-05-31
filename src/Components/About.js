import React from 'react';
import "./About.css";
import Skills from './Skills';


const About = () => {
    return (
        <div className="bg-dark about">
            <div className="d-flex justify-content-center bg-dark">
                <div className="mb-3 bg-dark text ">
                    <div className="row container">
                        <div className="col-md-6">
                            <img className="img" src='https://i.ibb.co/7RP9cbf/sk.png' alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body text-white justify-content-center">
                                <h3 className="card-title">I Am <span className="text-warning">Sajid Khan</span> </h3>
                                <p className="card-text">I am a front-end web developer. I have been learning web development since January 1, 2021. Now I have a good idea about HTML, CSS, JavaScript, Bootstrap, React.JS, Node.JS, Mongo.DB Netlify, Firebase etc. </p>
                                <div>
                                <p className="mb-3"> <b> Name   :   Mohammad sajid ali khan</b></p>
                                <p className="mb-3"><b>Age  :  21</b></p>
                                <p className="mb-3"><b>Nationality   :  Bangladeshi</b></p>
                                <p className="mb-3"><b>Religion   :  Islam</b></p>
                                <p className="mb-3"><b>Languages  :  Bangla, English, Hindi, Urdu</b></p>
                                <p className="mb-3"><b>Address  :  Bangladesh, Chittagong, Raozan</b></p>
                                <p className="mb-3"><b>Country  :  Bangladesh</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<div><Skills></Skills></div>
            
        </div>

    );
};

export default About;