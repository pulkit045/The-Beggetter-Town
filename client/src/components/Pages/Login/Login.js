import React from "react";
import loginimg from "../../../assets/login.jpg";
import { Link} from "react-router-dom";
import './Login.css';
const Login = () => {
  return (
    <>
      <div className="user-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="login-card border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  {/* <div className="row"> */}
                    {/* <div className="col-lg-6 d-none d-lg-block bg-login-image">
                      <img className="login-img" src={loginimg} alt="0" />
                    </div> */}
                    {/* <div className="col-lg-6"> */}
                      <div className="p-5 ">
                        <div className="text-center">
                          <h1 className="h4 mb-4 text-dark">Welcome Back!</h1>
                        </div>

                        
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control form-control-user"
                              placeholder="Enter Email Address..."
                              name="email"
                              required=""
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control form-control-user"
                              placeholder="Password"
                              required=""
                              name="password"
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn btn-primary btn-user btn-block form-control-user"
                          >Login</button>
                        
                        <hr />
                        <div className="text-center">
                          <Link to="/ForgetPassword" className="small" href="#">
                            Forgot Password?
                          </Link>
                        </div>
                        <div className="text-center">
                          <Link to="/register"> Create an Account!</Link>
                        </div>
                      </div>
                    {/* </div> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
