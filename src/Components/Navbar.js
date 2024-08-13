import React, { useState ,useRef} from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../Assets/menu_open.svg'
import menu_close from '../Assets/menu_close.svg'

const Navbar = () => {

    const [menu,setMenu]=useState("home");

    const menuRef=useRef();

    const openMenu=() =>{
      menuRef.current.style.right='0';
    }

    const closeMenu=() =>{
      menuRef.current.style.right='-350px';
    }
    
    


  return (
    <div>
      <nav className='main-nav'>
    <div className='logo'>

        <img className='dlogo' src='./images/logo2.png' alt='logo'></img>
       
    </div>
    <img className='nav-mob-open' onClick={openMenu} src={menu_open} alt=''></img>
    <ul ref={menuRef} className='nav-links-mob' >
    <img className='nav-mob-close' onClick={closeMenu} src={menu_close} alt=''></img>
        <li><AnchorLink className='anchor-link' onClick={closeMenu} class='sidebar'  href='#hero'><p onClick={()=>setMenu("home")}  className='nav-lnk'>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' onClick={closeMenu} class='sidebar' offset={150} href='#products'><p onClick={()=>setMenu("products")} className='nav-lnk'>Products</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' onClick={closeMenu} class='sidebar' offset={150} href='#contact'><p onClick={()=>setMenu("contact")} className='nav-lnk'>Contact</p></AnchorLink></li>
    </ul>
        
   
      </nav>
   
    </div> 
  )
}

export default Navbar
