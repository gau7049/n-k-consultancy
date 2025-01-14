import React from "react";
import introImage from "../../assets/real-estate-law.jpg";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="home">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to={"/home"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about-me">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#our-service">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#our-team">
                  Our Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-us">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="main d-flex flex-column-reverse flex-md-row align-items-center justify-content-between px-4 py-5">
        <div className="main-content text-center text-md-start">
          <h2 className="mb-3">
            Welcome to <span className="text-primary">N & K. Consultancy</span>
          </h2>
          <h5 className="text-muted">
            Providing expert legal advice and personalized solutions in
            corporate law, family law, and criminal defense. Trust us to guide
            you through your legal challenges with professionalism and care.
          </h5>
        </div>
        <div className="bg-img mb-4 mb-md-0">
          <img
            src={introImage}
            alt="N & K. Consultancy Introduction"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </>
  );
};

export default Main;
