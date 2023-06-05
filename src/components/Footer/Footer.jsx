import React, { useState, useContext } from "react";
import Modal from "react-modal";
import "./Footer.css";
import { ThemeContext } from "../../contexts/ThemeContext";

function Footer() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const openSesame = () => {
    setIsOpen(true);
  };
  const closeSasame = () => {
    setIsOpen(false);
  };

  const customStyles = {
    //Modal styles. dont waste time with a css file i guess
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "600px",
      zIndex: "3",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
  };

  //screen-reader access
  Modal.setAppElement(document.getElementById("root"));

  return (
    <div
      className={darkMode ? "footer-container footer-dark" : "footer-container"}
    >
      <button onClick={openSesame} className="contact-btn">
        Contact Us
      </button>
      <Modal
        isOpen={isOpen} //assigned state variable
        onRequestClose={closeSasame} //esc key or outside click
        style={customStyles}
        contentLabel="Contact Us"
      >
        <div className="modal-header">
          <h2>Contact Us</h2>
          <button className="modal-close-btn" onClick={closeSasame}>
            X
          </button>
        </div>

        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
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
