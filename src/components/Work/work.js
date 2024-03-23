import React from 'react';
import './work.css';
import img1 from '../../assets/flight.png';
import img2 from '../../assets/camera.png';
import img3 from '../../assets/hospital.png';

const Work = () => {
    return (
        <section id="work">
            <span className="heading"> Projects </span>
            <hr className="hr" />
            <span className="info">These are the projects I've worked on during college and internships. 
            They have been instrumental in enhancing my skills and technical knowledge
            </span>

            <div className="content">
                <div className="subcontent">
                    <img src={img1} alt="sample" className='imgs' />
                    <div className="texts">
                        <h3> Flight Booking Management System</h3>
                        <p>Developing a Flight Management System as my final college project, utilizing HTML,
                            CSS, JavaScript, Bootstrap, and Python. Designing an intuitive interface and
                            implementing robust features for efficient flight management.
                        </p>
                    </div>
                </div>
                <div className="subcontent">
                    <img src={img2} alt="sample" className='imgs' />
                    <div className="texts">
                        <h3> Photolab Management System</h3>
                        <p>Creating a Photolab Management System as a personal project, leveraging HTML, CSS,
                            JavaScript, Bootstrap, and Python. Designing an efficient system for managing
                            photography-related tasks and operations with a user-friendly interface.
                        </p>
                    </div>
                </div>
                <div className="subcontent">
                    <img src={img3} alt="sample" className='imgs' />
                    <div className="texts">
                        <h3>Hospital Management System</h3>
                        <p>Currently working on a Hospital Management System as part of my internship project,
                            integrating HTML, CSS, JavaScript, Bootstrap, Servlet, and JSP. Designing
                            user-friendly interfaces and implementing efficient functionalities for seamless
                            hospital operations.
                        </p>
                    </div>
                </div>
            </div>



        </section>
    )
}

export default Work;
