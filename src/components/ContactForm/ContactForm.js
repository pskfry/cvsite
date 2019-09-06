import React from 'react';
import classes from './ContactForm.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const ContactForm = (props) => {
    return (
        <div>
            <div className={classes.ContactIcons}>
                <FontAwesomeIcon icon={faEnvelopeSquare} />
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faGithubSquare} />
            </div>
            <form className={classes.ContactForm}>
                <h1>Contact Me</h1>
                <input type="text" placeholder="your name" />
                <input type="text" placeholder="your email" />
                <input type="text" placeholder="subject" />
                <input type="text" placeholder="message" />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default ContactForm;