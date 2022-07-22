import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Sign in to your Account</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        {error !== "" ? <div className="error-color">{error}</div> : ""}
        <div className="form-group">
          <a href="/">Forgot Password?</a>
        </div>
        <div className="login_btns">
          {" "}
          <button className="button-primary">
            {" "}
            <span>Sign In</span>
          </button>
          <hr />
          <NavLink
            to="/registerForm"
            className="btn btn-outline-dark ms-2 create_acnt"
          >
            <span>CREATE ACCOUNT</span>
          </NavLink>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
