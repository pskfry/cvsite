import React, { useState } from "react";
import classes from "./NewProject.module.css";
import Axios from "axios";

const NewProject = props => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [techWords, setTechWords] = useState([]);
  const [techWord, setTechWord] = useState("");
  const [github, setGithub] = useState("");
  const [url, setUrl] = useState("");

  const addTechWord = () => {
    const newTechWords = [...techWords, techWord];

    setTechWords(newTechWords);
    setTechWord("");
  };

  const handleSubmit = () => {
    const proj = {
      description: description,
      github: github,
      name: title,
      techWords: techWords,
      url: url
    };

    Axios.post("https://cvsite-80b2f.firebaseio.com/projects.json", proj).then(
      res => {
        console.log(res);
      }
    );
  };

  return (
    <>
      <div className={classes.Form}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="techword"
          value={techWord}
          onChange={e => setTechWord(e.target.value)}
        />
        <button onClick={addTechWord}>add</button>
        <br />
        <input
          type="text"
          placeholder="github"
          value={github}
          onChange={e => setGithub(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="url"
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
        <br />
        <button onClick={handleSubmit}>submit</button>
      </div>
      <div className={classes.Form}>
        <p>
          <strong>title: </strong>
          {title}
        </p>
        <p>
          <strong>description: </strong>
          {description}
        </p>
        <p>
          <strong>techWords: </strong>
          {techWords.join(", ")}
        </p>
        <p>
          <strong>github: </strong>
          {github}
        </p>
        <p>
          <strong>url: </strong>
          {url}
        </p>
      </div>
    </>
  );
};

export default NewProject;
