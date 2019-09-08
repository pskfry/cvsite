import React from 'react';
import classes from './InvisBackdrop.module.css';

const InvisBackdrop = (props) => {
    return (
        <div className={classes.Backdrop} onClick={props.clicker} />
    );
}

export default InvisBackdrop