import React, { Component } from "react";
import WorkExperience from "../../components/WorkExperience/WorkExperience";
import Axios from "axios";
import Spinner from "../../components/UI/Spinner/Spinner";

class WorkExperiences extends Component {
  state = {
    experiences: [],
    loaded: false
  };

  componentDidMount () {
    Axios.get('https://cvsite-80b2f.firebaseio.com/workexp.json').then(res => {
      const expKeys = Object.keys(res.data);
      let exps = [];

      expKeys.forEach(expKey => {
        exps.push(res.data[expKey]);
      });

      this.setState({
        experiences: exps,
        loaded: true
      });
    });
  }

  render() {
    let experiences = <Spinner />;

    if (this.state.loaded) {
      experiences = this.state.experiences.map(exp => {
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
    }

    return experiences;
  }
}

export default WorkExperiences;
