import orderBy from "lodash.orderby";
import sortName from "../constants/sortName";

const sortColumns = [];

const sortTable = (table, tableHeader, columnName, isShift) => {
  if (isShift.value && !isShift.isFirst && !sortColumns.includes(columnName)) {
    sortColumns.push(columnName);
  } else if (!isShift.value || isShift.isFirst) {
    sortColumns.length = 0;
    sortColumns.push(columnName);
    isShift.isFirst = false;
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
