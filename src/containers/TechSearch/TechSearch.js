import React, { Component } from "react";
import classes from "./TechSearch.module.css";
import Autosuggest from "react-autosuggest";
import AutosuggestTheme from './AutoSuggestTheme.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const techs = ["angular", ".net core", "mongodb", "react", 'sql', 'strong'];

const getTechSuggestions = search => {
  const inputVal = search.trim().toLowerCase();
  const inputLen = inputVal.length;

  return inputLen === 0
    ? []
    : techs.filter(tech => {
        return tech.toLowerCase().slice(0, inputLen) === inputVal;
      });
};

const getSuggestionValue = suggestion => suggestion;

class TechSearch extends Component {
  state = {
    value: "",
    suggestions: []
  };

  renderSuggestion = suggestion => <div onClick={this.props.selector}>{suggestion}</div>;

  getSuggestionsHandler = ({ value }) => {
    this.setState({
      suggestions: getTechSuggestions(value)
    });
  };

  suggestionHighlightedHandler = ({ suggestion }) => {
    if (suggestion) {
      this.setState({
        value: suggestion
      })
    }
  }

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
      placeholder:
        "Search by tech (e.g. react, .net)",
      value,
      onChange: this.onChange
    };

    return (
      <div className={classes.TechSearch}>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.getSuggestionsHandler}
          onSuggestionsClearRequested={this.clearSuggestionsHandler}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
          theme={AutosuggestTheme}
          onSuggestionHighlighted={this.suggestionHighlightedHandler}
        /><span className={classes.IconSpan} onClick={this.props.selector}><FontAwesomeIcon icon={faSearch}/></span>
      </div>
    );
  }
}

export default TechSearch;
