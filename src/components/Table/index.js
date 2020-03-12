import React, { Component } from "react";
import { FixedSizeList as List } from "react-window";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";
import "./index.scss";

export default class Table extends Component {
  render() {
    const { tableHeader, tableData, onColumnSort } = this.props;

    return (
      <>
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
        </table>
        <List
          height={150}
          itemCount={1}
          itemSize={50}
          outerElementType="table"
          innerElementType="tbody"
          className="table"
          itemData={[tableData, tableHeader]}
        >
          {TableRow}
        </List>
      </>
    );
  }
}
