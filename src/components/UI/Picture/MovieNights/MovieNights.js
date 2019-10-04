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
      },
      {
        image: "./movienight_2.jpg",
        para: encodeURI(
          "This one was The Flintstones. Embarassing. Did you know there was a Jetsons Flintstones cross-over movie made in 1987? It's as bad as it sounds."
        )
      },
      {
        image: "./movienight_3.jpg",
        para: encodeURI(
          "Here we are in the middle of a circus themed murder mystery night. I was the disgruntled clown - nobody was surprised when I ended up being the murderer. Nobody except me anyway. I don't remember killing anyone!"
        )
      },
      {
        image: "./movienight_4.jpg",
        para: encodeURI(
          "Sometimes instead of doing a specific movie as a theme, we choose a favorite actor. Here I am as The Mask on our Jim Carrey movie night. It wasn't me, it was the one-armed man!"
        )
      }
    ],
    selectedMovieId: 0
  };

  shufflePic = () => {
    let newIdxFound = false;
    let rand;
    let diff;
    let lowestDiff;
    let newIdx;

    while (!newIdxFound) {
      rand = Math.random();
      newIdx = 0;
      lowestDiff = 1;

      for (let x = 1; x < this.state.movieNights.length + 1; x++) {
        diff = Math.abs(x / this.state.movieNights.length - rand);

        if (diff < lowestDiff) {
          lowestDiff = diff;
          newIdx = x - 1;
        }
      }

      newIdxFound = newIdx !== this.state.selectedMovieId;
    }

    this.setState({
      selectedMovieId: newIdx
    });
  };

  render() {
    return (
      <React.Fragment>
        <InvisBackdrop clicker={this.props.clicker} />
        <div
          className={classes.Picture}
          style={{
            backgroundImage: `url(${movieNightImages(
              this.state.movieNights[this.state.selectedMovieId].image
            )}`
          }}
          onClick={this.shufflePic}
        >
          <p>{decodeURI(this.state.movieNights[this.state.selectedMovieId].para)}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default MovieNights;
