import React, { Component } from 'react';
import classes from './Picture.module.css';
import MovieNights from './MovieNights/MovieNights';

class Picture extends Component {
    state = {
        showFull: false
    }

    picFlipper = () => {
        this.setState({
            showFull: !this.state.showFull
        });
    }

    render () {
        let pic = <div className = {classes.Picture} onClick={this.picFlipper} />

        if (this.state.showFull) {
            pic = <MovieNights clicker={this.picFlipper} />
        }

        return <React.Fragment>{pic}</React.Fragment>;
    }
}

export default Picture;