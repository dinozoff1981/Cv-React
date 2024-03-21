import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact">
      <div className="content">
        <h2>Contact Me</h2>
      </div>
      <div className="container-contact">
        <div className="contact-info">
          <div className="boxes">
            <div className="icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>Elinsborgsbacken 22 <br />16364, Spånga <br />Stockholm, Sweden</p>
            </div>
          </div>

          <div className="boxes">
            <div className="icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>tensaeg@yahoo.com</p>
            </div>
          </div>

          <div className="boxes">
            <div className="icon">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>+46-764-525-651</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <div className="input-box">
              <input type="text" name="" required placeholder="Enter Your Name" />
            </div>
            <div className="input-box">
              <input type="email" name="" required placeholder="Enter Your E-Mail" />
            </div>
            <div className="input-box">
              <textarea required placeholder="Type Your Message....."></textarea>
              <span>Type Your Text Here....</span>
            </div>
            <div className="input-box">
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
