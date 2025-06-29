export const DiscountSection = () => {
  return (
    <div className="container-fluid bg-light d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="row w-100 p-4 p-md-5 align-items-center">
        
        
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src="./banner-image3.png"
            alt="Discount Banner"
            className="img-fluid"
          />
        </div>

        
        <div className="col-md-6 text-center text-md-start">
          <h2 className="display-4 fw-bold lh-sm mb-4">
            30% Discount On<br />
            All Items. Hurry<br />
            Up !!!
          </h2>

          <div className="d-flex justify-content-center justify-content-md-start gap-4 mb-4">
            <div>
              <div className="fs-2 fw-bold text-danger">27</div>
              <div className="text-uppercase text-muted small">Days</div>
            </div>
            <div>
              <div className="fs-2 fw-bold text-danger">21</div>
              <div className="text-uppercase text-muted small">Hrs</div>
            </div>
            <div>
              <div className="fs-2 fw-bold text-danger">51</div>
              <div className="text-uppercase text-muted small">Min</div>
            </div>
            <div>
              <div className="fs-2 fw-bold text-danger">30</div>
              <div className="text-uppercase text-muted small">Sec</div>
            </div>
          </div>

          <button className="btn btn-danger btn-lg px-4 py-2">
            Shop Collection
          </button>
        </div>
      </div>
    </div>
  );
};
