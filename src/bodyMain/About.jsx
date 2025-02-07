import './BodyMain.css';
import about1 from '../assets/aboutpic.jpg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="about-section">
        <div className="container">
            <div className="about-content">
                <div className="about-image">
                    <img src={about1} alt="ParamPara the wedding culture"/>
                </div>
                <div className="about-text">
                    <h1 className="section-title">About ParamPara The Wedding Culture</h1>
                    <p className="tagline">Where Tradition Meets Contemporary Fashion</p>
                    <p className="about-description">
                        Founded in 2022, ParamPara is more than just a clothing brand - it's a celebration of India's rich textile heritage reimagined for the modern world. We blend traditional craftsmanship with contemporary designs to create pieces that tell stories of our cultural legacy while embracing modern aesthetics.
                    </p>
                    <p className="about-description">
                        Our commitment to sustainable fashion and ethical manufacturing practices ensures that every garment not only looks beautiful but also contributes to preserving traditional artisanal skills and supporting local communities.
                    </p>
                    <div className="features">
                        <div className="feature">
                            <h3>Sustainable</h3>
                            <p>Eco-friendly materials and processes</p>
                        </div>
                        <div className="feature">
                            <h3>Handcrafted</h3>
                            <p>Traditional artisanal techniques</p>
                        </div>
                        <div className="feature">
                            <h3>Ethical</h3>
                            <p>Fair trade and local artisan support</p>
                        </div>
                        <div className='founder-btn'>
                            <Link to="/founder">Know More About CEO or Founder Of ParamPara</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
