import React from 'react';
import "./Blog.css"
import javascript from "../images/fundamental.jpg"
import es6 from "../images/es6.png"
import react from "../images/react.jpg"


const blogs =[
    {
        name: "Fundamental Topics of Javascript ",
        link: "https://mdsajidalikhan.medium.com/junior-developer-should-know-javascript-function-792ce3c32251",
        image: javascript
    },
    {
        name: "Fundamental Topics Of ES6",
        link: "https://mdsajidalikhan.medium.com/important-things-of-javascript-es6-306e48dc8c80",
        image: es6
    },
    {
        name: "Fundamental Topics Of React",
        link: "https://mdsajidalikhan.medium.com/the-fundamental-topic-of-react-js-6b9cda593b22",
        image: react
    },
]

const Blog = () => {
    return (
        <div className="container mt-5">
            <div><h2 className="text-warning text-center mb-4">Blogs</h2></div>
            <div className="row d-flex justify-content-center">
                {
                    blogs.map(blog =>{
                        return <div className="p-5 shadow p-3 mb-5 bg-body rounded col-md-4" style={{width: "18rem"}}>
                        <img src={blog.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{blog.name}</h5>
                            <a href={blog.link} className="btn btn-outline-warning" target="_blank"><b>Read</b> </a>
                        </div>
                    </div>
                    })
                }
            </div>
            
        </div>
    );
};

export default Blog;