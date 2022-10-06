import React from "react";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import Navbar from "../Layout/Navbar/Navbar";
import Carousel from "./Carousel";

const Events = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container">
        <div className="col-lg-12 col-md-8 mt-5 mb-5">
        <h3>Events</h3>
        <h5>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </h5>
        </div>
      </div>
      <Carousel />
      <Footer />
    </>
  );
};

export default Events;
