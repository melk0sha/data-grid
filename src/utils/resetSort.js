import sortName from "../constants/sortName";

const resetSort = (tableHeader) => {
  Object.keys(tableHeader).forEach(
    (header) => (tableHeader[header].sort = sortName.NOT)
  );

  return tableHeader;
};

export default resetSort;
