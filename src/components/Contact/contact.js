import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_6gy2upj', 'template_lk1y6c5', form.current, {
                publicKey: 'D8K6iChbYA27k004T',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset();
                    toast.success('Email Sent...!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        // transition: Bounce,
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <section id='contactPage'>
            <div id="skills">
                <span className="heading"> Skills </span>
                <hr className="hrr" />
                <span className="info">These are my defining skills. Explore 
                further to learn about the technologies and software I'm proficient in

                </span>
                <div className="skillsItem">
                    <div className="skillsItems">
                        <h3>Frontend</h3>
                        <p className='skillss'>● Html</p>
                        <p className='skillss'>● CSS</p>
                        <p className='skillss'>● Javascript</p>
                        <p className='skillss'>● BootStrap</p>
                        <p className='skillss'>● React-js</p>
                    </div>
                    <div className="skillsItems">
                        <h3>backend</h3>
                        <p className='skillss'>● Java</p>
                    </div>
                    <div className="skillsItems">
                        <h3>Database</h3>
                        <p className='skillss'>● Mysql</p>
                    </div>
                    <div className="skillsItems">
                        <h3>Graphics Tools</h3>
                        <p className='skillss'>● Photoshop</p>
                        <p className='skillss'>● illustrator</p>
                        <p className='skillss'>● coreldraw</p>
                        <p className='skillss'>● Canva</p>
                        <p className='skillss'>● Figma</p>
                    </div>

                </div>
            </div>

            <div id="contact">
                <span className="heading"> Contact Me </span>
                <hr className="hrr" />
                <span className="info">Thank you for visiting my portfolio.
                 If you have any queries or opportunities for collaboration, please feel free to contact me
                </span>
                <form className="contactform" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="uname" placeholder='Enter Your Name' name="your_name" required />
                    <input type="email" className="email" placeholder='Enter Your Email' name="your_email" required />
                    <textarea rows="5" className='msg' placeholder='Your Message' name="message"></textarea>
                    <button className="submitbtn" value='Send' type='submit' >Submit</button>
                </form>

                <div className="links">
                    <img src="#" alt="" className='links' />
                    <img src="#" alt="" className='links' />
                    <img src="#" alt="" className='links' />
                    <img src="#" alt="" className='links' />
                </div>


            </div>
            <ToastContainer />
        </section>
    )
}

export default Contact;
