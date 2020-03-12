import React, { Component } from "react";
import TableCol from "../TableCol";
import "./index.scss";

export default class TableRow extends Component {
  render() {
    const { tableDataRow, tableHeader } = this.props;

    return (
      <tr className="table-row">
        {Object.values(tableDataRow).map((tableDataCol, idx) =>
          typeof tableDataCol !== "boolean" &&
          tableHeader[Object.keys(tableDataRow)[idx]].visible ? (
            <TableCol key={idx} tableDataCol={tableDataCol} />
          ) : null
        )}
      </tr>
    );
  }
}
