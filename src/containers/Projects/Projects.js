import React, { Component } from "react";
import Project from "../../components/Project/Project";
import { notify } from "react-notify-toast";
import TechSearch from "../TechSearch/TechSearch";
import classes from "./Projects.module.css";
import Axios from "axios";
import Spinner from "../../components/UI/Spinner/Spinner";

class Projects extends Component {
  state = {
    projects: [],
    searchTechWord: null,
    loaded: false
  };

  searchTechEventHandler = event => {
    event.stopPropagation();

    this.setState({
      searchTechWord: event.target.innerText
    });
  };

  searchTechHandler = event => {
    event.stopPropagation();

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
        projects: projList,
        loaded: true
      });
    });
  }

  render() {
    let projectList = <Spinner />;

    if (this.state.loaded) {
      let filteredProjects = this.state.projects;

      if (this.state.searchTechWord) {
        filteredProjects = this.state.projects.filter(proj => {
          return proj.techWords.includes(this.state.searchTechWord);
        });
      }

      projectList = filteredProjects.map(proj => {
        return (
            <Project
              name={proj.name}
              techWords={proj.techWords}
              description={proj.description}
              github={proj.github}
              searchTech={event => this.searchTechHandler(event)}
              key={proj.id}
              href={proj.url}
            />
        );
      });
    }

    return (
      <React.Fragment>
        <TechSearch selector={event => this.searchTechEventHandler(event)} />
        {this.state.searchTechWord ? (
          <div className={classes.FilterResults}>
            <h2>
              projects using '{this.state.searchTechWord}'
              <span onClick={this.clearSearch} style={{marginLeft: "10px"}}>(show all)</span>
            </h2>
          </div>
        ) : null}
        {projectList}
      </React.Fragment>
    );
  }
}

export default Projects;
