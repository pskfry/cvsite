import React, { useState, useEffect } from "react";
import AboutPic from "./AboutPic/AboutPic";
import classes from "./About.module.css";
import Axios from "axios";
import Spinner from "../UI/Spinner/Spinner";

const About = () => {
  const [paras, setParas] = useState([]);
  const [loaded, setLoaded] = useState();

  useEffect(() => {
    setLoaded(false);

    Axios.get('https://cvsite-80b2f.firebaseio.com/aboutparas.json').then(res => {
      const paraKeys = Object.keys(res.data);
      let paraList = [];

      console.log(paraKeys);

      paraKeys.forEach(pKey => {
        paraList.push(res.data[pKey]);
      });

      paraList.sort((a, b) => {
        return a.id < b.id ? -1 : 1;
      })

      setParas(paraList);
      setLoaded(true);
    })
  }, []);

  let paraDisplayList = <Spinner />

  if (loaded) {
    paraDisplayList = paras.map(para => {
      return <p key={para.id}>{para.text}</p>
    });
  }

  return (
    <div className={classes.About}>
      <AboutPic />
      <div className={classes.Titles}>
        <h1>Jason M. Fry</h1>
        <h2>Full Stack Developer</h2>
        {paraDisplayList}
      </div>
    </div>
  );
};

export default About;
