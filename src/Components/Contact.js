import React from 'react'
import './Contact.css';
import { IoCall } from "react-icons/io5";




const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "423c5c02-7e00-4dcd-8313-306e552fc171");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };







  return (
    <div id='contact' >
      <h2 className='con'>Contact Us</h2>
      <div className='container-loc'>
        <div className='loc'>
        <iframe title='unique'  className='gloc' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15278.943294250586!2d74.568676!3d16.7898139!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc11fd6c3038819%3A0xefd0838fec78caf4!2sDhanshree%20Agrotech!5e0!3m2!1sen!2sin!4v1722175593143!5m2!1sen!2sin" 
         width="900" height="650" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
        </div>
        <div className='address5'>
        
           <h1 >Address : </h1>
           <a className='call' href='https://maps.app.goo.gl/2eJY6wUfHkCEFVNUA'><h5 className='address'> Dhanshree agrotech Udgaon, near Technical Highschool, Udgaon, Maharashtra 416101.</h5></a><hr></hr>
           
           <h1>Phone : </h1>
           <h5 className='address'><IoCall></IoCall><a className='call' href="tel:+91 9422753175">+ 9422753175</a></h5>
           <h5 className='address'><IoCall></IoCall><a className='call' href="tel:+91 8421603375">+ 8421603375</a></h5>
           
          <hr></hr>
           
        </div>
      </div>
      <div className='contact-form1'>
      <p className='sendmsg'>Send a message</p>
      <form onSubmit={onSubmit} className='contact-right'>
            <label htmlFor=''> Name :</label>
            <input type='text' placeholder='Enter your name' name='name' required/>
            
            <label htmlFor=''> Email</label>
            <input type='email' placeholder='Enter your email' name='email' required/>

          <label>Mobile No.</label>
          <input type='tel'
           name='number'
           placeholder='your mobile number' 
           pattern="[0-9]{10}" maxlength="10" required/>

            <label htmlFor=''>Write your message here</label>
            <textarea name='message'  rows='8' placeholder='Enter your message' required></textarea>
            <button type='submit' className='contact-submit'>Submit </button>

        </form>
    </div>
    </div>
  )
}

export default Contact
