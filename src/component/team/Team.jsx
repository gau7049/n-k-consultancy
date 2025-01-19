import React from "react";
import ceo from "../../assets/nilesh_bhai.jpeg";

const Team = () => {
  return (
    <div id="our-team">
      <h2>Meet Our Team</h2>
      <p className="text-muted">
        At N & K. Consultancy, our strength lies in our team of dedicated and
        experienced legal professionals. Each member brings unique expertise and
        a commitment to providing exceptional legal services.
      </p>
      <div class="members-container">
        <div class="member mb-3">
          <img src={ceo} alt="" />
          <div>
            <h5>1. Vyas Nilesh Kavarlal, CEO (Chief Executive Officer)</h5>
            <p className="text-muted">
              Vyas Nilesh Kavarlal is a seasoned legal advisor with over 6 years
              of experience in corporate law, taxation, and business
              registrations. He holds an LLB degree from Gujarat University and
              specializes in income tax services, GST compliance, and company
              registration. Mr. Vyas has successfully handled numerous
              high-profile corporate cases, earning a reputation for his
              meticulous attention to detail and unwavering commitment to his
              clients' success.
            </p>
          </div>
        </div>

        <div class="member">
          <div>
            <h5>2. Vyas Gayatri Kavarlal, MD (Managing Director)</h5>
            <p className="text-muted">
              Vyas Gayatri Kavarlal is an expert in family law and civil
              litigation, with a strong background in dispute resolution and
              contract law. She graduated from Gujarat University and is known
              for her compassionate approach and strategic thinking in complex
              legal matters. Mrs. Vyas is dedicated to providing personalized
              and effective legal solutions to clients, ensuring their rights
              and interests are always protected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
