import { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../contexts/ProductContext";
import empty from './empty.gif'
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    addToCart,
    decrementQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
  } = useContext(CartContext);
  return (
    <>
    {cart.length === 0 ? <div className="empty">
      <img src={empty} alt="cat is empty" />
      <h1>Your Cart is Empty</h1>
      <p>Just relax, let us help you find some first-class products.</p>
      <Link to="/">Start Shopping</Link>
    </div> : 
      <div className="cart-container">
        <div className="cart-items">
          <h1>Your shopping cart</h1>

          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="item-image">
                <img src={item.image[0]} alt={item.name} />
              </div>
              <div className="item-details">
                <h3>{item.title}</h3>

                <div className="cart-buttons-inc">
                <button
                  onClick={() => decrementQuantity(item.id)}
                  disabled={item.quantity === 1}
                >
                {" "}-{" "}
                </button>
                <button>{item.quantity}</button>
                <button onClick={() => addToCart(item)}> + </button>
                </div>

                <p className="price-per-item">₹ {item.price}</p>
              </div>
              <button className="cart-remove" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          {cart.length > 0 && (
            <button className="cart-all-remove"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          )}

            <div className="delivery-info">
                <span className="delivery-icon">🚚</span>
                Free Delivery within 1-2 weeks
            </div>

        </div>

        <div className="cart-summary">
          <div className="coupon-section">
            <h2>Let's Shop Now</h2>
            <div className="coupon-input">
              <input type="text" placeholder="Coupon code" />
              <button>Apply</button>
            </div>
          </div>

          <div className="price-summary">
          
            <div className="summary-row">
              
              <span>Total price:</span>
              <span>₹ {cartTotal.toFixed(2)}</span>
            </div>
          </div>

          <div className="cart-actions">
            <button className="purchase-btn"><Link to="/payment">Make Purchase</Link></button>
            <button className="back-btn"><Link to="/">Back to shop</Link></button>
          </div>
        </div>
      </div>
        }
      </>
  );
};

export default Cart;
