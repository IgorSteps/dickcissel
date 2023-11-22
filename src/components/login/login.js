
import React from "react"

export default function (props) {
  return (
    <div className="login-form-container">
      <form className="login-form">
        <div className="login-form-content">
          <h3 className="login-form-title">Login</h3>

          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              autoComplete="username"
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group mt-3">
            <label>Password</label>
            <input
              autoComplete="current-password"
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>

          <div className="d-grid gap-2 mt-4">
            <button type="submit" className="btn btn-success">
              Login
            </button>
          </div>

        </div>
      </form>
    </div>
  )
}