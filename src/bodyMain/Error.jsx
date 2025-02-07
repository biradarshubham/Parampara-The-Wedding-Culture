
import { Link } from 'react-router-dom'
import './BodyMain.css'

const Error = () => {
  return (
    <>
   <section className="page_404">
    <div className="error-container">
      <div className="error-row">
        <div className="error-col-sm-12 ">
          <div className="error-col-sm-10 col-sm-offset-1  text-center">
            <div className="error-four_zero_four_bg">
              <h1 className="error-text-center ">404</h1>
            </div>
            <div className="error-contant_box_404">
              <h3 className="error-h2">
                Look like you're lost
              </h3>
              <p>the page you are looking for not avaible!</p>
              <Link to="/" className="error-link_404">Go to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>

  )
}

export default Error
