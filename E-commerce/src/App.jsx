import { useState } from "react";

function App() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-white py-3">
        <div class="container">
          <a class="navbar-brand fs-3 fw-bold me-5" href="#">
            <img src="./main-logo.png" alt="" />
          </a>

          <div class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto">
              <li class="nav-item me-4">
                <a class="nav-link fw-medium" href="#">
                  HOME
                </a>
              </li>
              <li class="nav-item me-4">
                <a class="nav-link fw-medium" href="#">
                  ABOUT
                </a>
              </li>
              <li class="nav-item me-4">
                <a class="nav-link fw-medium" href="#">
                  SHOP
                </a>
              </li>
              <li class="nav-item me-4">
                <a class="nav-link fw-medium" href="#">
                  BLOGS
                </a>
              </li>
              <li class="nav-item me-4">
                <a class="nav-link fw-medium" href="#">
                  PAGES
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-medium" href="#">
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
}

export default App;
