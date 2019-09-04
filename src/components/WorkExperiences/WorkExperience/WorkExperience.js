import React from "react";
import classes from "./WorkExperience.module.css";

const WorkExperience = props => {
  return (
    <div className={classes.WorkExperience}>
      <img src={props.logo} alt="explogo" />
      <div class={classes.Titles}>
        <h1>{props.header}</h1>
        <h3>{props.title}</h3>
        <h5>
          {props.start} to {props.end}
        </h5>
      </div>
      <p>{props.desc}</p>
      <p className={classes.Tech}>{props.techList.join(", ")}</p>
    </div>
  );
};

export default WorkExperience;
