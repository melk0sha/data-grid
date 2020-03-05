import React, { Component } from "react";
import "./index.scss";

export default class TableCol extends Component {
  render() {
    const { tableDataCol } = this.props;

    return (
      <td className="table-col">
        {typeof tableDataCol === "boolean"
          ? tableDataCol.toString()
          : tableDataCol}
      </td>
    );
  }
}
