import React from "react";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import Navbar from "../Layout/Navbar/Navbar";
import Carousel from "./Carousel";
const Explore = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container">
        <div className="col-lg-12 col-md-8 mt-5 mb-5">
        <h3>Explore</h3>
        <h5>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </h5>
        </div>
      </div>
      <Carousel />
      <Footer />
    </>
  );
};

export default Explore;
