import React from 'react'
import './Footer.css'
import { FaArrowUp } from "react-icons/fa";
const Footer = () => {
   const scrollToTop = () => {
      window.scrollTo({
      top: 100,
      left:100,
      behavior: 'smooth', 
    });
  }
  return (
    <footer className="footer-container text-center py-3 bg-dark text-white">
    <p>© copyright. designed and developed by themesine.</p>
    <button 
      className="btn btn-danger mt-2" 
      onClick={scrollToTop}
    >
     <FaArrowUp/>
    </button>
  </footer>
  )
}

export default Footer