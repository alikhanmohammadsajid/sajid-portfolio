import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_mggurbp', 'template_ueuuug7', e.target, 'user_s4raz1jUghitP1skA2fVr')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        
       <section className="contact bg-dark mt-5">
           <div className="container">
               <div className="section-header text-center text-white">
                    <h3 className="text-warning">Contact</h3>
                    <h1>Always connect with us</h1>
               </div>
               <div className="col-md-9 mx-auto">
                   <form action="" className="contact-form container text-white p-5 m-4 justify-content-center " onSubmit={sendEmail}>
                       <div className="form-group">
                           <input type="email" name="email" className="form-control" placeholder="Email Address *" required />
                       </div>
                       
                       <div className="form-group">
                           <input type="text" name="name" className="form-control" placeholder="Name *" required />
                       </div>
                       <div className="form-group">
                           <textarea type="text" name="message"  className="form-control" id="" cols="10" rows="4" placeholder="Message *" required ></textarea>
                       </div>
                       <div className="form-group text-right ">
                       <input className="btn btn-outline-warning" type="submit" value="Send" />
                       </div>
                   </form>
               </div>
           </div>
       </section>
       
    );
};

export default Contact;