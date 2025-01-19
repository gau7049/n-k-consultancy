import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PopUp from "./PopUp";
import personal from "../../assets/personal-loan.jpg";
import business from "../../assets/business_loan.jpg";
import home from "../../assets/home_loan.jpg";
import vehicle from "../../assets/vehicle_loan.jpg";
import lap from "../../assets/lap.jpg";
import mortage from "../../assets/mortage.jpg";

const loan = () => {
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
        <h2>Loan Services</h2>
        <p className="text-muted">
          Our firm offers a range of loan services tailored to meet your unique
          financial needs. With extensive experience in the legal aspects of
          loan agreements, we ensure that you are well-informed and protected
          throughout the loan process. Explore the various loan options we
          provide:
        </p>
      </div>
      <div
        id="personal-loan"
        className="mt-4 bg-white my-3 px-md-5 px-4 py-3 gap-5 d-md-flex justify-content-center align-items-center"
      >
        <div>
          <h3>Personal Loan</h3>
          <div className="d-block d-md-none text-center my-5">
            <img src={personal} alt="" />
          </div>
          <p className="text-muted">
            A Personal Loan can be used for a variety of personal expenses such
            as medical bills, home renovations, or debt consolidation. We assist
            you in securing the best personal loan terms, ensuring you
            understand your rights and obligations.
          </p>
          {/* <strong>Key Features</strong>
          <ol>
            <li className="text-muted">Quick and easy application process</li>
            <li className="text-muted">Flexible repayment options</li>
            <li className="text-muted">Competitive interest rates</li>
          </ol> */}
          <strong>Major Document Requirements</strong>
          <ol>
            <li className="text-muted">Proof of identity (Passport, Driver's License, Aadhar Card)</li>
            <li className="text-muted">Proof of address (Utility Bill, Rent Agreement)</li>
            <li className="text-muted">Proof of income (Salary slips, Bank statements)</li>
            <li className="text-muted">Recent passport-sized photographs</li>
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
        <img className="d-none d-md-block" src={personal} alt="" />
      </div>
      <div
        id="business-loan"
        className="mt-4 bg-white my-3 px-md-5 px-4 py-3 gap-5 d-md-flex justify-content-center align-items-center"
      >
        <img className="d-none d-md-block" src={business} alt="" />
        <div>
          <h3>Business Loan</h3>
          <div className="d-block d-md-none text-center my-5">
            <img src={business} alt="" />
          </div>
          <p className="text-muted">
            Whether you’re starting a new business or expanding an existing one,
            a Business Loan can provide the necessary capital. Our legal
            advisors help you navigate the complexities of business loan
            agreements to ensure the best outcome for your enterprise.
          </p>
          {/* <strong>Key Features</strong>
          <ol>
            <li className="text-muted">Customized loan amounts based on business needs</li>
            <li className="text-muted">Long-term and short-term loan options</li>
            <li className="text-muted">Support in drafting and reviewing loan agreements</li>
          </ol> */}
          <strong>Major Document Requirements</strong>
          <ol>
            <li className="text-muted">
              Business registration documents (Certificate of Incorporation, GST
              Registration)
            </li>
            <li className="text-muted">Proof of identity and address of business owners</li>
            <li className="text-muted">
              Bank statements of the business (typically last 6-12 months)
            </li>
            <li className="text-muted">Financial statements (Profit & Loss, Balance Sheet)</li>
            <li className="text-muted">Business plan or project report</li>
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
        id="home-loan"
        className="mt-4 bg-white my-3 px-md-5 px-4 py-3 gap-5 d-md-flex justify-content-center align-items-center"
      >
        <div>
          <h3>Home Loan</h3>
          <div className="d-block d-md-none text-center my-5">
            <img src={home} alt="" />
          </div>
          <p className="text-muted">
            Purchasing a home is a significant investment. We guide you through
            the entire home loan process, from application to closing, making
            sure all legal aspects are covered.
          </p>
          {/* <strong>Key Features</strong>
          <ol>
            <li className="text-muted">Expert advice on loan eligibility and documentation</li>
            <li className="text-muted">Assistance with fixed and variable interest rate loans</li>
            <li className="text-muted">
              Legal support during property purchase and mortgage registration
            </li>
          </ol> */}
          <strong>Major Document Requirements</strong>
          <ol>
            <li className="text-muted">Proof of identity and address</li>
            <li className="text-muted">Income proof (Salary slips, IT returns)</li>
            <li className="text-muted">Bank statements (typically last 6-12 months)</li>
            <li className="text-muted">Property documents (Sale Agreement, Title Deeds)</li>
            <li className="text-muted">Proof of down payment</li>
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
        <img className="d-none d-md-block" src={home} alt="" />
      </div>
      <div
        id="vehicle-loan"
        className="mt-4 bg-white my-3 px-md-5 px-4 py-3 gap-5 d-md-flex justify-content-center align-items-center"
      >
        <img className="d-none d-md-block" src={vehicle} alt="" />
        <div>
          <h3>Vehicle Loan</h3>
          <div className="d-block d-md-none text-center my-5">
            <img src={vehicle} alt="" />
          </div>
          <p className="text-muted">
            Looking to buy a new or used vehicle? Our legal team provides
            comprehensive support for vehicle loans, ensuring you get the best
            deal with transparent terms and conditions.
          </p>
          {/* <strong>Key Features</strong>
          <ol>
            <li className="text-muted">Loans for new and used vehicles</li>
            <li className="text-muted">Low interest rates and flexible repayment plans</li>
            <li className="text-muted">Legal assistance with loan documentation and compliance</li>
          </ol> */}
          <strong>Major Document Requirements</strong>
          <ol>
            <li className="text-muted">Proof of identity and address</li>
            <li className="text-muted">Income proof (Salary slips, IT returns)</li>
            <li className="text-muted">Bank statements (typically last 6 months)</li>
            <li className="text-muted">Quotation or invoice of the vehicle</li>
            <li className="text-muted">Vehicle registration documents (for used vehicles)</li>
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
        id="lap-loan"
        className="mt-4 bg-white my-3 px-md-5 px-4 py-3 gap-5 d-md-flex justify-content-center align-items-center"
      >
        <div>
          <h3>Loan Against Property (LAP Loan)</h3>
          <div className="d-block d-md-none text-center my-5">
            <img src={lap} alt="" />
          </div>
          <p className="text-muted">
            Unlock the value of your property with a Loan Against Property. We
            help you understand the intricacies of LAP loans, ensuring you
            leverage your property’s value effectively.
          </p>
          {/* <strong>Key Features</strong>
          <ol>
            <li className="text-muted">High loan amounts based on property value</li>
            <li className="text-muted">Flexible tenure and competitive interest rates</li>
            <li className="text-muted">
              Comprehensive legal advice on property valuation and loan
              agreements
            </li>
          </ol> */}
          <strong>Major Document Requirements</strong>
          <ol>
            <li className="text-muted">Proof of identity and address</li>
            <li className="text-muted">Income proof (Salary slips, IT returns)</li>
            <li className="text-muted">Bank statements (typically last 6-12 months)</li>
            <li className="text-muted">Property documents (Title Deeds, Valuation Report)</li>
            <li className="text-muted">Proof of property ownership</li>
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
        <img className="d-none d-md-block" src={lap} alt="" />
      </div>
      <div
        id="personal-loan"
        className="mt-4 bg-white my-3 px-md-5 px-4 py-3 gap-5 d-md-flex justify-content-center align-items-center"
      >
        <img className="d-none d-md-block" src={mortage} alt="" />
        <div>
          <h3>Mortgage Loan</h3>
          <div className="d-block d-md-none text-center my-5">
            <img src={mortage} alt="" />
          </div>
          <p className="text-muted">
            A Mortgage Loan can be a practical solution for large financial
            needs. Our legal experts ensure you are fully aware of the terms and
            conditions, helping you make informed decisions.A Personal Loan can
            be used for a variety of personal expenses such as medical bills,
            home renovations, or debt consolidation. We assist you in securing
            the best personal loan terms, ensuring you understand your rights
            and obligations.
          </p>
          {/* <strong>Key Features</strong>
          <ol>
            <li className="text-muted">Detailed analysis of mortgage loan options</li>
            <li className="text-muted">Legal support in understanding and negotiating terms</li>
            <li className="text-muted">Assistance with documentation and regulatory compliance</li>
          </ol> */}
          <strong>Major Document Requirements</strong>
          <ol>
            <li className="text-muted">Proof of identity and address</li>
            <li className="text-muted">Income proof (Salary slips, IT returns)</li>
            <li className="text-muted">Bank statements (typically last 6-12 months)</li>
            <li className="text-muted">Property documents (Title Deeds, Valuation Report)</li>
            <li className="text-muted">Proof of property ownership</li>
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
        <Link to={"/income-tax"}>
          <button className="btn btn-primary">
            Income Tax <i className="ri-arrow-right-line text-white"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default loan;
