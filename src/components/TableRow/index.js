import React, { Component } from "react";
import TableCol from "../TableCol";
import "./index.scss";

export default class TableRow extends Component {
  render() {
    const { data } = this.props;
    const [tableData, tableHeader] = data;

    return tableData.map((tableDataRow, idx) =>
      tableDataRow.visible ? (
        <tr key={idx} className="table-row">
          {Object.values(tableDataRow).map((tableDataCol, idx) =>
            typeof tableDataCol !== "boolean" &&
            tableHeader[Object.keys(tableDataRow)[idx]].visible ? (
              <TableCol key={idx} tableDataCol={tableDataCol} />
            ) : null
          )}
        </tr>
      ) : null
    );
  }
}
