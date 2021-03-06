import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import '../App.css';

const Signin = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch('/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = res.json();
    if (res.status === 422 || res.status === 401 || !data) {
      window.alert('Invalid credential');
    } else {
      window.alert('Welcome');
      history.push('/');
    }
  };
  return (
    <>
      <div className="bkpic1">
        <section className="signin">
          <div className="container mt-5">
            <div className="signin-content">
              <div className="signin-image">
                <figure>
                  <img
                    src="data:image/png;base64,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"
                    alt="resgistration pic "
                  />
                </figure>
                <NavLink to="/signup" className="signin-image-link">
                  Create an account
                </NavLink>
                <br />
                <br />
              </div>

              <div className="signin_form">
                <h2 className="form-title">Sign in</h2>
                <form
                  method="POST"
                  className="register-form"
                  id="register-form"
                >
                  <div className="form-group">
                    <label htmlFor="email">
                      <i class="zmdi zmdi-email material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email "
                      autoComplete="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">
                      <i class="zmdi zmdi-lock material-icons-name"></i>
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password "
                      autoComplete="off"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Your Password"
                    />
                  </div>

                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signin"
                      id="signin"
                      className="form-submit"
                      value="Log in"
                      onClick={loginUser}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Signin;
