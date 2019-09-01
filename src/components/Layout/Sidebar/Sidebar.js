import React from 'react';
import classes from './SideBar.module.css';
import Picture from '../Picture/Picture';

const SideBar = (props) => {
    return (
        <div className={classes.SideBar}>
        <div style={{width: '100%'}}>
            <Picture />
            <ul>
                <li><a href="/">projects</a></li>
                <li><a href="/">work experience</a></li>
                <li><a href="/">about</a></li>
                <li><a href="/">contact</a></li>
            </ul>
            </div>
        </div>);
}

export default SideBar;