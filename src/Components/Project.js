import React from 'react';
import "./Project.css"
import phono from "../images/phono.PNG"
const Project = () => {
    return (
        <div className="mb-3 bg-dark mt-5 container">
            <div className=" row shadow-lg p-3 mb-5 bg-body rounded d-flex  justify-content-center">
            <div className="col-md-6 mt-5">
            <img src={phono} className=" image" alt="..." />
            </div>
            
            <div className="card-body container justify-content-center col-md-6">
                <h5 className="card-title text-white align-center">Card title</h5>
                <p className="card-text text-white align-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
   <p>hh</p>
   <p>gfgf</p>
   <p>fgfg</p>
            </div>
            </div>
            
        </div>
    );
};

export default Project;