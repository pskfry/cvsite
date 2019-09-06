import React, { Component } from "react";
import Project from '../../components/Project/Project';
import { notify } from "react-notify-toast";
import TechSearch from "../TechSearch/TechSearch";
import classes from './Projects.module.css';

class Projects extends Component {
  state = {
    projects: [
      {
        id: 1,
        name: "dating app",
        techWords: [
          "angular",
          ".net core",
          "entity framework",
          "sql",
          "RESTful api"
        ],
        description:
          "Dating app with messaging, friends lists, search and filtering written in Angular with a .net core API."
      },
      {
        id: 2,
        name: "cv site",
        techWords: ["react", "mongodb", "firebase"],
        description:
          "The site you're currently viewing, made entirely in React. Firebase/mongodb backend."
      },
      {
        id: 3,
        name: "burger builder",
        techWords: ["react", "mongodb", "firebase"],
        description:
          "Interactive burger builder with checkout functionality. Firebase/mongodb backend."
      }
    ],
    searchTechWord: null
  };

  searchTechEventHandler = event => {
    this.setState({
      searchTechWord: event.target.innerText
    });
  };

  searchTechHandler = event => {
    this.setState({
      searchTechWord: event.target.attributes.value.value
    });
  };

  clearSearch = () => {
    this.setState({
      searchTechWord: null
    });
  };

  componentDidMount() {
    notify.show("click on a project card to check it out!", "info", 4000);
  }

  render() {
    let filteredProjects = this.state.projects;

    if (this.state.searchTechWord) {
      filteredProjects = this.state.projects.filter(proj => {
        return proj.techWords.includes(this.state.searchTechWord);
      });
    }

    const projectList = filteredProjects.map(proj => {
      return (
        <Project
          name={proj.name}
          techWords={proj.techWords}
          description={proj.description}
          key={proj.id}
          searchTech={event => this.searchTechHandler(event)}
        />
      );
    });

    return (
      <React.Fragment>
        <TechSearch selector={event => this.searchTechEventHandler(event)} />
        {this.state.searchTechWord ? (
          <div className={classes.FilterResults}>
            <h2>
              projects using '{this.state.searchTechWord}'
              <span onClick={this.clearSearch}>(show all)</span>
            </h2>
          </div>
        ) : null}
        {projectList}
      </React.Fragment>
    );
  }
}

export default Projects;
