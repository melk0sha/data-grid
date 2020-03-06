import sortName from "../constants/sortName";

const sortTable = (tableHeader, table, columnName) => {
  table.sort((a, b) => {
    if (tableHeader[columnName].sort === sortName.UP) {
      if (a.rowData[columnName] > b.rowData[columnName]) {
        return -1;
      } else if (a.rowData[columnName] < b.rowData[columnName]) {
        return 1;
      }
    } else {
      if (a.rowData[columnName] > b.rowData[columnName]) {
        return 1;
      } else if (a.rowData[columnName] < b.rowData[columnName]) {
        return -1;
      }
    }
    return 0;
  });

  tableHeader[columnName].sort =
    tableHeader[columnName].sort === sortName.UP ? sortName.DOWN : sortName.UP;
};

export default sortTable;
