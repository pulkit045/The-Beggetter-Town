import React from "react";
import fur1 from "../../assets/carousal/fur1.jpg";
import fur2 from "../../assets/carousal/fur2.jpg";
import fur3 from "../../assets/carousal/fur3.jpg";
const Carousel = () => {
  return (
    <>
      <div className="container">
        <div className="col-lg-12 col-md-8">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={fur1} class="d-block w-100" alt="image" />
              </div>
              <div class="carousel-item">
                <img src={fur2} class="d-block w-100" alt="image" />
              </div>
              <div class="carousel-item">
                <img src={fur3} class="d-block w-100" alt="image" />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
