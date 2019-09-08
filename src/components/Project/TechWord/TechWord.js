import React from "react";
import classes from "./TechWord.module.css";

const TechWord = props => {
  let comma = "";

  if (props.comma) {
    comma = ", ";
  }

  return (
    <React.Fragment>
      {comma}
      <span
        onClick={props.searcher}
        value={props.text}
        className={classes.TechWord}
      >
        {props.text}
      </span>
    </React.Fragment>
  );
};

export default TechWord;
