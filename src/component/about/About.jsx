import React from "react";
import { useState } from "react";
import Logo from "../../assets/nk_logo.png";

const About = () => {
  const [readMore, setReadMore] = useState("Read More");
  return (
    <>
      <div id="about-me">
        <h2>About Company:</h2>
        <div className="d-md-flex gap-5 px-md-5">
          <div className="about-me-img my-4 my-md-0">
            <img src={Logo} alt="N & K. Consultancy Logo" />
          </div>
          <div className="about-me-content text-justified hyphenated responsive-text pe-md-4 mt-2 text-muted">
            <p>
              Welcome to N & K. Consultancy, where expert legal advice is paired
              with personalized service. With extensive experience in corporate
              law, family law, and criminal defense, our dedicated team guides
              both individuals and businesses through their legal challenges
              with the utmost professionalism and care. At N & K. Consultancy,
              we pride ourselves on our deep knowledge and proven success in
              delivering tailored legal solutions that meet the unique needs of
              our clients. We believe every client's situation is distinct, and
              we take the time to listen and understand your specific legal
              needs.
              {readMore !== "Read More" &&
                ", crafting strategies that ensure effective and efficient legal advice and representation. Our mission is to provide clear, reliable, and actionable legal guidance that you can trust. We are committed to upholding the highest standards of integrity, professionalism, and client satisfaction. Contact us today to discover how N & K. Consultancy can assist you in navigating the complexities of the legal system with confidence and ease."}
            </p>
            <button
              className="btn btn-primary"
              onClick={() =>
                setReadMore(
                  readMore === "Read More" ? "Read Less" : "Read More"
                )
              }
            >
              {readMore}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
