import React from "react";
import "./contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">
        Contact <span className="contact-title-highlight">Us</span>
      </h2>
      <p className="contact-subtitle">Let's connect with Shubham Nirmal</p>
      <div className="contact-container">
        {/* Contact Details */}
        <div className="contact-details">
          <h3>Contact Details</h3>
          <p>Connect with Shubham to know more!</p>
          <div className="contact-info">
            <div className="contact-info-label">PHONE</div>
            <div className="contact-info-value">+91 7875573370 , +91 9637508945</div>
            <div className="contact-info-label">EMAIL</div>
            <div className="contact-info-value">shubhamnirmal2612@gmail.com</div>
            <div className="contact-info-label">ADDRESS</div>
            <div className="contact-info-value">
              226, At Sakharwel Village, Post Wasadi<br />
              Sub-District Kannad, Aurangabad (Sambajinagar)<br />
              Maharashtra, India 431104
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="contact-form">
          <h3>Get in Touch</h3>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Message" required rows={5}></textarea>
            <button type="submit">Send Now!</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
