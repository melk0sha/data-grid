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
        itemCount={tableData.length + 1}
        itemSize={60}
        className="table"
        itemData={tableData}
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
            />
          ) : null
        }
      </List>
    ) : (
      <>
        <table className="table">
          <tbody>
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
          </tbody>
        </table>
        <div className="table">
          {tableData.map((tableRowData, idx) => (
            <TableRow
              key={idx}
              data={tableData}
              index={idx}
              tableHeader={tableHeader}
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
      <table className="table">
        <tbody>
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
        </tbody>
      </table>
      {children}
    </div>
  );
};
