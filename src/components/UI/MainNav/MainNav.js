import React from 'react';
import classes from './MainNav.module.css';
import { NavLink } from 'react-router-dom';

const MainNav = () => (
    <nav>
        <div className={classes.MainNav}>
            <ul>
                <li><NavLink to="/" activeClassName="ActiveNav" active>projects</NavLink></li>
                <li><a href="/">work experience</a></li>
                <li><a href="/">about</a></li>
                <li><a href="/">contact</a></li>
            </ul>
        </div>
    </nav>
);

export default MainNav;