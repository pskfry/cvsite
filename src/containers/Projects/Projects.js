import React, { Component } from "react";
import Project from "../../components/Project/Project";
import { notify } from "react-notify-toast";
import TechSearch from "../TechSearch/TechSearch";
import classes from "./Projects.module.css";
import Axios from "axios";

class Projects extends Component {
  state = {
    projects: [],
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

    Axios.get("https://cvsite-80b2f.firebaseio.com/projects.json").then(res => {
      const projKeys = Object.keys(res.data);
      let projList = [];

      projKeys.forEach(projKey => {
        projList.push(res.data[projKey]);
      });

      this.setState({
        projects: projList
      });
    });
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
        <a href={proj.url} key={proj.id} target="_blank" rel="noopener noreferrer">
          <Project
            name={proj.name}
            techWords={proj.techWords}
            description={proj.description}
            searchTech={event => this.searchTechHandler(event)}
          />
        </a>
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
