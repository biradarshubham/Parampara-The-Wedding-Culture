import success from './success.mp4'
import './Forget.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const SuccessPass = () => {
    const [videoEnded, setVideoEnded] = useState(false);

  return (
    <div className='success-pass'>
      <video src={success}  autoPlay muted onEnded={() => setVideoEnded(true)}></video>
      {videoEnded &&
        <div className='succ-con'>
        <h1>Password changed successfully....</h1>
        <button><Link to="/login">Back To Login</Link></button>
        </div>
        }
    </div>
  )
}

export default SuccessPass


