import React, { Component } from "react";
import classes from "./MovieNights.module.css";

const movieNightImages = require.context("../../../../assets", true);

class MovieNights extends Component {
  state = {
    movieNights: [
      {
        image: "./movienight_1.jpg",
        para: encodeURI(
          "My friends here in Charlotte are wonderful people, and occasionally they host movie nights at their house. This week was Game of Thrones (which isn't a movie but hey - there aren't any hard and fast rules) and everyone was required to dress as a female character from the show. Ygritte the wildling was my choice. You know nothing, Jon Snow."
        )
      }
    ]
  };

  render() {
    return (
      <div
        className={classes.Picture}
        onClick={this.props.clicker}
        style={{
          backgroundImage: `url(${movieNightImages(this.state.movieNights[0].image)}`
        }}
      >
        <p>{decodeURI(this.state.movieNights[0].para)}</p>
      </div>
    );
  }
}

export default MovieNights;
