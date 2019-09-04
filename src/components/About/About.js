import React from "react";
import AboutPic from "./AboutPic/AboutPic";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.About}>
      <AboutPic />
      <div className={classes.Titles}>
        <h2>Jason M. Fry</h2>
        <h3>Full Stack Developer</h3>
        <p>Hi</p>
      </div>
    </div>
  );
};

export default About;
