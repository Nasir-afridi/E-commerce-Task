export const BookListing = () => {
  return (
    <div className="container py-5">
      <div className="row text-start">

        {/* Featured */}
        <div className="col-md-3">
          <div className="border rounded p-3 shadow-sm">
            <h4 className="mb-4 text-center">Featured</h4>

            <div className="d-flex mb-4 border-bottom pb-3">
              <img src="/product-item2.png" style={{ width: '50px', height: '80px' }} className="me-3" />
              <div>
                <p className="mb-0 fw-semibold">Echoes Of The Ancients</p>
                <small className="text-muted">Lauren Asher</small><br />
                ⭐⭐⭐⭐⭐<br />
                <span className="text-danger fw-bold">$870</span>
              </div>
            </div>

            <div className="d-flex mb-4 border-bottom pb-3">
              <img src="product-item1.png" style={{ width: '50px', height: '80px' }} className="me-3" />
              <div>
                <p className="mb-0 fw-semibold">The Midnight Garden</p>
                <small className="text-muted">Lauren Asher</small><br />
                ⭐⭐⭐⭐⭐<br />
                <span className="text-danger fw-bold">$870</span>
              </div>
            </div>

            <div className="d-flex mb-4 border-bottom pb-3">
              <img src="product-item3.png" style={{ width: '50px', height: '80px' }} className="me-3" />
              <div>
                <p className="mb-0 fw-semibold">Shadow Of The Serpent</p>
                <small className="text-muted">Lauren Asher</small><br />
                ⭐⭐⭐⭐⭐<br />
                <span className="text-danger fw-bold">$870</span>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Items */}
        <div className="col-md-3">
          <div className="border rounded p-3 shadow-sm">
            <h4 className="mb-4 text-center">Latest Items</h4>

            <div className="d-flex mb-4 border-bottom pb-3">
              <img src="product-item4.png" style={{ width: '50px', height: '80px' }} className="me-3" />
              <div>
                <p className="mb-0 fw-semibold">Whispering Winds</p>
                <small className="text-muted">Lauren Asher</small><br />
                ⭐⭐⭐⭐⭐<br />
                <span className="text-danger fw-bold">$870</span>
              </div>
            </div>

            <div className="d-flex mb-4 border-bottom pb-3">
              <img src="product-item5.png" style={{ width: '50px', height: '80px' }} className="me-3" />
              <div>
                <p className="mb-0 fw-semibold">The Forgotten Realm</p>
                <small className="text-muted">Lauren Asher</small><br />
                ⭐⭐⭐⭐⭐<br />
                <span className="text-danger fw-bold">$870</span>
              </div>
            </div>

            <div className="d-flex mb-4 border-bottom pb-3">
              <img src="product-item6.png" style={{ width: '50px', height: '80px' }} className="me-3" />
              <div>
                <p className="mb-0 fw-semibold">Moonlit Secrets</p>
                <small className="text-muted">Lauren Asher</small><br />
                ⭐⭐⭐⭐⭐<br />
                <span className="text-danger fw-bold">$870</span>
              </div>
            </div>
          </div>
        </div>

        {/* Best Reviewed */}
        <div className="col-md-3">
          <div className="border rounded p-3 shadow-sm">
            <h4 className="mb-4 text-center">Best Reviewed</h4>

            <div className="d-flex mb-4 border-bottom pb-3">
              <img src="product-item7.png" style={{ width: '50px', height: '80px' }} className="me-3" />
              <div>
                <p className="mb-0 fw-semibold">The Crystal Key</p>
                <small className="text-muted">Lauren Asher</small><br />
                ⭐⭐⭐⭐⭐<br />
                <span className="text-danger fw-bold">$870</span>
              </div>
            </div>

            <div className="d-flex mb-4 border-bottom pb-3">
              <img src="product-item8.png" style={{ width: '50px', height: '80px' }} className="me-3" />
              <div>
                <p className="mb-0 fw-semibold">Starlight Sonata</p>
                <small className="text-muted">Lauren Asher</small><br />
                ⭐⭐⭐⭐⭐<br />
                <span className="text-danger fw-bold">$870</span>
              </div>
            </div>

            <div className="d-flex mb-4 border-bottom pb-3">
              <img src="product-item9.png" style={{ width: '50px', height: '80px' }} className="me-3" />
              <div>
                <p className="mb-0 fw-semibold">Tales Of The Enchanted Forest</p>
                <small className="text-muted">Lauren Asher</small><br />
                ⭐⭐⭐⭐⭐<br />
                <span className="text-danger fw-bold">$870</span>
              </div>
            </div>
          </div>
        </div>

        {/* On Sale */}
        <div className="col-md-3">
          <div className="border rounded p-3 shadow-sm">
            <h4 className="mb-4 text-center">On Sale</h4>

            <div className="d-flex mb-4 border-bottom pb-3">
              <img src="product-item10.png" style={{ width: '50px', height: '80px' }} className="me-3" />
              <div>
                <p className="mb-0 fw-semibold">The Phoenix Chronicles</p>
                <small className="text-muted">Lauren Asher</small><br />
                ⭐⭐⭐⭐⭐<br />
                <span className="text-muted text-decoration-line-through">$1666</span>{" "}
                <span className="text-danger fw-bold">$999</span>
              </div>
            </div>

            <div className="d-flex mb-4 border-bottom pb-3">
              <img src="product-item11.png" style={{ width: '50px', height: '80px' }} className="me-3" />
              <div>
                <p className="mb-0 fw-semibold">Dreams Of Avalon</p>
                <small className="text-muted">Lauren Asher</small><br />
                ⭐⭐⭐⭐⭐<br />
                <span className="text-muted text-decoration-line-through">$500</span>{" "}
                <span className="text-danger fw-bold">$410</span>
              </div>
            </div>

            <div className="d-flex mb-4 border-bottom pb-3">
              <img src="product-item12.png" style={{ width: '50px', height: '80px' }} className="me-3" />
              <div>
                <p className="mb-0 fw-semibold">Legends Of The Dragon Isles</p>
                <small className="text-muted">Lauren Asher</small><br />
                ⭐⭐⭐⭐⭐<br />
                <span className="text-muted text-decoration-line-through">$600</span>{" "}
                <span className="text-danger fw-bold">$500</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
