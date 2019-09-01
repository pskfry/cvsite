import React, { Component } from 'react';
import classes from './Projects.module.css';

class Projects extends Component {
    state = {
        projects: [
            {
                tech: ['angular', 'dotnet core'], 
                title: 'Dating App',
                url: 'hi.com',
                desc: 'A basic Dating App with an Angular6 front end and a .net core back end.'
            },
            {
                tech: ['react'],
                title: 'This Website',
                url: 'http://jfry.info',
                desc: 'The website you//'//re currently viewing built in React
            }
        ]
    };

    render () {
        return (
            <React.Fragment>
                <h1>Projects</h1>
                <div className={classes.Project}>angular</div>
                <div className={classes.Project}>react</div>
                <div className={classes.Project}>.net core</div>
            </React.Fragment>
        );
    }
}

export default Projects;