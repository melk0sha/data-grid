import React, { Component } from "react";

export default class ToggleColumnItem extends Component {
  render() {
    const { tableHeaderItem, onToggleColumn } = this.props;

    return (
      <li
        className="toggle-col-item"
        onClick={onToggleColumn}
        data-column-name={tableHeaderItem}
      >
        {tableHeaderItem.toUpperCase()}
      </li>
    );
  }
}
