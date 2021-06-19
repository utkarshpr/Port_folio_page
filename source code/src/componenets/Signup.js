import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import '../App.css';

const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    work: '',
    password: '',
    cpassword: '',
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const Postdata = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': ' application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert('Invalid resgistration');
      console.log('Invalid registration');
    } else {
      window.alert('Successfull resgistration');
      console.log('Successfull registration');
      history.push('/signup');
    }
  };
  return (
    <>
      <div className="bkpic">
        <section className="signup">
          <div className="container mt-5">
            <div className="signup-content">
              <div className="signup_form">
                <h2 className="form-title">Sign up</h2>
                <form
                  method="POST"
                  className="register-form"
                  id="register-form"
                >
                  <div className="form-group">
                    <label htmlFor="name">
                      <i class="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name "
                      autoComplete="off"
                      value={user.name}
                      onChange={handleInputs}
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <i class="zmdi zmdi-email material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email "
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInputs}
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">
                      <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                    </label>
                    <input
                      type="number"
                      name="phone"
                      id="phone "
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInputs}
                      placeholder="Your Phone "
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="work">
                      <i class="zmdi zmdi-slideshow material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="work"
                      id="work "
                      autoComplete="off"
                      value={user.work}
                      onChange={handleInputs}
                      placeholder="Your Work"
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
                      value={user.password}
                      onChange={handleInputs}
                      placeholder="Your Password"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cpassword">
                      <i class="zmdi zmdi-lock material-icons-name"></i>
                    </label>
                    <input
                      type="password"
                      name="cpassword"
                      id="cpassword "
                      autoComplete="off"
                      value={user.cpassword}
                      onChange={handleInputs}
                      placeholder="Confirm Your Password"
                    />
                  </div>
                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signup"
                      id="signup"
                      className="form-submit"
                      value="register"
                      onClick={Postdata}
                    />
                  </div>
                </form>
              </div>
              <div className="signup-image">
                <figure>
                  <img
                    src="https://www.dreamhost.com/academy/wp-content/uploads/2020/12/started_2-sign-up-dreamhost-100-750x498.jpg"
                    alt="resgistration pic "
                    className="signup_image"
                  />
                </figure>
                <NavLink to="/signin" className="signup-image-link">
                  I am already registered
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Signup;
