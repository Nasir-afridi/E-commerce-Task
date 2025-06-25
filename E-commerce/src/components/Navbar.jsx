const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white py-3">
        <div className="container">
          <a className="navbar-brand fs-3 fw-bold me-5" href="#">
            <img src="./main-logo.png" alt="" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item me-4">
                <a className="nav-link fw-medium" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link fw-medium" href="#">
                  ABOUT
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link fw-medium" href="#">
                  SHOP
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link fw-medium" href="#">
                  BLOGS
                </a>
              </li>

              <li className="nav-item dropdown me-4">
                <a
                  className="nav-link dropdown-toggle fw-medium"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PAGES
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      HOME
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      ABOUT
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      SHOP
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      BLOGS
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      CONTACT
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link fw-medium" href="#">
                  CONTACT
                </a>
              </li>
            </ul>

            <div className="d-flex align-items-center gap-4">
              <a href="#" className="fs-5 text-decoration-none text-dark">
                <i className="bi bi-search"></i>
              </a>
              <a href="#" className="fs-5 text-decoration-none text-dark">
                <i className="bi bi-person"></i>
              </a>
              <a href="#" className="fs-5 text-decoration-none text-dark">
                <i className="bi bi-heart"></i>
              </a>
              <a href="#" className="fs-5 text-decoration-none text-dark">
                <i className="bi bi-cart"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
