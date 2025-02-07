import { useContext } from 'react';
import './Cart.css'
import { CartContext } from '../contexts/ProductContext';
import gpay from '../assets/Payment/gpay.png'
import phone from '../assets/Payment/phonepay.png'
import cash from '../assets/Payment/cash.png'
import paytm from '../assets/Payment/paytm.png'
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Payment = () => {

  const {
      cart,
      cartTotal
    } = useContext(CartContext);

  return (
    <div className="pay-checkout-container">
      <div className="pay-billing-details">
        <h2>Billing details</h2>
        <form className='pay'>
            <div className="pay-form-grid">
                <div className="pay-form-group">
                    <label className="pay-required" htmlFor="firstname">First name</label>
                    <input type="text" id="firstname" required/>
                </div>
                <div className="pay-form-group">
                    <label className="pay-required" htmlFor="lastname">Last name</label>
                    <input type="text" id="lastname" required />
                </div>
            </div>
            
            <div className="pay-form-group form-full">
                <label className="pay-required" htmlFor="email">Email Id</label>
                <input type="email" id="email" />
            </div>

            <div className="pay-form-group form-full">
                <label className="pay-required" htmlFor="country">Country</label>
                <select id="pay-country" required>
                    <option value="ngt">Select</option>
                    <option value="in">India</option>
                    <option value="UK">United Kingdom(UK)</option>
                </select>
            </div>

            <div className="pay-form-group form-full">
                <label className="pay-required" htmlFor="street">Street address</label>
                <input type="text" id="pay-street" placeholder="House number and street name" required />
                <input type="text" placeholder="Apartment, suite, unit etc. (optional)" className="mt-1" />
            </div>

            <div className="pay-form-group form-full">
                <label className="pay-required" htmlFor="city">Town / City</label>
                <input type="text" id="city" required />
            </div>

            <div className="pay-form-group form-full">
                <label className="pay-required" htmlFor="postcode">Postcode / PinCode</label>
                <input type="text" id="pay-postcode" required/>
            </div>
        </form>
      </div>

      <div className="pay-order-summary">
        <h2>Your order</h2>
        <table className="pay-order-table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th className="pay-price">Total</th>
                </tr>
            </thead>
            <tbody>
              {cart.map((item,i)=>(
                  <tr key={i}>
                  <td>{item.title} × {item.quantity}</td>
                  <td className="pay-price">{item.price}</td>
                  </tr>
              ))}
                
                <tr>
                    <td>Subtotal</td>
                    <td className="pay-price">₹ {cartTotal.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>GST</td>
                    <td className="pay-price">+5%</td>
                </tr>
                <tr>
                    <td>Coupon</td>
                    <td className="pay-price">-0</td>
                </tr>
                <tr className="pay-total-row">
                    <td>Total</td>
                    <td className="pay-price">₹ {cartTotal.toFixed(2)*1.05-0}</td>
                </tr>
            </tbody>
        </table>

        <div className="pay-payment-method">
            <label>
                {/* <input type="radio" name="payment" checked />
                Check payments */}
                <select id="pay-country" required>
                    <option value="py">Phone Pay</option>
                    <option value="py">Google Pay</option>
                    <option value="py">Pay tm</option>
                    <option value="py">Cash on Delivery</option>
                </select>
            </label>
            <div className="pay-payment-info" >
            <a href="https://www.phonepe.com" target="_blank">
              <img src={phone} alt="" className='pay1'/>
            </a>
            <a href="https://pay.google.com" target="_blank">
            <img src={gpay} alt="" className='pay1'/>
            </a>
            <a href="https://paytm.com/download-paytm-app" target="_blank">
            <img src={paytm} alt="" className='pay1' />
            </a>
            
            <img src={cash} alt=""  className='pay1'
            onClick={()=>(toast.error("Paisa de re"))}/>
            </div>
            <ToastContainer/>
        </div>

        <button className="pay-place-order"><Link to="/paymentSuccess" >Place order</Link></button>
        </div>
    </div>
  )
}

export default Payment
