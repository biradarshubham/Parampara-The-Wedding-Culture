import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footerContent'>
            <div className='footerSection'>
                <h3>ParamPara Wedding Culture</h3>
                <ul>
                    <li><a href="#">Who We Are</a></li>
                    <li><a href="#">Join Our Team</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">We Respect Your Privacy</a></li>
                    <li><a href="#">Fees & Payments</a></li>
                    <li><a href="#">Returns & Refunds Policy</a></li>
                    <li><a href="#">Promotions Terms & Conditions</a></li>
                </ul>
            </div>

            <div className="footerSection">
                <h3>Help</h3>
                <ul>
                    <li><a href="#">Track Your Order</a></li>
                    <li><a href="#">Frequently Asked Questions</a></li>
                    <li><a href="#">Returns</a></li>
                    <li><a href="#">Cancellations</a></li>
                    <li><a href="#">Payments</a></li>
                    <li><a href="#">Customer Care</a></li>
                    <li><a href="#">How Do I Redeem My Coupon</a></li>
                </ul>
            </div>

            <div className="footerSection">
                <h3>Shop by</h3>
                <ul>
                    <li><a href="#">All</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">Kids</a></li>
                    <li><a href="#">Indie</a></li>
                    <li><a href="#">Stores</a></li>
                    <li><a href="#">New Arrivals</a></li>
                    <li><a href="#">Brand Directory</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Collections</a></li>
                </ul>
            </div>

            <div className="footerSection">
                <h3>Follow us</h3>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                </ul>
            </div>
            </div>
            <div className="footer-last">
            <p className='p1'>ParamPara </p>
            <p className='p2'> -The Wedding Culture</p>
            <p className='p2'>&copy; 2025 All Rights Reserved.</p>
        </div>
        <Link className="top" href='/' target='top'>👻</Link>
    </footer>
    )
}

export default Footer

