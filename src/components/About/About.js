import React from "react";
import AboutPic from "./AboutPic/AboutPic";
import classes from "./About.module.css";

const About = () => {
  var age = new Date().getFullYear() - 1987;
  var devAge = new Date().getFullYear() - 2013;

  return (
    <div className={classes.About}>
      <AboutPic />
      <div className={classes.Titles}>
        <h1>Jason M. Fry</h1>
        <h2>Full Stack Developer</h2>
        <p>
          I am a {age} year old developer currently living in Charlotte, NC. I
          was born just outside of Chicago, IL, went to Bradley University for
          History. I have been working as a developer for {devAge} years.
        </p>
        <p>
          I am trained and have experience as a full stack developer, but if I
          have my choice, I prefer working on front-end projects. I love finding
          creative ways to implement a designer's vision and even contributing
          my own design elements where they make sense.
        </p>
      </div>
    </div>
  );
};

export default About;
