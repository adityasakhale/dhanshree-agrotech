import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Hero.css'

const Home = () => {
  return (
   <div id='hero' className='home'>
    <div className='container grid grid-two-column'>
        <div className='section-hero-data'>
            <h1 className='hero-heading'>DHANSHREE AGROTECH</h1>
            <p className='hero-para'>धनश्री ॲग्रोटेक आमच्याकडे ऊस, भाजीपालासाठी लागणारे उच्च-गुणवत्तेचे कोकोपीट व
             नर्सरीसाठी आवश्यक असणारे सर्व साहित्य योग्य दरात मिळेल.
            </p>
            <p className='hero-para'> 
            Welcome to Dhanshree Agrotech, your one-stop online marketplace for all your nursery and agricultural needs. 
            Specializing in cocopet and essential materials, we offer a wide selection of high-quality products including seeds, fertilizers, tools, and more. 
            Explore our detailed product listings, complete with descriptions and images, and enjoy a seamless shopping experience with secure payments, 
            dedicated customer support, and fast delivery. 
            At Dhanshree Agrotech, we are committed to helping your agricultural business or hobby thrive
            
            </p>
            
             <a className='contact-btn' href="#contact" offset={50}> Contact us</a>
           
        </div>
    </div>
   </div>
  )
}

export default Home
