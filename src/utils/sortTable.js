import orderBy from "lodash.orderby";
import sortName from "../constants/sortName";

const sortColumns = [];

const sortTable = (table, tableHeader, columnName, isShift) => {
  if (isShift && !sortColumns.includes(columnName)) {
    sortColumns.push(columnName);
  } else if (!isShift) {
    sortColumns.length = 0;
    sortColumns.push(columnName);
  }

  table = orderBy(
    table,
    sortColumns,
    sortColumns.map((header) =>
      tableHeader[header].sort === sortName.UP ? "desc" : "asc"
    )
  );

  tableHeader[columnName].sort =
    tableHeader[columnName].sort === sortName.UP ? sortName.DOWN : sortName.UP;

  return table;
};

export default sortTable;
