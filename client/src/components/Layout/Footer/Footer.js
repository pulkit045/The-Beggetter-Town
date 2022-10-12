import React from "react";
import './Footer.css';
const Footer = () => {
  return (
    <footer className="bg-footer mt-5">
      <div className="container text-center">
        <div className="row mb-3">
          <div className="col-md-4 col-lg-4">
            <h5 className="foot">FaceBook</h5>
          </div>
          <div className="col-md-4 col-lg-4">
            <h5 className="foot">Instagram</h5>
          </div>
          <div className="col-md-4 col-lg-4">
            <h5 className="foot">Twitter</h5>
          </div>
        </div>
        <h5 className="text-center"> 2022 Jaipur, Rajasthan, Inc. All Rights Reserved</h5>
      </div>
    </footer>
  );
};

export default Footer;
