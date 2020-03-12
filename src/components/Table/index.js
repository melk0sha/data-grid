import React, { Component } from "react";
import { FixedSizeList as List } from "react-window";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";
import "./index.scss";

export default class Table extends Component {
  render() {
    const {
      tableHeader,
      tableData,
      onColumnSort,
      isVirtualization
    } = this.props;

    return isVirtualization ? (
      <List
        height={450}
        itemCount={
          tableData.length
            ? tableData.filter((tableDataRow) => tableDataRow.visible).length +
              1
            : 0
        }
        itemSize={60}
        className="table"
        itemData={tableData.filter((tableDataRow) => tableDataRow.visible)}
        innerElementType={({ children, ...props }) => (
          <TableWrapper
            children={children}
            tableHeader={tableHeader}
            onColumnSort={onColumnSort}
            {...props}
          />
        )}
      >
        {(data) =>
          data.index !== 0 ? (
            <TableRow
              {...data}
              index={data.index - 1}
              tableHeader={tableHeader}
              type="yesVirtual"
            />
          ) : null
        }
      </List>
    ) : (
      <>
        <div className="table">
          <TableHeaderWrapper
            tableHeader={tableHeader}
            onColumnSort={onColumnSort}
          />
          {tableData.map((tableRowData, idx) => (
            <TableRow
              key={idx}
              data={tableData}
              index={idx}
              tableHeader={tableHeader}
              type="noVirtual"
            />
          ))}
        </div>
      </>
    );
  }
}

const TableWrapper = ({ children, tableHeader, onColumnSort, ...props }) => {
  return (
    <div {...props}>
      <TableHeaderWrapper
        tableHeader={tableHeader}
        onColumnSort={onColumnSort}
      />
      {children}
    </div>
  );
};

const TableHeaderWrapper = ({ tableHeader, onColumnSort }) => {
  return (
    <div className="table">
      <div className="table-header-row">
        {Object.keys(tableHeader).map((tableHeaderItem) =>
          tableHeader[tableHeaderItem].visible ? (
            <TableHeader
              key={tableHeader[tableHeaderItem].id}
              tableHeaderItem={tableHeader[tableHeaderItem]}
              onColumnSort={onColumnSort}
            />
          ) : null
        )}
      </div>
    </div>
  );
};
