import './Founder.css'
import founder from '../assets/profilefounder.jpg'
import { Link } from 'react-router-dom'

const Founder = () => {
  return (
    <div className='founder-main-container'>
      <div className="founder-hero">
        <div className="founder-container">
            <h1 className="hero-title">Parampara</h1>
            <div className="hero-subtitle">The Wedding Culture</div>
        </div>
    </div>

    <div className="founder-container1">
        <div className="profile-section">
            <div className="profile-header">
                <img src={founder} alt="Hindavi Satkar Patil" className="profile-img"/>
                <div>
                    <h1>Hindavi Satkar Patil</h1>
                    <div className="brand-name">Founder & Creative Director</div>
                    <p>Creating timeless memories that honor tradition while embracing modern elegance</p>
                    <div className="social-links">
                        <a href="   https://www.instagram.com/parampara_the_wedding_culture?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.facebook.com/hindavi.patil.1048?mibextid=ZbWKwL"><i className="fa-brands fa-facebook"></i></a>
                        <Link to="/contact"><i className="fa-regular fa-address-book"></i></Link>
                    </div>
                </div>
            </div>

            <div className="ornament">❈</div>

            <p>Welcome to Parampara - The Wedding Culture, where we transform wedding dreams into magnificent realities. As the founder and creative director, I bring together the richness of Indian traditions with contemporary sophistication to create unforgettable celebrations. With over a decade of experience in wedding planning and event management, I understand that each wedding is unique and deserves personalized attention to detail.</p>
        </div>

        <div className="content-section">
            <h2>Our Signature Services</h2>
            <div className="services-grid">
                <div className="founder-service-card">
                    <h3>Traditional Wedding Collection</h3>
                    <p>Complete wedding collection that honor cultural traditions while incorporating modern elements</p>
                </div>
                <div className="founder-service-card">
                    <h3>Designable Kurtis</h3>
                    <p>a Beautiful Kurtis collection of cord and full kurtis with best deigns.</p>
                </div>
                <div className="founder-service-card">
                    <h3>sarees & foot wear</h3>
                    <p>foot wear and best sarees collection.</p>
                </div>
            </div>
        </div>

        <div className="content-section">
            <h2>Our Philosophy</h2>
            <p>At Parampara, we believe that every wedding should be a perfect reflection of the couple's love story while honoring their cultural heritage. Our approach combines:</p>
            <ul className="service-list">
                <li>Deep respect for traditional customs and rituals</li>
                <li>Contemporary design sensibilities</li>
                <li>Impeccable attention to detail</li>
                <li>Personalized service for each couple</li>
                <li>Sustainable and mindful celebration practices</li>
            </ul>
        </div>

        <div className="content-section">
            <h2>Client Testimonial</h2>
            <div className="testimonial">
                <p>Hindavi and her team at Parampara created magic at our wedding. They perfectly balanced our traditional ceremonies with modern elements, creating an unforgettable celebration that our families still talk about. Their attention to detail and dedication to maintaining the sanctity of our customs while adding contemporary touches made our wedding truly special.</p>
                <p className="testimonial-author">- Priya & Aditya</p>
            </div>
        </div>

        <div className="content-section">
            <h2>Connect With Us</h2>
            <div className="contact-info">
                <p>Let's create your perfect wedding celebration</p>
                <p>Email: info@paramparaweddings.com</p>
                <p>Phone: +91 98765 43210</p>
                <p>Location: Pune, Maharashtra</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Founder
