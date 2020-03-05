import React, { Component } from "react";
import TableCol from "../TableCol";
import "./index.scss";

export default class TableRow extends Component {
  render() {
    const { tableDataRow } = this.props;

    return (
      <tr className="table-row">
        {Object.values(tableDataRow).map((tableDataCol, idx) => (
          <TableCol key={idx} tableDataCol={tableDataCol} />
        ))}
      </tr>
    );
  }
}
