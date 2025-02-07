import success from './success.mp4'
import '../loginRegistration/Forget.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
    const [videoEnded, setVideoEnded] = useState(false);
  return (
    <div className='success-pass'>
      <video src={success}  autoPlay muted onEnded={() => setVideoEnded(true)}></video>
      {videoEnded &&
        <div className='succ-con'>
        <h1>Order Placed Successfully...</h1>
        <button><Link to="/">Back To shop</Link></button>
        </div>
        }
    </div>
  )
}

export default PaymentSuccess
