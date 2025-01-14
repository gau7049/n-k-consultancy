import React, { useEffect } from "react";
import PopUp from "./PopUp";
import { useNavigate, Link } from "react-router-dom";
import businessRegistration from "../../assets/bussiness_reg.jpg";
import fssai from "../../assets/fssai.jpg";
import msme from "../../assets/msme.jpg";
import gumastadhara from "../../assets/Gumastadhara.jpg";
import compony from "../../assets/compony.png";

const Registration = () => {
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
        <Link to={"/home"} className="text-black">
          <strong>
            <i class="ri-arrow-left-line"></i>
          </strong>{" "}
          Go Back to Home
        </Link>
      </div>

      <div className="bg-white my-3 px-md-5 px-4 py-3">
        <h2>Registration Services</h2>
        <p className="text-muted">
          Our Registration Services cater to all your business needs, ensuring
          compliance with various legal requirements. We provide expert
          assistance in Business Registration, MSME/Udhyam/SSI Registration,
          Food License/Foscos/FSSAI Registration, Gumastadhara Registration, and
          Company Registration. With our professional guidance, you can
          seamlessly navigate the registration process, ensuring that your
          business operates legally and efficiently. Explore the various
          registration services we provide:
        </p>
      </div>
      <div
        id="business-registration"
        className="mt-4 bg-white my-3 px-md-5 px-4 py-3 gap-5 d-md-flex justify-content-center align-items-center"
      >
        <div>
          <h3>Business Registration</h3>
          <div className="d-block d-md-none text-center my-5">
            <img src={businessRegistration} alt="" />
          </div>
          <p className="text-muted">
            Our Business Registration service helps you legally establish your
            business entity, providing the foundation for your operations and
            growth.
          </p>
          <strong>Key Features</strong>
          <ol>
            <li className="text-muted">Entity selection advice</li>
            <li className="text-muted">Documentation preparation</li>
            <li className="text-muted">Submission and follow-up</li>
            <li className="text-muted">Legal compliance</li>
          </ol>
          <strong>Major Document Requirements</strong>
          <ol>
            <li className="text-muted">PAN Card of the business owner</li>
            <li className="text-muted">Aadhar Card</li>
            <li className="text-muted">Proof of business address</li>
            <li className="text-muted">Partnership deed (if applicable)</li>
            <li className="text-muted">Digital signature</li>
          </ol>
          <strong className="d-block mb-2">More Information:</strong>
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
        <img className="d-none d-md-block" src={businessRegistration} alt="" />
      </div>
      <div
        id="msme-udhyam-ssi"
        className="mt-4 bg-white my-3 px-md-5 px-4 py-3 gap-5 d-md-flex justify-content-center align-items-center"
      >
        <img className="d-none d-md-block" src={msme} alt="" />
        <div>
          <h3>MSME/Udhyam/SSI Registration</h3>
          <div className="d-block d-md-none text-center my-5">
            <img src={msme} alt="" />
          </div>
          <p className="text-muted">
            Our MSME/Udhyam/SSI Registration service supports small and medium
            enterprises in obtaining the necessary certifications to avail
            various government benefits and schemes.
          </p>
          <strong>Key Features</strong>
          <ol>
            <li className="text-muted">Eligibility assessment</li>
            <li className="text-muted">Document verification</li>
            <li className="text-muted">Online application assistance</li>
            <li className="text-muted">Certification issuance</li>
          </ol>
          <strong>Major Document Requirements</strong>
          <ol>
            <li className="text-muted">Aadhar Card of the applicant</li>
            <li className="text-muted">PAN Card</li>
            <li className="text-muted">Business address proof</li>
            <li className="text-muted">Bank account details</li>
            <li className="text-muted">Business registration certificate</li>
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
        id="food-licence"
        className="mt-4 bg-white my-3 px-md-5 px-4 py-3 gap-5 d-md-flex justify-content-center align-items-center"
      >
        <div>
          <h3>Food License/Foscos/FSSAI Registration</h3>
          <div className="d-block d-md-none text-center my-5">
            <img src={fssai} alt="" />
          </div>
          <p className="text-muted">
            Our Food License/Foscos/FSSAI Registration service ensures that your
            food business complies with safety standards and regulations,
            enabling you to operate legally.
          </p>
          <strong>Key Features</strong>
          <ol>
            <li className="text-muted">Application guidance</li>
            <li className="text-muted">Document submission</li>
            <li className="text-muted">Inspection coordination</li>
            <li className="text-muted">License procurement</li>
          </ol>
          <strong>Major Document Requirements</strong>
          <ol>
            <li className="text-muted">
              PAN Card and Aadhar Card of the business owner
            </li>
            <li className="text-muted">Proof of business address</li>
            <li className="text-muted">Food safety management plan</li>
            <li className="text-muted">List of food products</li>
            <li className="text-muted">
              Blueprint/layout plan of the processing unit
            </li>
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
        <img className="d-none d-md-block" src={fssai} alt="" />
      </div>

      <div
        id="gumastadhara"
        className="mt-4 bg-white my-3 px-md-5 px-4 py-3 gap-5 d-md-flex justify-content-center align-items-center"
      >
        <img className="d-none d-md-block" src={gumastadhara} alt="" />
        <div>
          <h3>Gumastadhara Registration</h3>
          <div className="d-block d-md-none text-center my-5">
            <img src={gumastadhara} alt="" />
          </div>
          <p className="text-muted">
            Our Gumastadhara Registration service assists businesses in
            obtaining the necessary licenses to operate in specific regions,
            ensuring compliance with local regulations.
          </p>
          <strong>Key Features</strong>
          <ol>
            <li className="text-muted">Local regulation compliance</li>
            <li className="text-muted">Document preparation</li>
            <li className="text-muted">Application submission</li>
            <li className="text-muted">Follow-up and approval</li>
          </ol>
          <strong>Major Document Requirements</strong>
          <ol>
            <li className="text-muted">
              PAN Card and Aadhar Card of the business owner
            </li>
            <li className="text-muted">Proof of business address</li>
            <li className="text-muted">Rent agreement (if applicable)</li>
            <li className="text-muted">Details of employees</li>
            <li className="text-muted">Proof of establishment</li>
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
        id="comapny-reg"
        className="mt-4 bg-white my-3 px-md-5 px-4 py-3 gap-5 d-md-flex justify-content-center align-items-center"
      >
        <div>
          <h3>Company Registration</h3>
          <div className="d-block d-md-none text-center my-5">
            <img src={compony} alt="" />
          </div>
          <p className="text-muted">
            Our Company Registration service helps you form your company with
            ease, handling all the legal and procedural requirements to get your
            business up and running..
          </p>
          <strong>Key Features</strong>
          <ol>
            <li className="text-muted">Company name reservation</li>
            <li className="text-muted">Incorporation document preparation</li>
            <li className="text-muted">Submission and follow-up</li>
            <li className="text-muted">Compliance with corporate laws</li>
          </ol>
          <strong>Major Document Requirements</strong>
          <ol>
            <li className="text-muted">Director Identification Number (DIN)</li>
            <li className="text-muted">Digital Signature Certificate (DSC)</li>
            <li className="text-muted">Memorandum of Association (MOA)</li>
            <li className="text-muted">Articles of Association (AOA)</li>
            <li className="text-muted">Proof of registered office address</li>
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
        <img className="d-none d-md-block" src={compony} alt="" />
      </div>

      <div className="mt-4 bg-white my-3 px-md-5 px-4 py-3 d-flex justify-content-between">
        <button className="btn btn-primary" onClick={handleBackClick}>
          <i class="ri-arrow-left-line"></i> Back
        </button>
        <Link to={"/certificate"}>
          <button className="btn btn-primary">
            Certificate <i className="ri-arrow-right-line text-white"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Registration;
