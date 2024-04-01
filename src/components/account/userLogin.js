import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  const switchModesign = () => {
    setIsSignup(true);
  };
  const switchMode = () => {
    setIsSignup(false);
  };

  return (
    <>
      <div className="Container">
        <div className="Container-one">
          <div className="Logo-Image">
            <img className="Logo-of-company" src="../../../../Logo.png" alt="logoimage" />
          </div>
          <div className="image-field">
            <div className="image-section">
              <img src="../../../../change.png" alt="logoimage" />
              <div className="divider">i</div>
            </div>
            <div className="field-section">
              <div className="top-controller">
                <p
                  className={!isSignup ? "active" : "desactive"}
                  onClick={switchMode}
                >
                  Login
                </p>
                {!isSignup ? <span className="under_line">l</span> : <></>}
                <div className="simple-divider">1</div>
                <p
                  className={isSignup ? "active" : "desactive"}
                  onClick={switchModesign}
                >
                  Sign Up
                </p>
                {isSignup ? (
                  <span className="under_line_signup">l</span>
                ) : (
                  <></>
                )}
              </div>
              <div className="input-container">
                {isSignup && (
                  <input
                    type="text"
                    placeholder="First Name"
                    className="inputField"
                  />
                )}
                {isSignup && (
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="inputField"
                  />
                )}
                <input type="text" placeholder="Email" className="inputField" />
                <input
                  type="password"
                  placeholder="Password"
                  className="inputField"
                />
                {isSignup && (
                  <input
                    type="password"
                    placeholder="Re-enter Password"
                    className="inputField"
                  />
                )}
                {!isSignup && (
                  <div className="radiobutton_section">
                    <input
                      type="radio"
                      id="option1"
                      name="options"
                      value="option1"
                      className="radiobutton"
                    />
                    <label className="radio-label" htmlFor="option1">
                      Remember
                    </label>
                    <a className="link_forget" href="#">
                      Forgot Password?
                    </a>
                  </div>
                )}
                <Link to="/hr">
                  <button className="Login_button">Login</button>
                </Link>
                <div className="second_button">
                  <button className="Google_login">
                    Sign Up with Google <img src="../../../../google.png" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-link">
          <a href="#" className="copyrighttop">
            Release Notes
          </a>
          <p className="copyright">version 20.22.11</p>
          <p className="copyright">
            Copyright &copy; 2023-24 HRM and services.
          </p>
        </div>
      </footer>
     
    </>
  );
};

export default Login;
