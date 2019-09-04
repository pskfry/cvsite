import React, { Component } from "react";
import WorkExperience from "./WorkExperience/WorkExperience";

class WorkExperiences extends Component {
  state = {
    experiences: [
      {
        id: 1,
        header: "Allstate",
        title: "Application Developer",
        start: "8/6/2018",
        end: "current",
        desc:
          "Working in the Brand Operations business on an agile team developing automations for our customer service departments",
        logo:
          "https://www.underconsideration.com/brandnew/archives/allstate_icon_detail.png",
        techs: [".net", "c#", "wpf", "sql", "pega", "blue prism", "react"]
      },
      {
        id: 2,
        header: ".NET Consultant",
        title: "Contractor",
        start: "5/5/2015",
        end: "current",
        desc:
          "Worked as a contractor for a small start-up shop. Worked on the Billboard web application and their mobile DJ application. Also did work for DealerCue on their web crawler.",
        logo:
          "https://i.ytimg.com/vi/8bt7epRZ2jU/maxresdefault.jpg",
        techs: ["asp.net", "c#", "sql", "flutter"]
      }
    ]
  };

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
