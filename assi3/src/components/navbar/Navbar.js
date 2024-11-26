import React,{useState} from 'react'
import './Navbar.css'
//import { Link } from 'react-router-dom'
const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const handleLinkClick = (link) => {
        setActiveLink(link); 
      };
    return (
   <div className='bg-white d-flex  position-fixed w-100 z-1'>
    <h1 className=' align-content-center mx-3'>List<span className='text-danger'>Race</span></h1>
        <div className='nav-container justify-content-end  px-3'>
        <ul className='d-flex float-end py-4 m-0'>
        <li><a href="#home" className={`text-decoration-none px-3 ${activeLink === 'home' ? 'active-link' : 'text-dark'}`}
              onClick={() => handleLinkClick('home')}>Home</a></li>

        <li><a href="#works" className={`text-decoration-none px-3 ${activeLink === 'works' ? 'active-link' : 'text-dark'}`}
              onClick={() => handleLinkClick('works')}>How It Works</a></li>

        <li><a href="#explore" className={`text-decoration-none px-3 ${activeLink === 'explore' ? 'active-link' : 'text-dark'}`}
              onClick={() => handleLinkClick('explore')}>Explore</a></li>

        <li><a href="#review" className={`text-decoration-none px-3 ${activeLink === 'review' ? 'active-link' : 'text-dark'}`}
              onClick={() => handleLinkClick('review')}>Review</a></li>

        <li><a href="#blog" className={`text-decoration-none px-3 ${activeLink === 'blog' ? 'active-link' : 'text-dark'}`}
              onClick={() => handleLinkClick('blog')}>Blog</a></li>

        <li><a href="#contact"className={`text-decoration-none px-3 ${activeLink === 'contact' ? 'active-link' : 'text-dark'}`}
              onClick={() => handleLinkClick('contact')}>Contact</a></li>
      </ul>
        </div>
        </div>

    )
}

export default Navbar