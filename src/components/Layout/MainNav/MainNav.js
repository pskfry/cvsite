import React from 'react';
import classes from './MainNav.module.css';
import { NavLink } from 'react-router-dom';

const activeStyle = {
    borderBottom: '.05em dashed #C0C0C0',
    color: '#C0C0C0',
}

const MainNav = () => (
    <nav>
        <div className={classes.MainNav}>
            <ul>
                <li><NavLink to="/projects" activeStyle={activeStyle} >projects</NavLink></li>
                <li><NavLink to="/work" activeStyle={activeStyle}>work experience</NavLink></li>
                <li><NavLink to="/contact" activeStyle={activeStyle}>contact</NavLink></li>
                <li><NavLink to="/" activeStyle={activeStyle}>about</NavLink></li>
            </ul>
        </div>
    </nav>
);

export default MainNav;