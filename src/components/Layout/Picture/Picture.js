import React from 'react';
import classes from './Picture.module.css';

const Picture = () => {
    return (
        <div className={classes.PictureBorder}>
        <div className={classes.Picture}/>
        </div>
    )
}

export default Picture;