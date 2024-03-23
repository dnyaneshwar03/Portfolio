import React from 'react';
import './exprience.css';

const Exprience = () => {
    return (
        <div class="container" id="Exprience">
            <div className='AboutMee'>
                <span className="heading"> Education and Experience </span>
                <hr className='hrr' />
            </div>


            <main class="row">
                <section class="col">

                    <header class="title">
                        <h2>EDUCATION</h2>
                    </header>

                    <div class="contents">

                        <div class="box">
                            <h4>June 2020-April 2023</h4>
                            <h3> Bachelor of Computer Application(BCA) </h3>
                            <p>G.H. Raisoni Institute of Business Management</p>
                        </div>

                        <div class="box">
                            <h4>June 2019-April 2020</h4>
                            <h3>HSC</h3>
                            <p>S.D.N.T. Collage, Pachora</p>
                        </div>

                        <div class="box">
                            <h4>April 2017-march 2018</h4>
                            <h3>SSC</h3>
                            <p>S.G.S. High School, Pachora</p>
                        </div>

                        <div class="box">
                            <h4>Aug 2023-Present</h4>
                            <h3>Diploma Full Stack Java</h3>
                            <p>Teknowell EduTech, Chichwad</p>
                        </div>

                    </div>
                </section>

                <section class="col">

                    <header class="title">
                        <h2>EXPERIENCE</h2>
                    </header>

                    <div class="contents">

                        <div class="box">
                            <span className="duration">Nov 2023-Present</span>
                            <h3>Techview Infotech Pvt.Ltd.</h3>
                            <h5>Front-End Developer Intern</h5>
                            <p>As a Front-End Developer Intern at Techview Infotech, I'm focused on mastering
                                web development skills like HTML, CSS, and JavaScript. Collaborating closely
                                with the team, I'm actively contributing to projects while refining my UI/UX design abilities.
                            </p>
                        </div>

                        <div class="box">
                            <h3>PhotoExpress, Baner</h3>
                            <h5>Graphic Designer</h5>
                            <p>In my role as a graphic designer, I specialize in creating designs for various items
                                such as frames, tea cups, t-shirts, keychains, and photo editing. Additionally, I am
                                focused on improving my customer handling skills to better serve clients and ensure
                                their satisfaction with the design process
                            </p>
                        </div>

                        <div class="box">
                            <span className="duration">May 2018 - April 2021</span>
                            <h3>Prince Video Mixing Lab</h3>
                            <h5>Album Designer</h5>
                            <p>I am an album designer specializing in wedding albums, with excellent
                                knowledge of Photoshop. Additionally, I am also learning photo editing, flex design,
                                brochure design, and product design
                            </p>
                        </div>

                    </div>
                </section>


            </main>
        </div>
    )
}

export default Exprience;
