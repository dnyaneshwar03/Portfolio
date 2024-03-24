import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Animation/animation.js';
import facebook from '../../assets/facebook.png'
import insta from '../../assets/insta.png'
import twiter from '../../assets/twiter.png'
import linkedin from '../../assets/linkedin.png'
// import { Link } from 'react-scroll';

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
                <span className="heading" data-aos="zoom-in" > Skills </span>
                <hr className="hrr" data-aos="zoom-in"/>
                <span className="info" data-aos="zoom-in" >These are my defining skills. Explore 
                further to learn about the technologies and software I'm proficient in

                </span>
                <div className="skillsItem">
                    <div className="skillsItems" data-aos="fade-right">
                        <h3>Frontend</h3>
                        <p className='skillss'>● Html</p>
                        <p className='skillss'>● CSS</p>
                        <p className='skillss'>● Javascript</p>
                        <p className='skillss'>● BootStrap</p>
                        <p className='skillss'>● React-js</p>
                    </div>
                    <div className="skillsItems" data-aos="fade-right">
                        <h3>backend</h3>
                        <p className='skillss'>● Java</p>
                    </div>
                    <div className="skillsItems" data-aos="fade-left">
                        <h3>Database</h3>
                        <p className='skillss'>● Mysql</p>
                    </div>
                    <div className="skillsItems" data-aos="fade-left">
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
                <span className="heading" data-aos="zoom-in"> Contact Me </span>
                <hr className="hrr" data-aos="zoom-in"/>
                <span className="info" data-aos="zoom-in">Thank you for visiting my portfolio.
                 If you have any queries or opportunities for collaboration, please feel free to contact me
                </span>
                <form className="contactform" ref={form} onSubmit={sendEmail} >
                    <input type="text" className="uname" placeholder='Enter Your Name' name="your_name" required />
                    <input type="email" className="email" placeholder='Enter Your Email' name="your_email" required />
                    <textarea rows="5" className='msg' placeholder='Your Message' name="message"></textarea>
                    <button className="submitbtn" value='Send' type='submit' >Submit</button>
                </form>

                <div className="links" >
                    <a href="https://www.instagram.com/dnyaneshwar_007/" target='_blank' rel=' noopenr noreferrer'> <img src={insta} alt="instagram" className='link' data-aos="fade-right"/></a>
                    <a href="https://www.facebook.com/profile.php?id=100015176417928" target='_blank' rel=' noopenr noreferrer'> <img src={facebook} alt="facebook" className='link' data-aos="fade-right"/></a>
                    <a href="https://x.com/5mE2UPfPSnchTSI?t=F2VY4wVK2DYfXWfTrdwuog&s=09" target='_blank' rel=' noopenr noreferrer'> <img src={twiter} alt="twiter" className='link' data-aos="fade-left"/></a>
                    <a href="https://www.linkedin.com/in/dnyaneshwar-patil-9334b225b/" target='_blank' rel=' noopenr noreferrer'> <img src={linkedin} alt="linkedin" className='link' data-aos="fade-left"/></a>
                </div>

            </div>
            <ToastContainer />
        </section>
    )
}

export default Contact;
