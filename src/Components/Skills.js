import React from 'react';
import "./Skills.css"
import html from '../images/html.png'
import css from '../images/css.png'
import react from '../images/react-js.png'
import express from '../images/Express-JS.png'
import bootstrap from '../images/bootstrap.png'
import mongodb from '../images/mongodb.jpg'
import reactNative from '../images/react-native.png'
import sass from '../images/sass.jpg'
import materialUi from '../images/metarialui.png'
import github from '../images/github.png'
import firebase from '../images/firebase.png'
import netlify from '../images/netlify.png'
import heroku from '../images/heroku.png'

const skills = [
    {
        name: 'HTML',
        img: html,
        detail: 'Advanced'
    },
    {
        name: 'React.js',
        img: react,
        detail: 'Comfortable'
    },
    {
        name: 'Express.js',
        img: express,
        detail: 'Beginner'
    },
    {
        name: 'React Native',
        img: reactNative,
        detail: 'Familiar'
    },
    {
        name: 'Bootstrap',
        img: bootstrap,
        detail: 'Advanced'
    },
    {
        name: 'CSS',
        img: css,
        detail: 'Comfortable'
    },
    {
        name: 'SASS',
        img: sass,
        detail: 'Beginner'
    },
    {
        name: 'Material UI',
        img: materialUi,
        detail: 'Beginner'
    },
    {
        name: 'Git Hub',
        img: github,
        detail: 'Advanced'
    },
    {
        name: 'MongoDB',
        img: mongodb,
        detail: 'Comfortable'
    },
    {
        name: 'Firebase',
        img: firebase,
        detail: 'Comfortable'
    },
    {
        name: 'Netlify',
        img: netlify,
        detail: 'Comfortable'
    },
    {
        name: 'Heroku',
        img: heroku,
        detail: 'Beginner'
    }
    
]

const Skills = () => {
    return (
        <div className=" container bg-dark">
            <div>
                <h1 className="text-warning text-center">My Skills</h1>
            </div>
            <div className="row justify-content-center">
                {skills.map((skill) => {
                        return <div className="container card col-md-2 m-3 p-3 text-center skills-section" style={{ border: "1px solid dark"}}>
                        <div className="container justify-content-center">
                        <img style={{width: "50px"}} src={skill.img} className="card-img-top" alt="..."/>
                        </div>
                        <div className="card-body text-center ">
                          <h5 className="card-title">{skill.name}</h5>
                          <small className="card-title "><b>{skill.detail}</b></small>
                          </div>
                      </div>

                  })}

           </div>
        </div>
    );
};

export default Skills;