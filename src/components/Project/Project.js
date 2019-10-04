import React from "react";
import classes from "./Project.module.css";
import TechWord from "./TechWord/TechWord";

const Project = props => {
  const openUrl = () => {
    window.open(props.href, "_blank");
  }

  const openGithub = (e) => {
    e.stopPropagation();
    window.open(props.github, "_blank");
  }
  
  const techList = props.techWords.map((word, idx) => {
    return (
      <TechWord
        onClick={openUrl}
        text={word}
        key={idx}
        comma={idx > 0 ? true : false}
        searcher={props.searchTech}
      />
    );
  });

  return (
    <div className={classes.Project} onClick={openUrl}>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p className={classes.TechWords}>{techList}</p>
      <center><button onClick={(e) => openGithub(e)}>Github</button></center>
    </div>
  );
};

export default Project;
