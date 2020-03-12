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
            {Object.keys(tableHeader).map((tableHeaderItem) =>
              tableHeader[tableHeaderItem].visible ? (
                <TableHeader
                  key={tableHeader[tableHeaderItem].id}
                  tableHeaderItem={tableHeader[tableHeaderItem]}
                  onColumnSort={onColumnSort}
                />
              ) : null
            )}
          </tr>
        </thead>
        <tbody>
          {tableData.map((tableDataRow, idx) =>
            tableDataRow.visible ? (
              <TableRow
                key={idx}
                tableDataRow={tableDataRow}
                tableHeader={tableHeader}
              />
            ) : null
          )}
        </tbody>
      </table>
    );
  }
}
