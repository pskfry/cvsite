import React, { useState, useEffect } from "react";
import classes from "./ContactForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import emailjs from "emailjs-com";
import Axios from "axios";

const ContactForm = props => {
  const [fromEmail, setFromEmail] = useState("");
  const [fromName, setFromName] = useState("");
  const [subject, setSubject] = useState("");
  const [messageBody, setMessageBody] = useState("");

  const [emailJs, setEmailJs] = useState({});

  useEffect(() => {
    Axios.get("https://cvsite-80b2f.firebaseio.com/emailjs.json")
      .then(res => {
        setEmailJs({
          serviceId: res.serviceId,
          templateId: res.templateId,
          userId: res.userId
        });
      })
      .catch(err => {
        alert("failed to connect to db for email stuff");
      });
  }, []);

  const handleSend = event => {
    event.preventDefault();

    const templateParams = {
      from_name: fromName,
      from_email: fromEmail,
      subject: subject,
      message_body: messageBody
    };

    emailjs.send(
      emailJs.serviceId,
      emailJs.templateId,
      templateParams,
      emailJs.userId
    );
  };

  return (
    <div className={classes.Contact}>
      <form
        className={classes.ContactForm}
        onSubmit={event => handleSend(event)}
      >
        <h1>Contact Me</h1>
        <p className={classes.Blurb}>
          You may use the form below to send an e-mail to my primary inbox. This
          is the fastest way to contact me regarding job opportunities or
          freelance work. I offer competitive rates for top-tier front-end
          development work in any javascript/.net framework, api development in
          python (flask, bottle) and .net core.
        </p>
        <input
          type="text"
          placeholder="your name"
          onChange={e => setFromName(e.target.value)}
        />
        <input
          type="text"
          placeholder="your email"
          onChange={e => setFromEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="subject"
          onChange={e => setSubject(e.target.value)}
        />
        <textarea
          placeholder="your message"
          rows={"8"}
          onChange={e => setMessageBody(e.target.value)}
        ></textarea>
        <button onClick={handleSend}>Send</button>
      </form>
      <div className={classes.ContactIcons}>
        <a href="mailto:pskfry@gmail.com">
          <FontAwesomeIcon icon={faEnvelopeSquare} />
        </a>
        <a
          href="http://linkedin.com/jsonmfry"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="http://github.com/pskfry"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
