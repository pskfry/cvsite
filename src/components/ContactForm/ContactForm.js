import React from "react";
import classes from "./ContactForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import nodemailer from 'nodemailer';

const ContactForm = props => {
  const handleSend = (event) => {
    event.preventDefault();
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'jfrycvsite@gmail.com',
        password: 'Meadows101!'
      }
    });

    const mailOptions = {
      from: 'jfrycvsite@gmail.com',
      to: 'pskfry@gmail.com',
      subject: 'kill yoself',
      text: 'idiot'
    }

    transporter.sendMail(mailOptions).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className={classes.Contact}>
      <form className={classes.ContactForm} onSubmit={(event) => handleSend(event)}>
        <h1>Contact Me</h1>
        <p className={classes.Blurb}>You may use the form below to send an e-mail to my primary inbox. This is the fastest way to contact me regarding job opportunities or freelance work. I offer competitive rates for top-tier front-end development work in any javascript/.net framework, api development in python (flask, bottle) and .net core.</p>
        <input type="text" placeholder="your name" />
        <input type="text" placeholder="your email" />
        <input type="text" placeholder="subject" />
        <textarea placeholder="your message" rows={"8"}></textarea>
        <button>Send</button>
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
