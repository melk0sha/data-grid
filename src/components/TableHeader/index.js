import React, { Component } from "react";
import sortName from "../../constants/sortName";
import "./index.scss";

export default class TableHeader extends Component {
  render() {
    const { tableHeaderItem, onColumnSort } = this.props;

    return (
      <div
        className={`table-header-col table-header-col-${tableHeaderItem.name}`}
        onClick={onColumnSort}
        data-column-name={tableHeaderItem.name}
      >
        <span className="table-header-name">{tableHeaderItem.name}</span>
        <span className="table-header-sort">
          <i
            className={`material-icons up${
              tableHeaderItem.sort === sortName.UP ? " active" : ""
            }`}
          >
            play_arrow
          </i>
          <i
            className={`material-icons down${
              tableHeaderItem.sort === sortName.DOWN ? " active" : ""
            }`}
          >
            play_arrow
          </i>
        </span>
      </div>
    );
  }
}
