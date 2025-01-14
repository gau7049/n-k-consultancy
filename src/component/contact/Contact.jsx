import React from "react";

const Contact = () => {
  return (
    <>
      <div id="contact-us">
        <h2>Contact Us</h2>
        <div className="container">
          <div className="row gap-md-0 gap-5">
            <div className="col-md-6 left-detail-contact-us">
              <div className="office-address">
                <h5>Office Address:</h5>
                <p className="text-muted">
                  Makarba Rd, opp. Shrinandnagar, near Bakeri City, Vejalpur, Ahmedabad, Gujarat 380054
                </p>
              </div>
              <div className="ph">
                <h5>Phone:</h5>
                <p className="text-muted">+91 85117 49940</p>
              </div>
              <div className="email">
                <h5>Email:</h5>
                <p className="text-muted">nkconsultancy.contact@gmail.com</p>
              </div>
              <div className="business-hours">
                <h5>Business Hours:</h5>
                <p className="text-muted">Monday - Saturday: 10:30 AM - 8:30 PM</p>
                <p className="text-muted">Sunday: Closed</p>
              </div>
            </div>
            <div className="col-md-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1154.6408759931358!2d72.51717528176616!3d23.002228414510704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b175d84478d%3A0xfff9806540d1dcd8!2sSamasta%20Arcade%20-%20by%20Bakeri%20Group!5e0!3m2!1sen!2sin!4v1724042088007!5m2!1sen!2sin"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
