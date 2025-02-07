import { Link } from "react-router-dom"


const Service = () => {
  return (
    <>
    <header className="header">
        <div className="mandala"></div>
        <h1>Wedding Collection</h1>
        <p>Discover the perfect blend of tradition and contemporary elegance for your special day</p>
    </header>

    <section className="services">
        <div className="service-grid">
            <div className="service-card">
                <div className="service-icon">👰</div>
                <h3>Bridal Lehengas</h3>
                <p>Exquisite bridal lehengas featuring intricate embroidery, traditional motifs, and contemporary designs.</p>
                <Link to="/weddingCollectionForBride" className="explore-btn">Explore Collection</Link>
            </div>

            <div className="service-card">
                <div className="service-icon">🤵</div>
                <h3>Groom Wear</h3>
                <p>Sophisticated sherwanis and Indo-western outfits crafted with finest fabrics and detailed craftsmanship.</p>
                <Link to="/weddingCollectionForGroom" className="explore-btn">View Designs</Link>
            </div>

            <div className="service-card">
                <div className="service-icon">🥻</div>
                <h3>Family Collection</h3>
                <p>Coordinated ensembles for the entire family, from sarees to kurtis, designed for every wedding function.</p>
                <Link to="/saree" className="explore-btn">Browse Styles</Link>
            </div>

            <div className="service-card">
                <div className="service-icon">👗</div>
                <h3>Cord Kurtis</h3>
                <p>Modern fusion wear perfect for reception celebrations, combining traditional elements with contemporary style.</p>
                <Link to="/cordKurtis" className="explore-btn">Discover More</Link>
            </div>

            <div className="service-card">
                <div className="service-icon">✨</div>
                <h3>Custom Design</h3>
                <p>Personalized wedding attire crafted to your preferences, with expert consultation and premium materials.</p>
                <Link to="/contact" className="explore-btn">Start Creating</Link>
            </div>

            <div className="service-card">
                <div className="service-icon">👟</div>
                <h3>Mens Wear</h3>
                <p>Complete your look with our curated collection of mens Wear and other accessory</p>
                <Link to="/mensWear" className="explore-btn">Shop Now</Link>
            </div>
        </div>
    </section>
    </>
  )
}

export default Service
