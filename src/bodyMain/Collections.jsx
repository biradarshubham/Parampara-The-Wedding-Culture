import './BodyMain.css';
// our collection
import bride1 from '../assets/bride1.jpg'
import saree4 from '../assets/saree3.3.jpg'
import longKurti from '../assets/longkurti2.2.jpg'
// bride
import bride from '../assets/bride7.jpg'
import bride2 from '../assets/bride2.2.jpg'
import bride3 from '../assets/bride6.1.jpg'
//sarees
import saree from '../assets/saree4.jpg'
import saree1 from '../assets/saree2.2.jpg'
import saree2 from '../assets/saree1.2.jpg'
//kurtis
import kurtis from '../assets/longKurti1.jpg'
import kurtis1 from '../assets/longKurti5.jpg'
import kurtis2 from '../assets/longKurti4.2.jpg'
import { Link } from 'react-router-dom';

const Collections = () => {
  return (
    <>
    <div className='collection-container'>
    <h1 className='card-h1'> Our Collection❤️</h1>
    <div className="container">
        <div className="card">
            <div className="card-image">
                <img src={bride1} alt="Product 1"/>
                <div className="favorite"></div>
            </div>
            <div className="card-content">
                <span className="category">New Arrival</span>
                <h2 className="card-title">Best Bride Collection</h2>
                <p className="card-description">Experience luxury with our premium collection. Made with the finest materials and attention to detail.</p>
                <div className="card-footer">
                    <span className="price">$299.99</span>
                    <Link to="/weddingCollectionForBride" className="action-button">View More</Link>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="card-image">
                <img src={saree4} alt="Product 2"/>
                <div className="favorite"></div>
            </div>
            <div className="card-content">
                <span className="category">Best Seller</span>
                <h2 className="card-title">Best Saree Collection</h2>
                <p className="card-description">Timeless design meets modern comfort. Perfect for any occasion and every style.</p>
                <div className="card-footer">
                    <span className="price">$199.99</span>
                    <Link to="/saree" className="action-button">View More</Link>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="card-image">
                <img src={longKurti} alt="Product 3"/>
                <div className="favorite"></div>
            </div>
            <div className="card-content">
                <span className="category">Limited Edition</span>
                <h2 className="card-title">Best kurtis Collection</h2>
                <p className="card-description">Exclusive design with unique features. Limited quantities available for true collectors.</p>
                <div className="card-footer">
                    <span className="price">$399.99</span>
                    <Link to="/kurtis" className="action-button">View More</Link>
                </div>
            </div>
        </div>
    </div>
    </div>

    {/* second */}

    <div className='collection-container'>
    <h1 className='card-h11'>! Bride 👰🏻 !</h1>
    <div className="container">
        <div className="card">
            <div className="card-image">
                <img src={bride} alt="Product 1"/>
                <div className="favorite"></div>
            </div>
            <div className="card-content">
                <h2 className="card-title">Best Groom Collection</h2>
                <p className="card-description">Experience luxury with our premium collection. Made with the finest materials and attention to detail.</p>
                <div className="card-footer">
                    <span className="price">$299.99</span>
                    <Link to="/weddingCollectionForBride" className="action-button">View More</Link>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="card-image">
                <img src={bride2} alt="Product 2"/>
                <div className="favorite"></div>
            </div>
            <div className="card-content">
                <h2 className="card-title">Best Saree Collection</h2>
                <p className="card-description">Timeless design meets modern comfort. Perfect for any occasion and every style.</p>
                <div className="card-footer">
                    <span className="price">$199.99</span>
                    <Link to="/weddingCollectionForBride" className="action-button">View More</Link>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="card-image">
                <img src={bride3} alt="Product 3"/>
                <div className="favorite"></div>
            </div>
            <div className="card-content">
                <h2 className="card-title">Best kurtis Collection</h2>
                <p className="card-description">Exclusive design with unique features. Limited quantities available for true collectors.</p>
                <div className="card-footer">
                    <span className="price">$399.99</span>
                    <Link to="/weddingCollectionForBride" className="action-button">View More</Link>
                </div>
            </div>
        </div>
    </div>
    </div>

    {/* sarees */}

    <div className='collection-container'>
    <h1 className='card-h11'>! Sarees 🥻 !</h1>
    <div className="container">
        <div className="card">
            <div className="card-image">
                <img src={saree} alt="Product 1"/>
                <div className="favorite"></div>
            </div>
            <div className="card-content">
                <h2 className="card-title">Best Groom Collection</h2>
                <p className="card-description">Experience luxury with our premium collection. Made with the finest materials and attention to detail.</p>
                <div className="card-footer">
                    <span className="price">$299.99</span>
                    <Link to="/saree" className="action-button">View More</Link>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="card-image">
                <img src={saree1} alt="Product 2"/>
                <div className="favorite"></div>
            </div>
            <div className="card-content">
                <h2 className="card-title">Best Saree Collection</h2>
                <p className="card-description">Timeless design meets modern comfort. Perfect for any occasion and every style.</p>
                <div className="card-footer">
                    <span className="price">$199.99</span>
                    <Link to="/saree" className="action-button">View More</Link>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="card-image">
                <img src={saree2} alt="Product 3"/>
                <div className="favorite"></div>
            </div>
            <div className="card-content">
                <h2 className="card-title">Best kurtis Collection</h2>
                <p className="card-description">Exclusive design with unique features. Limited quantities available for true collectors.</p>
                <div className="card-footer">
                    <span className="price">$399.99</span>
                    <Link to="/saree" className="action-button">View More</Link>
                </div>
            </div>
        </div>
    </div>
    </div>


    {/* kurtis */}

    <div className='collection-container'>
    <h1 className='card-h11'>! kurtis 👗 !</h1>
    <div className="container">
        <div className="card">
            <div className="card-image">
                <img src={kurtis} alt="Product 1"/>
                <div className="favorite"></div>
            </div>
            <div className="card-content">
                <h2 className="card-title">Best Groom Collection</h2>
                <p className="card-description">Experience luxury with our premium collection. Made with the finest materials and attention to detail.</p>
                <div className="card-footer">
                    <span className="price">$299.99</span>
                    <Link to="/kurtis" className="action-button">View More</Link>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="card-image">
                <img src={kurtis1} alt="Product 2"/>
                <div className="favorite"></div>
            </div>
            <div className="card-content">
                <h2 className="card-title">Best Saree Collection</h2>
                <p className="card-description">Timeless design meets modern comfort. Perfect for any occasion and every style.</p>
                <div className="card-footer">
                    <span className="price">$199.99</span>
                    <Link to="/kurtis" className="action-button">View More</Link>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="card-image">
                <img src={kurtis2} alt="Product 3"/>
                <div className="favorite"></div>
            </div>
            <div className="card-content">
                <h2 className="card-title">Best kurtis Collection</h2>
                <p className="card-description">Exclusive design with unique features. Limited quantities available for true collectors.</p>
                <div className="card-footer">
                    <span className="price">$399.99</span>
                    <Link to="/kurtis" className="action-button">View More</Link>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Collections
