import React from "react";

export const Category = () => {
  return (
    <>
      <div className="container py-5 mt-5">
        <div className="row text-center text-md-start">
          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <div className="d-flex align-items-start gap-3 justify-content-center justify-content-md-start">
              <i className="bi bi-cart fs-3 text-danger"></i>
              <div>
                <h6 className="fw-bold mb-1">Free Delivery</h6>
                <p className="mb-0 text-muted">
                  Consectetur adipi elit lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <div className="d-flex align-items-start gap-3 justify-content-center justify-content-md-start">
              <i className="bi bi-award fs-3 text-danger"></i>
              <div>
                <h6 className="fw-bold mb-1">Quality Guarantee</h6>
                <p className="mb-0 text-muted">
                  Dolor sit amet orem ipsu mcons ectetur adipi elit.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <div className="d-flex align-items-start gap-3 justify-content-center justify-content-md-start">
              <i className="bi bi-tag fs-3 text-danger"></i>
              <div>
                <h6 className="fw-bold mb-1">Daily Offers</h6>
                <p className="mb-0 text-muted">
                  Amet consectetur adipi elit lorem ipsum dolor sit.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <div className="d-flex align-items-start gap-3 justify-content-center justify-content-md-start">
              <i className="bi bi-shield-plus fs-3 text-danger"></i>
              <div>
                <h6 className="fw-bold mb-1">100% Secure Payment</h6>
                <p className="mb-0 text-muted">
                  Rem Lopsum dolor sit amet, consectetur adipi elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
