import React, { useState } from "react";
import Modal from "react-modal";
import "./Footer.css";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const openSesame = () => {
    setIsOpen(true);
  };
  const closeSasame = () => {
    setIsOpen(false);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: '-50%',
      transform: "translate(-50%, -50%)",
      width: "600px",
      zIndex: "3",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
  };

  Modal.setAppElement(document.getElementById("root"));

  return (
    <div className="footer-container">
      <button onClick={openSesame} className="contact-btn">
        Contact Us
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeSasame}
        style={customStyles}
        contentLabel="Contact Us"
      >
        <div className="modal-header">
          <h2>Contact Us</h2>
          <button className="modal-close-btn" onClick={closeSasame}>X</button>
        </div>

        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name"/>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="4"></textarea>
          <button type="submit">Send</button>
        </form>
      </Modal>
    </div>
  );
}

export default Footer;
