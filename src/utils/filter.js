import tableHeaderData from "../data/tableHeaderData";
import toggleName from "../constants/toggleName";

const filter = (table, selectedValues, searchValue, toggleValue) => {
  table.forEach((tableRow) => {
    switch (toggleValue) {
      default:
      case toggleName.ALL:
        tableRow.visible =
          selectedValues.includes(tableRow[tableHeaderData.company.name]) &&
          Object.keys(tableRow).some((tableCol) =>
            tableRow[tableCol]
              .toString()
              .toLowerCase()
              .includes(searchValue)
          );
        break;
      case toggleName.STUDENT:
      case toggleName.EMPLOYEE:
        tableRow.visible =
          selectedValues.includes(tableRow[tableHeaderData.company.name]) &&
          Object.keys(tableRow).some((tableCol) =>
            tableRow[tableCol]
              .toString()
              .toLowerCase()
              .includes(searchValue)
          ) &&
          tableRow[toggleName.STATUS] === toggleValue;
        break;
    }
  });
};

export default filter;
