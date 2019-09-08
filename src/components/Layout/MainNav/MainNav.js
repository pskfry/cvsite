import React from 'react';
import classes from './MainNav.module.css';
import { NavLink } from 'react-router-dom';

const activeStyle = {
    borderBottom: '.15em solid #BAB2B5',
}

const MainNav = () => (
    <nav className={classes.MainNav}>
        <ul>
            <li><NavLink to="/projects" activeStyle={activeStyle}><span>personal projects</span></NavLink></li>
            <li><NavLink to="/work" activeStyle={activeStyle}><span>work experience</span></NavLink></li>
            <li><NavLink to="/contact" activeStyle={activeStyle}><span>contact</span></NavLink></li>
            <li><NavLink exact to="/" activeStyle={activeStyle}><span>about</span></NavLink></li>
        </ul>
    </nav>
);

export default MainNav;