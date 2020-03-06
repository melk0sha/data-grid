import React, { Component } from "react";
import Search from "./components/Search";
import Table from "./components/Table";
import tableData from "./data/tableData";
import tableHeaderData from "./data/tableHeaderData";
import sortName from "./constants/sortName";
import resetSort from "./utils/resetSort";
import sortTable from "./utils/sortTable";

export default class App extends Component {
  state = {
    table: tableData,
    tableHeader: tableHeaderData,
    searchValue: ""
  };

  onColumnSort = ({
    currentTarget: {
      dataset: { columnName }
    }
  }) => {
    const { table } = this.state;
    let { tableHeader } = this.state;

    if (tableHeader[columnName].sort === sortName.NOT) {
      tableHeader = resetSort(tableHeader);
    }

    sortTable(tableHeader, table, columnName);

    this.setState({ table, tableHeader });
  };

  onSearch = ({ target: { value } }) => {
    value = value.toLowerCase();
    let { table } = this.state;

    table.forEach((tableRow) => {
      tableRow.visible = Object.keys(tableRow.rowData).some((tableCol) =>
        tableRow.rowData[tableCol]
          .toString()
          .toLowerCase()
          .includes(value)
      );
    });

    this.setState({ table, searchValue: value });
  };

  render() {
    const { onColumnSort, onSearch } = this;
    const { table, tableHeader, searchValue } = this.state;

    return (
      <>
        <Search searchValue={searchValue} onSearch={onSearch} />
        <Table
          tableHeader={tableHeader}
          tableData={table}
          onColumnSort={onColumnSort}
        />
      </>
    );
  }
}
