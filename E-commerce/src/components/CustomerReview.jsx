import React from "react";

export const CustomerReview = () => {
  return (
    <section class="py-5 bg-secondary mt-5">
      <div class="container">
        <h2 class="text-center mb-5 pb-3 text-light">Customers Reviews</h2>

        <div id="reviewCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row justify-content-center">
                <div class="col-md-8">
                  <div class="card shadow-sm h-100">
                    <div class="card-body p-4">
                      <p class="card-text">
                        "I stumbled upon this bookstore while visiting the city,
                        and it instantly became my favorite spot. The cozy
                        atmosphere, friendly staff, and wide selection of books
                        make every visit a delight!"
                      </p>
                      <div class="text-warning mb-3">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </div>
                      <p class="card-text fw-bold mt-3 mb-0">Emma Chamberlin</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="row justify-content-center">
                <div class="col-md-8">
                  <div class="card shadow-sm h-100">
                    <div class="card-body p-4">
                      <p class="card-text fst-italic">
                        "As an avid reader, I'm always on the lookout for new
                        releases, and this bookstore never disappoints. They
                        always have the latest titles, and their recommendations
                        have introduced me to some incredible reads!"
                      </p>
                      <div class="text-warning mb-3">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-half"></i>
                      </div>
                      <p class="card-text fw-bold mt-3 mb-0">John Smith</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="row justify-content-center">
                <div class="col-md-8">
                  <div class="card shadow-sm h-100">
                    <div class="card-body p-4">
                      <p class="card-text fst-italic">
                        "I ordered a few books online from this store, and I was
                        impressed by the quick delivery and careful packaging.
                        It's clear that they prioritize customer satisfaction,
                        and I'll definitely be shopping here again!"
                      </p>
                      <div class="text-warning mb-3">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </div>
                      <p class="card-text fw-bold mt-3 mb-0">Sarah Johnson</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="row justify-content-center">
                <div class="col-md-8">
                  <div class="card shadow-sm h-100">
                    <div class="card-body p-4">
                      <p class="card-text fst-italic">
                        “I stumbled upon this tech store while searching for a
                        new laptop, and I couldn't be happier with my
                        experience! The staff was incredibly knowledgeable and
                        guided me through the process of choosing the perfect
                        device for my needs. Highly recommended!”
                      </p>
                      <div class="text-warning mb-3">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star"></i>
                      </div>
                      <p class="card-text fw-bold mt-3 mb-0">Michael Brown</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="row justify-content-center">
                <div class="col-md-8">
                  <div class="card shadow-sm h-100">
                    <div class="card-body p-4">
                      <p class="card-text fst-italic">
                        “I stumbled upon this tech store while searching for a
                        new laptop, and I couldn't be happier with my
                        experience! The staff was incredibly knowledgeable and
                        guided me through the process of choosing the perfect
                        device for my needs. Highly recommended!”
                      </p>
                      <div class="text-warning mb-3">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </div>
                      <p class="card-text fw-bold mt-3 mb-0">Lisa Williams</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#reviewCarousel"
            data-bs-slide="prev"
            style={{
              width: "40px",
              height: "40px",
              left: "-20px",
              top: "50%",
              transform: "translateY(-50%)",
              opacity: 1,
              background: "rgba(0,0,0,0.6)",
              borderRadius: "50%",
            }}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
              style={{
                width: "1.5rem",
                height: "1.5rem",
                filter: "drop-shadow(0 0 2px rgba(0,0,0,0.5))",
              }}
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#reviewCarousel"
            data-bs-slide="next"
            style={{
              width: "40px",
              height: "40px",
              right: "-20px",
              top: "50%",
              transform: "translateY(-50%)",
              opacity: 1,
              background: "rgba(0,0,0,0.6)",
              borderRadius: "50%",
            }}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
              style={{
                width: "1.5rem",
                height: "1.5rem",
                filter: "drop-shadow(0 0 2px rgba(0,0,0,0.5))",
              }}
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};
