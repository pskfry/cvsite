import React from "react";
import classes from "./ContactForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const ContactForm = props => {
  return (
    <div className={classes.Contact}>
      <form className={classes.ContactForm}>
        <h1>Contact Me</h1>
        <input type="text" placeholder="your name" />
        <input type="text" placeholder="your email" />
        <input type="text" placeholder="subject" />
        <input type="text" placeholder="message" />
        <button type="submit">Send</button>
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
