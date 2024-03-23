import React from 'react';
import './aboutme.css';
import img1 from '../../assets/PROFILE.jpg';

const AboutMe = () => {
    return (
        <section id="Aboutme">
            <span className="heading"> About Me </span>
            <hr className='hr' />

            <div className="images">
                <img src={img1} alt="sample" className="aboutimg" />
                <div className="paragraph">
                    <div className="information">
                        <span className="info">
                            I am a BCA graduate currently working as an intern, eager to transition into
                            a full-time role where I can utilize my skills and knowledge to contribute
                            meaningfully to a dynamic team. My goal is to continue learning and growing
                            while making positive contributions to the organization's success.
                        </span>
                    </div>
                    <div className="information">
                        <span className="info">
                            I have experience in graphic design and UI/UX design, through which
                            I have developed creative work and honed my skills. Additionally, I am
                            actively engaged in freelancing projects in graphic design, further expanding
                            my expertise in the field
                        </span>
                    </div>
                    <div className="information">
                        <span className="info">
                            This is a brief overview of my skills and experience. To learn more
                            about me and view my resume, please don't hesitate to reach out
                        </span>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutMe;
