import React, { Component } from "react";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";
import "./index.scss";

export default class Table extends Component {
  render() {
    const { tableHeader, tableData, onColumnSort } = this.props;

    return (
      <table className="table">
        <thead>
          <tr className="table-header-row">
            {Object.keys(tableHeader).map((tableHeaderItem, idx) => (
              <TableHeader
                key={tableHeader[tableHeaderItem].id}
                tableHeaderItem={tableHeader[tableHeaderItem]}
                onColumnSort={onColumnSort}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((tableDataRow) =>
            tableDataRow.visible ? (
              <TableRow
                key={tableDataRow.id}
                tableDataRow={tableDataRow.rowData}
              />
            ) : null
          )}
        </tbody>
      </table>
    );
  }
}
