
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import brideCollection from '../Apis/BrideCollection.json';
import saree from '../Apis/Sarees.json';
import child from '../Apis/Child.json';
import cordKurtis from '../Apis/CordKurtis.json';
import kurtis from '../Apis/Kurtis.json'
import groom from '../Apis/GroomCollection.json'
import mensWear from '../Apis/MensWear.json'
import './MiniNavBar.css';
import { useContext } from 'react';
import { CartContext } from '../contexts/ProductContext';

const ViewMore = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const collections = [
      brideCollection.brideCollection,
      saree.sarees,
      child.child,
      cordKurtis.cordKurtis,
      kurtis.kurtis,
      groom.groom,
      mensWear.menswear
    ];

    for (const collection of collections) {
      const selectedItem = collection.find((item) => item.id === parseInt(id));
      if (selectedItem) {
        setItem(selectedItem);
        break;
      }
    }
    
  }, [id]);
  function add(){
    const collections = [
      brideCollection.brideCollection,
      saree.sarees,
      child.child,
      cordKurtis.cordKurtis,
      kurtis.kurtis,
      groom.groom,
      mensWear.menswear
    ];

    for (const collection of collections) {
      const selectedItem = collection.find((item) => item.id === parseInt(id));
      if (selectedItem) {
        addToCart(selectedItem);
        break;
      }
    }
  }
    
  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className='view'>
    <div className="view-container">
        <div className="view-product-image">
            <img src={item.image[0]} alt="product image"/>
            
        </div>
        <div className="view-product-info">
            <div className="view-category">{item.category}</div>
            <h1 className="view-title">{item.title}</h1>
            <div className="view-price-container">
                <span className="view-price">₹ {item.price}</span>
            </div>
            <p className="view-description">
                {item.description}
            </p>
            <div className='view-button'>
            {/* Contact To Order */}
            <Link to="/" className="view-add-to-cart">Back To Home</Link>
            <button className="view-add-to-cart" onClick={add}>Add To Cart</button>
            </div>
        </div>
    </div>
    </div>
  );
};

export default ViewMore;