import React, { useEffect } from "react";
import PopUp from "./PopUp";
import { useNavigate, Link } from "react-router-dom";
import it from "../../assets/it.jpg";
import gst from "../../assets/gst.jpg";
import tds from "../../assets/tds.jpg";
import accounting from "../../assets/accounting.jpg";

const Income_tax = () => {
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
        <h2>Income Tax Services</h2>
        <p className="text-muted">
          Our Income Tax Services simplify the tax process for individuals and
          businesses. We offer expert assistance in IT Return filing, GST
          compliance, TDS management, and comprehensive Accounting solutions.
          With our professional guidance, you can ensure accurate tax
          calculations, timely submissions, and compliance with all tax laws and
          regulations. Our aim is to maximize your refunds, minimize tax
          liabilities, and maintain impeccable financial records. Explore the
          various income tax services we provide:
        </p>
      </div>
      <div
        id="it-returns"
        className="mt-4 bg-white my-3 px-md-5 px-4 py-3 gap-5 d-flex justify-content-center align-items-center"
      >
        <div>
          <h3>IT Return</h3>
          <div className="d-block d-md-none text-center my-5">
            <img src={it} alt="" />
          </div>
          <p className="text-muted">
            Our IT Return service ensures your income tax returns are filed
            accurately and on time, helping you comply with tax laws and
            maximize your refunds.
          </p>
          {/* <strong>Key Features</strong>
          <ol>
            <li className="text-muted">Accurate tax calculations</li>
            <li className="text-muted">Timely filing</li>
            <li className="text-muted">Maximized refunds</li>
            <li className="text-muted">Expert advice</li>
          </ol> */}
          <strong>Document Requirements</strong>
          <ol>
            <li className="text-muted">PAN card</li>
            <li className="text-muted">Form 16/16A</li>
            <li className="text-muted">Bank statements</li>
            <li className="text-muted">Investment Proofs</li>
            <li className="text-muted">Aadhar Card</li>
            <li className="text-muted">Rent Receipts</li>
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
        <img className="d-none d-md-block" src={it} alt="" />
      </div>
      <div
        id="gst"
        className="mt-4 bg-white my-3 px-md-5 px-4 py-3 gap-5 d-flex justify-content-center align-items-center"
      >
        <img className="d-none d-md-block" src={gst} alt="" />
        <div>
          <h3>GST</h3>
          <div className="d-block d-md-none text-center my-5">
            <img src={gst} alt="" />
          </div>
          <p className="text-muted">
            Our GST service assists businesses with the registration,
            calculation, and filing of Goods and Services Tax, ensuring
            compliance with GST laws and regulations.
          </p>
          {/* <strong>Key Features</strong>
          <ol>
            <li className="text-muted">GST Registration</li>
            <li className="text-muted">Monthly/Quarterly/Annual filing</li>
            <li className="text-muted">Input Tax Credit calculation</li>
            <li className="text-muted">GST Consultancy</li>
          </ol> */}
          <strong>Major Document Requirements</strong>
          <ol>
            <li className="text-muted">PAN Card of business</li>
            <li className="text-muted">Proof of business registration</li>
            <li className="text-muted">Bank account details</li>
            <li className="text-muted">Address proof</li>
            <li className="text-muted">Digital signature</li>
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
        id="tds"
        className="mt-4 bg-white my-3 px-md-5 px-4 py-3 gap-5 d-flex justify-content-center align-items-center"
      >
        <div>
          <h3>TDS</h3>
          <div className="d-block d-md-none text-center my-5">
            <img src={tds} alt="" />
          </div>
          <p className="text-muted">
            Our TDS service helps you with the deduction and filing of Tax
            Deducted at Source, ensuring that you meet your TDS obligations
            accurately and timely.
          </p>
          {/* <strong>Key Features</strong>
          <ol>
            <li className="text-muted">TDS Calculation</li>
            <li className="text-muted">TDS Return filing</li>
            <li className="text-muted">TDS Certificate issuance</li>
            <li className="text-muted">Compliance with TDS provisions</li>
          </ol> */}
          <strong>Major Document Requirements</strong>
          <ol>
            <li className="text-muted">TAN (Tax Deduction and Collection Account Number)</li>
            <li className="text-muted">PAN of deductee</li>
            <li className="text-muted">Deduction details</li>
            <li className="text-muted">Proof of payment of TDS</li>
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
        <img className="d-none d-md-block" src={tds} alt="" />
      </div>

      <div
        id="accounting"
        className="mt-4 bg-white my-3 px-md-5 px-4 py-3 gap-5 d-flex justify-content-center align-items-center"
      >
        <img className="d-none d-md-block" src={accounting} alt="" />
        <div>
          <h3>Accounting</h3>
          <div className="d-block d-md-none text-center my-5">
            <img src={accounting} alt="" />
          </div>
          <p className="text-muted">
            Our Accounting service offers comprehensive bookkeeping and
            accounting solutions to keep your financial records accurate and
            up-to-date.
          </p>
          {/* <strong>Key Features</strong>
          <ol>
            <li className="text-muted">Bookkeeping</li>
            <li className="text-muted">Financial statement preparation</li>
            <li className="text-muted">Budgeting and forecasting</li>
            <li className="text-muted">Payroll management</li>
          </ol> */}
          <strong>Major Document Requirements</strong>
          <ol>
            <li className="text-muted">Bank statements</li>
            <li className="text-muted">Invoices and bills</li>
            <li className="text-muted">Payroll records</li>
            <li className="text-muted">Previous financial statements</li>
            <li className="text-muted">Business transaction records</li>
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
        <Link to={"/registration"}>
          <button className="btn btn-primary">
            Registration <i className="ri-arrow-right-line text-white"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Income_tax;
