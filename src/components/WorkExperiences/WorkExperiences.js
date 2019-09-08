import React, { Component } from "react";
import WorkExperience from "./WorkExperience/WorkExperience";
import Axios from "axios";

class WorkExperiences extends Component {
  state = {
    experiences: []
  };

  componentDidMount () {
    Axios.get('https://cvsite-80b2f.firebaseio.com/workexp.json').then(res => {
      const expKeys = Object.keys(res.data);
      let exps = [];

      expKeys.forEach(expKey => {
        exps.push(res.data[expKey]);
      });

      this.setState({
        experiences: exps
      });
    });
  }

  render() {
    const experiences = this.state.experiences.map(exp => {
      return (
        <WorkExperience
          header={exp.header}
          title={exp.title}
          start={exp.start}
          end={exp.end}
          desc={exp.desc}
          techList={exp.techs}
          logo={exp.logo}
          key={exp.id}
        />
      );
    });

    return experiences;
  }
}

export default WorkExperiences;
