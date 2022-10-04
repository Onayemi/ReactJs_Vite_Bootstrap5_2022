import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <section className='bg-mnp text-white py-5 link-text'>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Company Info</h5>
              <div className="footer_underline mb-3"></div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quo deleniti sed nulla, tenetur, dignissimos eos facere qui enim corrupti asperiores voluptatibus fugit nemo dolor commodi eius, eaque necessitatibus adipisci?</p>
            </div>

            <div className="col-md-3 link-text">
              <h5>Quick Links</h5>
              <div className="footer_underline mb-3"></div>
              <div><Link to="/">Home</Link></div>
              <div><Link to="/">About Us</Link></div>
              <div><Link to="/contact">Contact Us</Link></div>
              <div><Link to="/register">Register</Link></div>
              <div><Link to="/">Affliate Link</Link></div>
              <div><Link to="/">Blog</Link></div>
            </div>

            <div className="col-md-2 link-text">
              <h5>Quick Links</h5>
              <div className="footer_underline mb-3"></div>
              <div><Link to="/">Home</Link></div>
              <div><Link to="/">About Us</Link></div>
              <div><Link to="/contact">Contact Us</Link></div>
              <div><Link to="/">Blog</Link></div>
            </div>

            <div className="col-md-3 link-text">
              <h5>Contact Information</h5>
              <div className="footer_underline mb-3"></div>
              <div><Link to="/">Home</Link></div>
              <div><Link to="/">About Us</Link></div>
              <div><Link to="/">Contact Us</Link></div>
              <div><Link to="/">Blog</Link></div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer