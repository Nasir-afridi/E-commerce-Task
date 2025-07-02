const BooklyFooter = () => {
  return (
    <footer className="bg-light py-5">
      <div className="container">
        <div className="row">
          {/* Company Info Section */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="mb-3">
              <img src="main-logo.png" alt="" />
            </div>
            <p className="text-muted small">
              Nisi, purus vitae, ultrices nunc. Sit ac et duis faucibus felis laoreet nibh augue. Gravida massa volutpat aenean odio erat nullam fringilla.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-muted">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-muted">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-muted">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-muted">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-muted">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold text-dark mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none small">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none small">About</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none small">Shop</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none small">Blogs</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none small">Contact</a>
              </li>
            </ul>
          </div>

          {/* Help & Info Section */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="fw-bold text-dark mb-3">Help & Info Help</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none small">Track Your Order</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none small">Returns Policies</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none small">Shipping + Delivery</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none small">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none small">Faqs</a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h6 className="fw-bold text-dark mb-3">Contact Us</h6>
            <p className="text-muted small mb-2">
              Do you have any queries or suggestions? 
              <a href="mailto:yourinfo@gmail.com" className="text-decoration-none">yourinfo@gmail.com</a>
            </p>
            <p className="text-muted small">
              If you need support? Just give us a call. 
              <a href="tel:+551112223344" className="text-decoration-none">+55 111 222 333 44</a>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="my-4" />
        <div className="row align-items-center">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="d-flex align-items-center">
              <span className="text-muted small me-3">We ship with:</span>
              <div className="d-flex gap-2">
                <img src="dhl.png" alt="DHL" className="img-fluid" style={{height: '20px', width: 'auto'}} />
                <img src="shippingcard.png" alt="FedEx" className="img-fluid" style={{height: '20px', width: 'auto'}} />
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="d-flex align-items-center justify-content-md-center">
              <span className="text-muted small me-3">Payment options:</span>
              <div className="d-flex gap-2">
                <img src="visa.jpg" alt="Visa" className="img-fluid" style={{height: '20px', width: 'auto'}} />
                <img src="shippingcard.png" alt="Mastercard" className="img-fluid" style={{height: '20px', width: 'auto'}} />
                <img src="paypal.jpg" alt="PayPal" className="img-fluid" style={{height: '20px', width: 'auto'}} />
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <p className="text-muted small mb-0 text-md-end">
              © Copyright 2024 Bookly. HTML Template by TemplatesJungle Distributed by ThemeWagon
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BooklyFooter;