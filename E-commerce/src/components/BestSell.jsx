import React from 'react'

export const BestSell = () => {
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold">Best Selling Items</h4>
        <button className="btn btn-danger rounded-pill px-4">View All</button>
      </div>

      <div id="bookCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3">

              {/* Card 1 */}
              <div className="col">
                <div className="card h-100 text-center position-relative">
                  <div className="position-absolute bg-danger text-white px-2 small rounded-top">10% off</div>
                  <img src="./product-item1.png" className="card-img-top" height="220" style={{ objectFit: 'cover' }}/>
                  <div className="card-body">
                    <h6 className="fw-bold mb-0">House Of Sky Breath</h6>
                    <small className="text-muted">Lauren Asher</small>
                    <div className="text-warning">★★★★★</div>
                    <p className="text-danger fw-bold">$870</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col">
                <div className="card h-100 text-center">
                  <img src="./product-item2.png" className="card-img-top" height="220" style={{ objectFit: 'cover' }} alt="Book 2" />
                  <div className="card-body">
                    <h6 className="fw-bold mb-0">Heartland Stars</h6>
                    <small className="text-muted">Lauren Asher</small>
                    <div className="text-warning">★★★★★</div>
                    <p className="text-danger fw-bold">$870</p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col">
                <div className="card h-100 text-center">
                  <img src="product-item3.png" className="card-img-top" height="220" style={{ objectFit: 'cover' }} alt="Book 3" />
                  <div className="card-body">
                    <h6 className="fw-bold mb-0">Heavenly Bodies</h6>
                    <small className="text-muted">Lauren Asher</small>
                    <div className="text-warning">★★★★★</div>
                    <p className="text-danger fw-bold">$870</p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col">
                <div className="card h-100 text-center position-relative">
                  <div className="position-absolute bg-danger text-white px-2 small rounded-top">10% off</div>
                  <img src="product-item4.png" className="card-img-top" height="220" style={{ objectFit: 'cover' }} alt="Book 4" />
                  <div className="card-body">
                    <h6 className="fw-bold mb-0">His Saving Grace</h6>
                    <small className="text-muted">Lauren Asher</small>
                    <div className="text-warning">★★★★★</div>
                    <p className="text-danger fw-bold">$870</p>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="col">
                <div className="card h-100 text-center">
                  <img src="product-item5.png" className="card-img-top" height="220" style={{ objectFit: 'cover' }} alt="Book 5" />
                  <div className="card-body">
                    <h6 className="fw-bold mb-0">My Dearest Darkest</h6>
                    <small className="text-muted">Lauren Asher</small>
                    <div className="text-warning">★★★★★</div>
                    <p className="text-danger fw-bold">$870</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
