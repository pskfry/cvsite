import React, { Component } from "react";
import classes from "./MovieNights.module.css";
import InvisBackdrop from "../../InvisBackdrop/InvisBackdrop";

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
      <React.Fragment>
        <InvisBackdrop clicker={this.props.clicker} />
        <div
          className={classes.Picture}
          style={{
            backgroundImage: `url(${movieNightImages(
              this.state.movieNights[0].image
            )}`
          }}
        >
          <p>{decodeURI(this.state.movieNights[0].para)}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default MovieNights;
