import React, { Component } from "react";
import "./index.scss";

export default class Search extends Component {
  render() {
    const { searchValue, onSearch } = this.props;

    return (
      <input
        className="search"
        type="text"
        placeholder="Type to search"
        value={searchValue}
        onChange={onSearch}
      />
    );
  }
}
