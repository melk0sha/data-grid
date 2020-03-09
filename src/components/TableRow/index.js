import React, { Component } from "react";
import TableCol from "../TableCol";
import "./index.scss";

export default class TableRow extends Component {
  render() {
    const { tableDataRow } = this.props;

    return (
      <tr className="table-row">
        {Object.values(tableDataRow).map((tableDataCol, idx) =>
          typeof tableDataCol !== "boolean" ? (
            <TableCol key={idx} tableDataCol={tableDataCol} />
          ) : null
        )}
      </tr>
    );
  }
}
