import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Projects from "./Projects/Projects";
import MainNav from "../components/Layout/MainNav/MainNav";
import Picture from "../components/UI/Picture/Picture";
import TopBuffer from "../components/UI/TopBuffer/TopBuffer";
import Content from "../components/Layout/Content/Content";
import Notifications from "react-notify-toast";
import WorkExperiences from "../components/WorkExperiences/WorkExperiences";
import About from "../components/About/About";
import ContactForm from "../components/ContactForm/ContactForm";
import classes from "./App.module.css";

function App() {
  return (
    <React.Fragment>
      <TopBuffer />
      <BrowserRouter>
          <Picture />
        <div className={classes.NavBox}>
          <MainNav />
        </div>
        <Notifications />
        <Content>
          <Route path="/projects" component={Projects} />
          <Route path="/work" component={WorkExperiences} />
          <Route path="/contact" component={ContactForm} />
          <Route path="/" exact component={About} />
        </Content>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
