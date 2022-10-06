import React from "react";
import Signupimg from "../../../assets/Register.png";
import { Link} from "react-router-dom";
import '../Login/Login.css';
const Signup = () => {

  return (
    <>
      <div className="user-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9">
              <div className="login-card border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-lg-6 d-none d-lg-block bg-login-image">
                      <img className="login-img" src={Signupimg} alt="0" />
                    </div>
                    <div className="col-lg-6">
                      <div className="p-5 ">
                        <div className="text-center">
                          <h1 className="h4 mb-4 text-dark">
                            Create an Account!
                          </h1>
                        </div>
  
                          <div className="form-group">
                            <input
                              className="form-control form-control-user"
                              name="name"
                              placeholder="Enter name"
                              maxLength="35"
                              type="text"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              className="form-control form-control-user"
                              name="email"
                              placeholder="Enter email"
                              type="email"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              className="form-control form-control-user"
                              type="password"
                              name="password"
                              placeholder="Password"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              className="form-control form-control-user"
                              type="password"
                              name="confirmPassword"
                              placeholder="Confirm password"
                            />
                          </div>
                          <div className="form-group">
                          </div>
                          <button
                            type=""
                            className="btn btn-primary btn-user btn-block form-control-user"
                          >
                         Register Account
                          </button>
                       
                        <hr />
                        <div className="text-center">
                          <Link to="/login">
                            Already have an account? Login!
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
