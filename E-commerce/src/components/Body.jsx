import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const Body = () => {
  return (
    <div className="container-fluid px-0">
      <div
        id="bookCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ height: "100vh", minHeight: "500px" }}
      >
        {/* Slides */}
        <div className="carousel-inner h-100">
          <div className="carousel-item active h-100">
            <div className="d-flex h-100 bg-light align-items-center">
              <div className="container py-3 py-md-5">
                <div className="row align-items-center flex-column-reverse flex-md-row text-center text-md-start">
                  <div className="col-md-6 mb-4 mb-md-0">
                    <h1 className="display-4 mb-3 mb-md-4">
                      The Fine Print Book Collection
                    </h1>
                    <p className="text-muted mb-3 mb-md-4">Grab it now!</p>
                    <button className="btn btn-dark btn-lg px-4 py-2">
                      Shop Collection
                    </button>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="./public/banner-image2.png"
                      alt="Book Collection"
                      className="img-fluid mx-auto d-block"
                      style={{ maxHeight: "90vh" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item h-100">
            <div className="d-flex h-100 bg-light align-items-center">
              <div className="container py-3 py-md-5">
                <div className="row align-items-center flex-column-reverse flex-md-row text-center text-md-start">
                  <div className="col-md-6 mb-4 mb-md-0">
                    <h1 className="display-4 mb-3 mb-md-4">
                      How Innovation <br className="d-none d-md-block" /> Works
                    </h1>
                    <p className="text-muted mb-3 mb-md-4">
                      Discount available. Grab it now!
                    </p>
                    <button className="btn btn-dark btn-lg px-4 py-2">
                      Shop Product
                    </button>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="./public/banner-image1.png"
                      alt="Innovation Book"
                      className="img-fluid mx-auto d-block"
                      style={{ maxHeight: "90vh" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item h-100">
            <div className="d-flex h-100 bg-light align-items-center">
              <div className="container py-3 py-md-5">
                <div className="row align-items-center flex-column-reverse flex-md-row text-center text-md-start">
                  <div className="col-md-6 mb-4 mb-md-0">
                    <h1 className="display-4 mb-3 mb-md-4">
                      Your Heart is the Sea
                    </h1>
                    <p className="text-muted mb-3 mb-md-4">
                      Limited stocks available. Grab it now!
                    </p>
                    <button className="btn btn-dark btn-lg px-4 py-2">
                      Shop Collection
                    </button>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="./public/banner-image.png"
                      alt="Poetry Book"
                      className="img-fluid mx-auto d-block"
                      style={{ maxHeight: "90vh" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#bookCarousel"
          data-bs-slide="prev"
          style={{ width: "5%", filter: "invert(1)" }}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#bookCarousel"
          data-bs-slide="next"
          style={{ width: "5%", filter: "invert(1)" }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Body;
