import React from "react";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import Navbar from "../Layout/Navbar/Navbar";
import Carousel from "./Carousel";

const ContactUs = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container">
        <div className="col-lg-12 col-md-8 mt-5 mb-5">
        <h3>Contact Us</h3>
        <h5>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </h5></div>
      </div>
      <Carousel />
      <Footer />
    </>
  );
};

export default ContactUs;
