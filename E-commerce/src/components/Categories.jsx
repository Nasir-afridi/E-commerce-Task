import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const Categories = () => {
  return (
    <div className="container my-5">
      <h3 className="mb-4">Categories</h3>

      <div className="row g-4">
        {/* Card 1 */}
        <div className="col-12 col-sm-6 col-lg-4">
          <div className="position-relative rounded overflow-hidden">
            <img
              src="/category1.jpg"
              alt="Romance"
              className="img-fluid w-100"
              style={{ height: '200px', objectFit: "cover" }}
            />
            <span className="badge bg-danger position-absolute bottom-0 start-0 m-3 px-3 py-2 fs-6">
              Romance
            </span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-sm-6 col-lg-4">
          <div className="position-relative rounded overflow-hidden">
            <img
              src="/category2.jpg"
              alt="Lifestyle"
              className="img-fluid w-100"
              style={{ height: '200px', objectFit: "cover",  }}
            />
            <span className="badge bg-danger position-absolute bottom-0 start-0 m-3 px-3 py-2 fs-6">
              Lifestyle
            </span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-12 col-sm-6 col-lg-4">
          <div className="position-relative rounded overflow-hidden">
            <img
              src="/category3.jpg"
              alt="Recipe"
              className="img-fluid w-100"
              style={{ height: '200px', objectFit: "cover" }}
            />
            <span className="badge bg-danger position-absolute bottom-0 start-0 m-3 px-3 py-2 fs-6">
              Recipe
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
