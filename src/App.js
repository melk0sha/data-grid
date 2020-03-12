import React, { Component } from "react";
import ToggleFilter from "./components/ToggleFilter";
import Multiselect from "./components/Multiselect";
import Search from "./components/Search";
import Table from "./components/Table";
import tableData from "./data/tableData";
import tableHeaderData from "./data/tableHeaderData";
import sortName from "./constants/sortName";
import companyName from "./constants/companyName";
import toggleName from "./constants/toggleName";
import resetSort from "./utils/resetSort";
import sortTable from "./utils/sortTable";
import filter from "./utils/filter";
import events from "./constants/events";
import keyName from "./constants/keyName";
import ToggleColumn from "./components/ToggleColumn";

export default class App extends Component {
  state = {
    table: tableData,
    tableHeader: tableHeaderData,
    searchValue: "",
    multiselectedValues: Object.values(companyName),
    toggleValue: toggleName.ALL,
    isShift: false
  };

  componentDidMount() {
    const { onShiftSort } = this;

    document.addEventListener(events.KEYDOWN, onShiftSort);
    document.addEventListener(events.KEYUP, onShiftSort);
  }

  onColumnSort = ({
    currentTarget: {
      dataset: { columnName }
    }
  }) => {
    let { table, isShift } = this.state;
    let { tableHeader } = this.state;

    if (tableHeader[columnName].sort === sortName.NOT && !isShift) {
      tableHeader = resetSort(tableHeader);
    }

    table = sortTable(table, tableHeader, columnName, isShift);

    this.setState({ table, tableHeader });
  };

  onShiftSort = ({ key, type }) => {
    let { isShift } = this.state;

    if (type === events.KEYDOWN && key === keyName.SHIFT) {
      isShift = true;
    } else if (type === events.KEYUP && key === keyName.SHIFT) {
      isShift = false;
    }

    this.setState({ isShift });
  };

  onSearch = ({ target: { value } }) => {
    value = value.toLowerCase();
    let { table, multiselectedValues, toggleValue } = this.state;
    filter(table, multiselectedValues, value, toggleValue);

    this.setState({ table, searchValue: value });
  };

  onToggleFilter = ({ target: { id } }) => {
    const { table, multiselectedValues, searchValue } = this.state;
    filter(table, multiselectedValues, searchValue, id);

    this.setState({ table, toggleValue: id });
  };

  onSelect = (selectedValues) => {
    const { table, searchValue, toggleValue } = this.state;
    selectedValues = selectedValues.map((selectedValue) => selectedValue.name);
    filter(table, selectedValues, searchValue, toggleValue);

    this.setState({ table, multiselectedValues: selectedValues });
  };

  onToggleColumn = ({
    currentTarget: {
      dataset: { columnName }
    }
  }) => {
    const { tableHeader } = this.state;
    tableHeader[columnName].visible = !tableHeader[columnName].visible;

    this.setState({ tableHeader });
  };

  render() {
    const {
      onColumnSort,
      onSearch,
      onToggleFilter,
      onSelect,
      onToggleColumn
    } = this;
    const { table, tableHeader, searchValue } = this.state;

    return (
      <>
        <ToggleColumn
          tableHeader={tableHeader}
          onToggleColumn={onToggleColumn}
        />
        <div className="widgets">
          <ToggleFilter onToggleFilter={onToggleFilter} />
          <Multiselect onSelect={onSelect} />
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
