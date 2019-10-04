import React, { Component } from "react";
import classes from "./TechSearch.module.css";
import Autosuggest from "react-autosuggest";
import AutosuggestTheme from "./AutoSuggestTheme.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";

class TechSearch extends Component {
  state = {
    value: "",
    suggestions: [],
    techs: []
  };

  getTechSuggestions = search => {
    const inputVal = search.trim().toLowerCase();
    const inputLen = inputVal.length;

    return inputLen === 0
      ? []
      : this.state.techs.filter(tech => {
          if (tech) {
            return tech.toLowerCase().slice(0, inputLen) === inputVal;
          } else {
            return null;
          }
        });
  };

  getSuggestionValue = suggestion => suggestion;

  componentDidMount() {
    Axios.get("https://cvsite-80b2f.firebaseio.com/projects.json").then(res => {
      const projKeys = Object.keys(res.data);
      let techList = [];

      projKeys.forEach(projKey => {
        res.data[projKey].techWords.forEach(tech => {
          if (!techList.includes(tech)) {
            techList.push(tech);
          }
        });
      });

      this.setState({
        techs: techList
      });
    });
  }

  handleSearchButton = () => {
    this.props.buttonSelector(this.state.value);
  };

  renderSuggestion = suggestion => (
    <div onClick={this.props.selector}>{suggestion}</div>
  );

  getSuggestionsHandler = ({ value }) => {
    this.setState({
      suggestions: this.getTechSuggestions(value)
    });
  };

  suggestionHighlightedHandler = ({ suggestion }) => {
    if (suggestion) {
      this.setState({
        value: suggestion
      });
    }
  };

  clearSuggestionsHandler = () => {
    this.setState({
      suggestions: []
    });
  };

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search by tech (e.g. react, .net)",
      value,
      onChange: this.onChange
    };

    return (
      <div className={classes.TechSearch}>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.getSuggestionsHandler}
          onSuggestionsClearRequested={this.clearSuggestionsHandler}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
          theme={AutosuggestTheme}
          onSuggestionHighlighted={this.suggestionHighlightedHandler}
        />
        <span className={classes.IconSpan} onClick={this.handleSearchButton}>
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>
    );
  }
}

export default TechSearch;
