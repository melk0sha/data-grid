import React, { Component } from "react";
import TableCol from "../TableCol";
import "./index.scss";

export default class TableRow extends Component {
  render() {
    const { data, index, style, tableHeader, type } = this.props;
    const user = data[index];

    return user.visible ? (
      <div
        className={`table-row${
          type === "noVirtual" && index === 0 ? " table-row-virt" : ""
        }`}
        key={index}
        style={style}
      >
        {Object.values(user).map((tableDataCol, idx) =>
          typeof tableDataCol !== "boolean" &&
          tableHeader[Object.keys(user)[idx]].visible ? (
            <TableCol
              key={idx}
              tableDataCol={tableDataCol}
              tableDataClassName={Object.keys(user)[idx]}
            />
          ) : null
        )}
      </div>
    ) : null;
  }
}
