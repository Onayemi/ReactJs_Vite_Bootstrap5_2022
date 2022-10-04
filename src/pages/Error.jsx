import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <section className='py-4 text-center bg-warning py-5'>
        <h2 className="text-white">Error Page</h2>
      </section>

      <section className='py-5 px-5 offset-4'>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-3 text-center">
              <h3 className='mt-5 error_404'>Page Not Found!</h3>
              <h1 className='err_404'>404</h1>
              <div>
                <Link to="/">Back Home</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Error