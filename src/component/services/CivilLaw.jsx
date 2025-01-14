import React, { useEffect } from "react";
import PopUp from "./PopUp";
import { useNavigate, Link } from "react-router-dom";
import rent from "../../assets/rent_agree.jpg";
import affidivate from "../../assets/affidivate.jpg";
import sale from "../../assets/sale-deed.jpg";
import agreement from "../../assets/agreeSale.jpg";
import power_to_attorny from "../../assets/power_to_attony.jpg";
import pedhi from "../../assets/pedhi.jpg";

const CivilLaw = () => {
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
        <h2>Civil Law Services</h2>
        <p className="text-muted">
          Our Civil Law Services provide expert assistance in handling various
          legal documents essential for personal and business matters. We offer
          services for drafting and executing Rent Agreements, Affidavits, Sale
          Deeds, Agreements to Sale, Power of Attorney, and Pedhi Namu/Pedigree.
          Our goal is to ensure that all your legal documents are prepared
          accurately and comply with relevant laws, making your legal processes
          smooth and efficient. Explore the various civil law services we
          provide:
        </p>
      </div>
      <div
        id="rent"
        className="mt-4 bg-white my-3 px-md-5 px-4 py-3 gap-5 d-flex justify-content-center align-items-center"
      >
        <div>
          <h3>Rent Agreement</h3>
          <div className="d-block d-md-none text-center my-5">
            <img src={rent} alt="" />
          </div>
          <p className="text-muted">
            Our Rent Agreement service helps you draft and finalize a legally
            binding document outlining the terms and conditions between
            landlords and tenants.
          </p>
          <strong>Key Features</strong>
          <ol>
            <li className="text-muted">Drafting and review</li>
            <li className="text-muted">Legal compliance</li>
            <li className="text-muted">Customizable terms</li>
            <li className="text-muted">Clear and concise agreements</li>
          </ol>
          <strong>Major Document Requirements</strong>
          <ol>
            <li className="text-muted">Proof of property ownership</li>
            <li className="text-muted">ID proof of landlord and tenant</li>
            <li className="text-muted">Proof of property address</li>
            <li className="text-muted">Rent details</li>
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
        <img className="d-none d-md-block" src={rent} alt="" />
      </div>

      <div
        id="affidavit"
        className="mt-4 bg-white my-3 px-md-5 px-4 py-3 gap-5 d-flex justify-content-center align-items-center"
      >
        <img className="d-none d-md-block" src={affidivate} alt="" />
        <div>
          <h3>Affidavit</h3>
          <div className="d-block d-md-none text-center my-5">
            <img src={affidivate} alt="" />
          </div>
          <p className="text-muted">
            Our Affidavit service assists in preparing and notarizing sworn
            statements used for various legal purposes, including personal and
            business matters.
          </p>
          <strong>Key Features</strong>
          <ol>
            <li className="text-muted">Drafting of affidavits</li>
            <li className="text-muted">Notarization assistance</li>
            <li className="text-muted">Legal advice</li>
            <li className="text-muted">Customizable content</li>
          </ol>
          <strong>Major Document Requirements</strong>
          <ol>
            <li className="text-muted">ID proof of affiant</li>
            <li className="text-muted">Details of the statement to be sworn</li>
            <li className="text-muted">Supporting documents (if any)</li>
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
        id="sale-deed"
        className="mt-4 bg-white my-3 px-md-5 px-4 py-3 gap-5 d-flex justify-content-center align-items-center"
      >
        <div>
          <h3>Sale Deed</h3>
          <div className="d-block d-md-none text-center my-5">
            <img src={sale} alt="" />
          </div>
          <p className="text-muted">
            Our Sale Deed service ensures the creation of a legal document that
            transfers property ownership from the seller to the buyer.
          </p>
          <strong>Key Features</strong>
          <ol>
            <li className="text-muted">Drafting and review</li>
            <li className="text-muted">Legal compliance</li>
            <li className="text-muted">Accurate transfer of ownership</li>
            <li className="text-muted">Customizable terms</li>
          </ol>
          <strong>Major Document Requirements</strong>
          <ol>
            <li className="text-muted">Proof of property ownership (title deed)</li>
            <li className="text-muted">ID proof of buyer and seller</li>
            <li className="text-muted">Proof of address</li>
            <li className="text-muted">Payment receipts</li>
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
        <img className="d-none d-md-block" src={sale} alt="" />
      </div>

      <div
        id="agreement-to-sale"
        className="mt-4 bg-white my-3 px-md-5 px-4 py-3 gap-5 d-flex justify-content-center align-items-center"
      >
        <img className="d-none d-md-block" src={agreement} alt="" />
        <div>
          <h3>Agreement to Sale</h3>
          <div className="d-block d-md-none text-center my-5">
            <img src={agreement} alt="" />
          </div>
          <p className="text-muted">
            Our Agreement to Sale service assists in preparing a preliminary
            contract for the sale of property, outlining the terms before the
            final Sale Deed.
          </p>
          <strong>Key Features</strong>
          <ol>
            <li className="text-muted">Drafting and review</li>
            <li className="text-muted">Legal compliance</li>
            <li className="text-muted">Clear terms and conditions</li>
            <li className="text-muted">Preliminary contract</li>
          </ol>
          <strong>Major Document Requirements</strong>
          <ol>
            <li className="text-muted">Proof of property ownership</li>
            <li className="text-muted">ID proof of buyer and seller</li>
            <li className="text-muted">Property details</li>
            <li className="text-muted">Payment details</li>
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
        id="power-of-attorney"
        className="mt-4 bg-white my-3 px-md-5 px-4 py-3 gap-5 d-flex justify-content-center align-items-center"
      >
        <div>
          <h3>Power of Attorney</h3>
          <div className="d-block d-md-none text-center my-5">
            <img src={power_to_attorny} alt="" />
          </div>
          <p className="text-muted">
            Our Power of Attorney service helps you create a legal document that
            authorizes another person to act on your behalf in various legal and
            financial matters.
          </p>
          <strong>Key Features</strong>
          <ol>
            <li className="text-muted">Drafting and review</li>
            <li className="text-muted">Legal compliance</li>
            <li className="text-muted">Customizable authority</li>
            <li className="text-muted">Notarization assistance</li>
          </ol>
          <strong>Major Document Requirements</strong>
          <ol>
            <li className="text-muted">ID proof of the principal</li>
            <li className="text-muted">ID proof of the agent</li>
            <li className="text-muted">Details of the authority to be granted</li>
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
        <img className="d-none d-md-block" src={power_to_attorny} alt="" />
      </div>

      <div
        id="pedhi-namu"
        className="mt-4 bg-white my-3 px-md-5 px-4 py-3 gap-5 d-flex justify-content-center align-items-center"
      >
        <img className="d-none d-md-block" src={pedhi} alt="" />
        <div>
          <h3>Pedhi Namu / Pedigree</h3>
          <div className="d-block d-md-none text-center my-5">
            <img src={pedhi} alt="" />
          </div>
          <p className="text-muted">
            Our Pedhi Namu/Pedigree service assists in documenting the lineage
            and family background, often required for legal and personal
            purposes.
          </p>
          <strong>Key Features</strong>
          <ol>
            <li className="text-muted">Drafting and review</li>
            <li className="text-muted">Verification of family history</li>
            <li className="text-muted">Legal compliance</li>
            <li className="text-muted">Accurate documentation</li>
          </ol>
          <strong>Major Document Requirements</strong>
          <ol>
            <li className="text-muted">ID proof of the person requesting</li>
            <li className="text-muted">Family records</li>
            <li className="text-muted">Proof of relationships</li>
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

      <div className="mt-4 bg-white my-3 px-md-5 px-4 py-3 d-flex justify-content-between">
        <button className="btn btn-primary" onClick={handleBackClick}>
          <i class="ri-arrow-left-line"></i> Back
        </button>
        <Link to={"/loan"}>
          <button className="btn btn-primary">
            Loan <i className="ri-arrow-right-line text-white"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CivilLaw;
