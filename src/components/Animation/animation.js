import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Animation = () => {
    useEffect(() => {

        Aos.init({
          duration: 2000,
    
        })
      }, []);
  return (
    <div >
      
    </div>
  )
}

export default Animation
