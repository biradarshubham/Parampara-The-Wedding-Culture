import './BodyMain.css'
import logo from '../NavBarMain/Logo.png'

const Location = () => {
  return (
    <div className='loc'>
    <header>
        <img src={logo} alt="logo " />
        <p className="subtitle">Visit Our Stores</p>
    </header>

    <div className="locations-container">
        <div className="location-card">
            <h2 className="location-name">Wagholi</h2>
            <div className="location-details">
                <p>Haveli GNO 634A</p>
                <p>opp chroma Showroom pune.412207</p>
            </div>
            <div className="hours">
                <h3>Store Hours:</h3>
                <p>Monday - Friday: 10:00 AM - 9:00 PM</p>
                <p>Saturday: 10:00 AM - 8:00 PM</p>
                <p>Sunday: 11:00 AM - 6:00 PM</p>
            </div>
            <div className="contact-info">
                <p>📞 9168141103</p>
                <p>📧 paramparatheweedingculture@gmail.com</p>
            </div>
            <div className="map-placeholder">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.7305797152385!2d73.99124067465365!3d18.586181367167853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3000acc9d39%3A0x621713736fd71036!2sParampara%20the%20wedding%20culture%20Hindavi%20Patil%20(Pratik)!5e0!3m2!1sen!2sin!4v1737299209297!5m2!1sen!2sin"></iframe>
            </div>
        </div>

        <div className="location-card">
            <h2 className="location-name">Pathardi</h2>
            <div className="location-details">
                <p>55GF+MWJ,Pathardi</p>
                <p>pune,Maharashtra</p>
            </div>
            <div className="hours">
                <h3>Store Hours:</h3>
                <p>Monday - Friday: 10:00 AM - 9:00 PM</p>
                <p>Saturday: 10:00 AM - 8:00 PM</p>
                <p>Sunday: 11:00 AM - 6:00 PM</p>
            </div>
            <div className="contact-info">
                <p>📞 9168141103</p>
                <p>📧 paramparatheweedingculture@gmail.com</p>
            </div>
            <div className="map-placeholder">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.4231145888407!2d75.17218527466756!3d19.1767133488042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb45df8abe706d%3A0xe121c03098a69e02!2sparampara%20the%20wedding%20culture%20pathardi!5e0!3m2!1sen!2sin!4v1737299301523!5m2!1sen!2sin" ></iframe>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Location
