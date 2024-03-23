import React, { useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import './home.css'
import photo from '../../assets/bg.png';
import { Link } from 'react-scroll';
import Aos from 'aos';
import 'aos/dist/aos.css';



export const Home = () => {
  const openPdfInNewWindow = () => {
    var pdfUrl = 'https://drive.google.com/file/d/1gr-beC5t1kPI9Wco8MHN2VU1RgiSaiOa/view?usp=drive_link';
    window.open(pdfUrl, '_blank');
  }

  useEffect(() => {

    Aos.init({
      duration: 2000,

    })
  }, []);

  return (
    <section id="section" data-aos="zoom-in-down" >
      <div className="homecomponent" >
        <span className="hello">HI, I Am</span>
        <span className="name"> DNYANESHWAR PATIL</span>
        <span className='positon'>
          I' Am {' '}
          <span style={{ fontWeight: '220' }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={["Graphic Designer.", "Web Developer.", "Full-Stack Developer."]}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </span>
        <Link><button className="btn" onClick={openPdfInNewWindow} >Resume</button></Link>
      </div>

      <img src={photo} alt="profile" className='photo' />

    </section>
  )
}
export default Home;