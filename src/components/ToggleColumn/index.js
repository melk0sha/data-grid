import React, { Component } from "react";
import ToggleColumnItem from "../ToggleColumnItem";
import "./index.scss";

export default class ToggleColumn extends Component {
  render() {
    const { tableHeader, onToggleColumn } = this.props;

    return (
      <div className="toggle-col">
        <p className="toggle-col-text">Toggle column: </p>
        <ul className="toggle-col-items">
          {Object.keys(tableHeader).map((tableHeaderItem, idx) => (
            <ToggleColumnItem
              key={idx}
              tableHeaderItem={tableHeaderItem}
              onToggleColumn={onToggleColumn}
            />
          ))}
        </ul>
      </div>
    );
  }
}
