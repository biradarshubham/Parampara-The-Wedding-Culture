import './BodyMain.css'
import cartoon1 from '../assets/cartoon1.png'
import { useState } from 'react'
import axios from 'axios'

const Contact = () => {
    const [mail,setMail] = useState({
        email:""
      })
    
      function handleSubmit(e){
        e.preventDefault();
        axios.post("http://localhost:5001/mail",mail)
      }
  return (
    <div className="contact" id='contact'>
    <div className="contact-content">
        <div className="contact-section">
            <h3>Contact Us</h3>
            <ul className="contact-info">
                <li>
                    <i>📍</i>
                    <span>Haveli GNO 634A, p Wagholi Tal,Nagar Rd,Opp Chroma Showroom, Wagholi,Pune,Maharashtra 412207</span>
                </li>
                <li>
                    <i>📞</i>
                    <span>+91 9168141103</span>
                </li>
                <li>
                    <i>✉️</i>
                    <span>ParamParaTheWeddingCulture@gmail.com</span>
                </li>
                <li>
                    <i>⏰</i>
                    <span>Mon - Fri: 9:00 AM - 10:00 PM EST</span>
                </li>
            </ul>
            <div className="social-links">
                <a href="https://www.facebook.com/hindavi.patil.1048?mibextid=ZbWKwL"><i>fb</i></a>
                <a href="#"><i>tw</i></a>
                <a href="https://www.instagram.com/parampara_the_wedding_culture?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><i>in</i></a>
                <a href="https://www.instagram.com/parampara_the_wedding_culture?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><i>ig</i></a>
            </div>
        </div>

        <div className="contact-section">
            <h3>Stay Connected</h3>
            <p className='p'>
                Join our newsletter and get the latest updates, news, and insights from us.
            </p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
                <input type="email" placeholder="Enter your email address" onChange={(e)=>setMail({...mail,email:e.target.value})}/>
                <button type="submit" >Subscribe</button>
            </form>
            <div className="contact-cartoon">
                <img src={cartoon1} alt=""/>
            </div>
        </div>
    </div>
</div>
  )
}

export default Contact
