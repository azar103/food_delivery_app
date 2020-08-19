import React, { useState } from "react";
import "./Footer.scss";
import axios from "axios";
export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handelChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handelChangeMessage = (e) => {
    setMessage(e.target.value);
  };
  const onSubmit = (e) => {
    const mail = {
      email,
      message,
    };
    axios.post("/api/form", mail);
  };
  return (
    <div id="footer">
      <div className="contact_group">
        <div className="contact_row">
          <i className="fa fa-phone"></i>
          <p> 51408380 </p>
        </div>
        <div className="contact_row">
          <i className="fa fa fa-envelope"></i>
          <p> azzarroukanis@gmail.com </p>
        </div>
        <div className="contact_row">
          <div className="social">
            <a
              href="https://www.facebook.com/anis.zarrouk.73?ref=bookmarks"
              target="_blank"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://twitter.com/cabist4ever" target="_blank">
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/anis-zarrouk-9750a599/"
              target="_blank"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <p>
          <label>email</label>
        </p>
        <p>
          <input
            type="email"
            id="email_footer"
            onChange={handelChangeEmail}
            value={email}
          />
        </p>
        <p>
          <label>contact</label>
        </p>
        <p>
          <textarea
            cols="70"
            rows="10"
            onChange={handelChangeMessage}
            value={message}
          ></textarea>
        </p>
        <button id="sumbit_btn_foot">sumbit</button>
      </form>
    </div>
  );
}
