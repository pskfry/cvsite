import React, { Component } from "react";
import classes from "./MovieNights.module.css";
import bgimg from "../../../../assets/movienight_1.jpg";

class MovieNights extends Component {
  state = {
    movieNights: [
      {
        image: "movienight_1.jpg",
        para:
          encodeURI("My friends here in Charlotte are wonderful people, and occasionally they host movie nights at their house. This week was Game of Thrones (which isn't a movie but hey - there aren't any hard and fast rules) and everyone was required to dress as a female character from the show. Ygritte the wildling was my choice. You know nothing, Jon Snow.")
      }
    ]
  };
  render() {
    console.log(bgimg);
    return (
      <div
        className={classes.Picture}
        onClick={this.props.clicker}
        style={{ backgroundImage: bgimg }}
      >
        <p>
          My friends here in Charlotte are wonderful people, and occasionally
          they host movie nights at their house. This week was Game of Thrones
          (which isn't a movie but hey - there aren't any hard and fast rules)
          and everyone was required to dress as a female character from the
          show. Ygritte the wildling was my choice. You know nothing, Jon Snow.
        </p>
      </div>
    );
  }
}

export default MovieNights;
