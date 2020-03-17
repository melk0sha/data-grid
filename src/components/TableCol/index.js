import React, { Component } from "react";
import "./index.scss";

export default class TableCol extends Component {
  render() {
    const { tableDataCol, tableDataClassName } = this.props;

    return (
      <div className={`table-col table-col-${tableDataClassName}`}>
        {tableDataCol}
      </div>
    );
  }
}
