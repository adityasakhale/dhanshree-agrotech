import React from 'react';
import './Footer.css'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div id='footer' className='footer'>
      <div className='name'>
        <p className='namee'>All Rights Reserved @dhanshreeagrotech</p>
      </div>
      <div className='media-links'>
      <p className='folw'>Follow Us:</p>
       <a className='mlink' href='https://www.instagram.com/dhanshreeagro?igsh=N3R4cDFkMjZtM2lh'> <FaInstagram className='fab'></FaInstagram></a> 
       <a className='mlink' href='https://www.instagram.com/dhanshreeagro?igsh=N3R4cDFkMjZtM2lh'> <FaFacebook className='face'></FaFacebook></a>
      </div>
    </div>
  )
}

export default Footer
