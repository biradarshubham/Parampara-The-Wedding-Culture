import { useState, useEffect } from "react";
import groom from "../Apis/GroomCollection.json";
import './MiniNavBar.css'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/ProductContext";
import groomCollection from '../Apis/GroomCollection.json'

const Groom = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    setData(groom.groom);
  }, []);

  function viewMore(id) { 
    navigate(`/viewMore/${id}`);
  }
  // cart.......
  const { addToCart } = useContext(CartContext);
  function cart(id) {
    const product = groomCollection.groom.find(item => item.id === id);
    if (product) {
      addToCart(product);
    }
  }
  return (
    <div className="collection-container">
            <h1 className="card-h1"> Beautiful wedding suites Collection 🤵🏻</h1>
            <div className="container">
            {data.map((item, i) => (
                <div className="card" key={i}>
                <div className="card-image">
                  <img src={item.image[0]} alt="Product 1" />
                  <div className="favorite"></div>
                </div>
                <div className="card-content">
                  <h2 className="card-title">{item.title}</h2>
                  <p className="card-description">
                    {item.category}
                  </p>
                  <div className="card-footer">
                    <span className="price">₹ {item.price}</span>
                    <a href="#" className="action-button" onClick={()=>{viewMore(item.id)}}>
                      View More
                    </a>
                    <a href="#" className="action-button" onClick={()=>{cart(item.id)}}>
                      Add
                    </a>
                  </div>
                </div>
                </div>
            ))}    
            </div>
          </div>
  )
}

export default Groom
