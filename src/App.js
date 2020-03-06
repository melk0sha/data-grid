import React, { Component } from "react";
import Toggle from "./components/Toggle";
import Search from "./components/Search";
import Table from "./components/Table";
import tableData from "./data/tableData";
import tableHeaderData from "./data/tableHeaderData";
import sortName from "./constants/sortName";
import toggleName from "./constants/toggleName";
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

  onToggle = ({ target: { id } }) => {
    const { table } = this.state;

    table.forEach((tableRow) => {
      switch (id) {
        default:
        case toggleName.ALL:
          tableRow.visible = true;
          break;
        case toggleName.STUDENT:
        case toggleName.EMPLOYEE:
          tableRow.visible = tableRow.rowData[toggleName.STATUS] === id;
          break;
      }
    });

    this.setState({ table });
  };

  render() {
    const { onColumnSort, onSearch, onToggle } = this;
    const { table, tableHeader, searchValue } = this.state;

    return (
      <>
        <div className="widgets">
          <Toggle onToggle={onToggle} />
          <Search searchValue={searchValue} onSearch={onSearch} />
        </div>
        <Table
          tableHeader={tableHeader}
          tableData={table}
          onColumnSort={onColumnSort}
        />
      </>
    );
  }
}
