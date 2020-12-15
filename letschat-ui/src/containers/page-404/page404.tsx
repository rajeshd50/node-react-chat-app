import React from 'react'
import { Link } from 'react-router-dom'
import { URLS } from '../../config'

function PageNotFound() {
  return (
    <div className="login-box-container">
      <div className="login-box">
        <div className="login-logo-container">
          <img src="/images/icons/android-icon-512x512.png" />
        </div>
        <h2 className="login-text mt-3 mb-3">Page not found</h2>
        <div className="login-form-container">
          <div className="container-fluid">
            <div className="row login-form-row">
              <div className="col-12 page-not-found-link">
                Looking for something? Looks like it's not here. Go to <Link to={URLS.HOME}>Home Page</Link> instead.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound
