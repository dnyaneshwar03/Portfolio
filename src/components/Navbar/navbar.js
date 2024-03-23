import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.jpg';
import menui from '../../assets/menu.webp';
import { Link } from 'react-scroll';

export const Navbar = () => {
  const [showmenu, setShowmenu]=useState(false);
  return (
    <nav className="navbar">
      <div className="logodiv"> 
      <img src={logo} alt="logo" className='logo' />
      </div>
      
      <div className="menu">
      <Link activeClass='active' to='section' spy={true} smooth={true} offset={-100} duration={500} className="menuItems">Home</Link>
        <Link activeClass='active' to='Aboutme' spy={true} smooth={true} offset={-30} duration={500} className="menuItems">About</Link>
        <Link activeClass='active' to='Exprience' spy={true} smooth={true} offset={-30} duration={500} className="menuItems">Education&Experience</Link>
        <Link activeClass='active' to='work' spy={true} smooth={true} offset={-30} duration={500} className="menuItems">Projects</Link>
        <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-20} duration={500} className="menuItems">Contact</Link>
      </div>


      <img src={menui} alt="menu" className='mobmenu' onClick={()=>setShowmenu(!showmenu)} />
           
      <div className="navmenu" style={{display: showmenu? 'flex':'none'}}>
      <Link activeClass='active' to='section' spy={true} smooth={true} offset={-100} duration={500} className="Items" onClick={()=>setShowmenu(false)}>Home</Link>
        <Link activeClass='active' to='Aboutme' spy={true} smooth={true} offset={-30} duration={500} className="Items" onClick={()=>setShowmenu(false)}>About</Link>
        <Link activeClass='active' to='Exprience' spy={true} smooth={true} offset={-30} duration={500} className="Items" onClick={()=>setShowmenu(false)}>Education&Experience</Link>
        <Link activeClass='active' to='work' spy={true} smooth={true} offset={-30} duration={500} className="Items" onClick={()=>setShowmenu(false)}>Projects</Link>
        <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-20} duration={500} className="Items" onClick={()=>setShowmenu(false)}>Contact</Link>
        
      </div>
    </nav>
  )
}

export default Navbar;
