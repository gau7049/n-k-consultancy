import React from "react";
import { Link } from "react-router-dom";

const PopUp = () => {
  return (
    <>
      <div
        class="modal fade"
        id="contactNow"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Contact N & K Consultancy
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
            <strong>For More Information:</strong> please contact us at <strong><a href="https://wa.me/918511749940?text=Hi%20there!%20I'd%20like%20to%20chat%20with%20you%20on%20your%20website.">+91 85117 49940</a></strong> or <strong><a href="mailto:nkconsultancy.contact@gmail.com">nkconsultancy.contact@gmail.com</a></strong>. We're here to assist you with all your service needs.
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <Link to={"/home"}>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
