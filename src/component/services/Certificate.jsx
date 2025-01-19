import React, { useEffect } from "react";
import PopUp from "./PopUp";
import { useNavigate, Link } from "react-router-dom";
import death from "../../assets/death.jpg";
import birth from "../../assets/birth.jpg";
import marriage from "../../assets/marriage.jpg";
import img1 from "../../assets/advocate.jpg";
import img2 from "../../assets/advocate1.jpg";

const Certificate = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="in-services">
      <PopUp />

      <div className="bg-white px-md-5 px-4 py-3" id="home">
        <Link to={'/home'} className="text-black">
        <strong>
          <i class="ri-arrow-left-line"></i>
        </strong> {' '}
        Go Back to Home
        </Link>
      </div>

      <div className="bg-white my-3 px-md-5 px-4 py-3">
        <h2>Certificate Services</h2>
        <p className="text-muted">
          Our Certificate Services streamline the process of obtaining essential
          documents for various personal and legal needs. We offer expert
          assistance in acquiring Death Certificates, Birth Certificates, 7/12
          Utaro, Property Certificates, and Marriage Certificates. With our
          professional guidance, you can ensure timely and accurate issuance of
          these important certificates, facilitating smooth administrative
          processes. Explore the various certificate services we provide:
        </p>
      </div>
      <div
        id="death-certificate"
        className="mt-4 bg-white my-3 px-md-5 px-4 py-3 gap-5 d-md-flex justify-content-center align-items-center"
      >
        <div>
          <h3>Death Certificate</h3>
          <div className="d-block d-md-none text-center my-5">
            <img src={death} alt="" />
          </div>
          <p className="text-muted">
            Our Death Certificate service assists in obtaining the official
            record of a person's death, required for legal and administrative
            purposes.
          </p>
          {/* <strong>Key Features</strong>
          <ol>
            <li className="text-muted">Application assistance</li>
            <li className="text-muted">Documentation preparation</li>
            <li className="text-muted">Submission and follow-up</li>
            <li className="text-muted">Accurate record issuance</li>
          </ol> */}
          <strong>Major Document Requirements</strong>
          <ol>
            <li className="text-muted">Proof of death (hospital or medical certificate)</li>
            <li className="text-muted">ID proof of the deceased</li>
            <li className="text-muted">Proof of relationship (if applicable)</li>
            <li className="text-muted">Address proof of the deceased</li>
          </ol>
          <p className="text-muted">
          For detailed information about Interest Rates, Fees, and Process
          Steps, Please{" "}
          <button
            type="button"
            class="contact-us-btn"
            data-bs-toggle="modal"
            data-bs-target="#contactNow"
            >
            Contact Us
          </button>
            </p>
        </div>
        <img className="d-none d-md-block" src={death} alt="" />
      </div>
      <div
        id="birth"
        className="mt-4 bg-white my-3 px-md-5 px-4 py-3  gap-5 d-md-flex justify-content-center align-items-center"
      >
        <img className="d-none d-md-block" src={birth} alt="" />
        <div>
          <h3>Birth Certificate</h3>
          <div className="d-block d-md-none text-center my-5">
            <img src={birth} alt="" />
          </div>
          <p className="text-muted">
            Our Birth Certificate service helps you obtain an official record of
            a child's birth, essential for identity verification and various
            official processes.
          </p>
          {/* <strong>Key Features</strong>
          <ol>
            <li className="text-muted">Application guidance</li>
            <li className="text-muted">Document preparation</li>
            <li className="text-muted">Submission and follow-up</li>
            <li className="text-muted">Accurate record issuance</li>
          </ol> */}
          <strong>Major Document Requirements</strong>
          <ol>
            <li className="text-muted">Hospital birth report</li>
            <li className="text-muted">ID proof of parents</li>
            <li className="text-muted">Proof of birth (if applicable)</li>
            <li className="text-muted">Address proof</li>
          </ol>
          <p className="text-muted">
          For detailed information about Interest Rates, Fees, and Process
          Steps, Please{" "}
          <button
            type="button"
            class="contact-us-btn"
            data-bs-toggle="modal"
            data-bs-target="#contactNow"
            >
            Contact Us
          </button>
            </p>
        </div>
      </div>

      <div
        id="property"
        className="mt-4 bg-white my-3 px-md-5 px-4 py-3  gap-5 d-md-flex justify-content-center align-items-center"
      >
        <div>
          <h3>Property Certificate</h3>
          <div className="d-block d-md-none text-center my-5">
            <img src={img2} alt="" />
          </div>
          <p className="text-muted">
            Our Property Certificate service helps you obtain an official
            document certifying property ownership, necessary for legal and
            transaction purposes.
          </p>
          {/* <strong>Key Features</strong>
          <ol>
            <li className="text-muted">Application guidance</li>
            <li className="text-muted">Document preparation</li>
            <li className="text-muted">Submission and follow-up</li>
            <li className="text-muted">Accurate certification</li>
          </ol> */}
          <strong>Major Document Requirements</strong>
          <ol>
            <li className="text-muted">Proof of ownership (title deed)</li>
            <li className="text-muted">ID proof of the owner</li>
            <li className="text-muted">Proof of address</li>
            <li className="text-muted">Previous property documents</li>
          </ol>
          <p className="text-muted">
          For detailed information about Interest Rates, Fees, and Process
          Steps, Please{" "}
          <button
            type="button"
            class="contact-us-btn"
            data-bs-toggle="modal"
            data-bs-target="#contactNow"
            >
            Contact Us
          </button>
            </p>
        </div>
        <img className="d-none d-md-block" src={img2} alt="" />
      </div>

      <div
        id="utaro"
        className="mt-4 bg-white my-3 px-md-5 px-4 py-3  gap-5 d-md-flex justify-content-center align-items-center"
      >
        <img className="d-none d-md-block" src={img1} alt="" />
        <div>
          <h3>7/12 Utaro</h3>
          <div className="d-block d-md-none text-center my-5">
            <img src={img1} alt="" />
          </div>
          <p className="text-muted">
            Our 7/12 Utaro service provides access to the land records document
            essential for property transactions and legal verification in
            certain regions.
          </p>
          {/* <strong>Key Features</strong>
          <ol>
            <li className="text-muted">Record retrieval assistance</li>
            <li className="text-muted">Document verification</li>
            <li className="text-muted">Submission and follow-up</li>
            <li className="text-muted">Accurate land record issuance</li>
          </ol> */}
          <strong>Major Document Requirements</strong>
          <ol>
            <li className="text-muted">Proof of ownership</li>
            <li className="text-muted">Property details</li>
            <li className="text-muted">Proof of address</li>
            <li className="text-muted">ID proof of the property owner</li>
          </ol>
          <p className="text-muted">
          For detailed information about Interest Rates, Fees, and Process
          Steps, Please{" "}
          <button
            type="button"
            class="contact-us-btn"
            data-bs-toggle="modal"
            data-bs-target="#contactNow"
            >
            Contact Us
          </button>
            </p>
        </div>
      </div>

      <div
        id="marriage"
        className="mt-4 bg-white my-3 px-md-5 px-4 py-3 gap-5 d-md-flex justify-content-center align-items-center"
      >
        <div>
          <h3>Marriage Certificate</h3>
          <div className="d-block d-md-none text-center my-5">
            <img src={marriage} alt="" />
          </div>
          <p className="text-muted">
            Our Marriage Certificate service assists in obtaining the official
            record of a marriage, required for legal, administrative, and
            personal purposes.
          </p>
          {/* <strong>Key Features</strong>
          <ol>
            <li className="text-muted">Application assistance</li>
            <li className="text-muted">Document preparation</li>
            <li className="text-muted">Submission and follow-up</li>
            <li className="text-muted">Accurate record issuance</li>
          </ol> */}
          <strong>Major Document Requirements</strong>
          <ol>
            <li className="text-muted">
              Marriage invitation card or certificate of marriage from the place
              of marriage
            </li>
            <li className="text-muted">ID proof of both partners</li>
            <li className="text-muted">Proof of marriage (photos, affidavits)</li>
            <li className="text-muted">Address proof</li>
          </ol>
          <p className="text-muted">
          For detailed information about Interest Rates, Fees, and Process
          Steps, Please{" "}
          <button
            type="button"
            class="contact-us-btn"
            data-bs-toggle="modal"
            data-bs-target="#contactNow"
            >
            Contact Us
          </button>
            </p>
        </div>
        <img className="d-none d-md-block" src={marriage} alt="" />
      </div>

      <div className="mt-4 bg-white my-3 px-md-5 px-4 py-3 d-flex justify-content-between">
        <button className="btn btn-primary" onClick={handleBackClick}>
          <i class="ri-arrow-left-line"></i> Back
        </button>
        <Link to={"/civil-law"}>
          <button className="btn btn-primary">
            Civil Law <i className="ri-arrow-right-line text-white"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Certificate;
