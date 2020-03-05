import React, { Component } from "react";
import Search from "./components/Search";
import Table from "./components/Table";
import tableData from "./data/tableData";
import tableHeaderData from "./data/tableHeaderData";
import sortName from "./constants/sortName";
import resetSort from "./utils/resetSort";

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

    table.sort((a, b) => {
      if (tableHeader[columnName].sort === sortName.UP) {
        if (a[columnName] > b[columnName]) {
          return -1;
        } else if (a[columnName] < b[columnName]) {
          return 1;
        }
      } else {
        if (a[columnName] > b[columnName]) {
          return 1;
        } else if (a[columnName] < b[columnName]) {
          return -1;
        }
      }
      return 0;
    });
    tableHeader[columnName].sort =
      tableHeader[columnName].sort === sortName.UP
        ? sortName.DOWN
        : sortName.UP;

    this.setState({ table, tableHeader });
  };

  onSearch = ({ target: { value } }) => {
    const { table } = this.state;

    // table.filter((tableRow) => {
    //   tableRow[]
    // })
    this.setState({ searchValue: value });
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
