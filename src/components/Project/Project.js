import React from "react";
import classes from "./Project.module.css";
import TechWord from "./TechWord/TechWord";

const getFile = () => {
  fetch("../Projects.js");
};

const Project = props => {
  const techList = props.techWords.map((word, idx) => {
    return (
      <TechWord
        text={word}
        key={idx}
        comma={idx > 0 ? true : false}
        searcher={props.searchTech}
      />
    );
  });

  return (
    <div className={classes.Project} onClick={getFile}>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p className={classes.TechWords}>{techList}</p>
    </div>
  );
};

export default Project;
