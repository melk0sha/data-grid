import tableHeaderData from "../data/tableHeaderData";
import toggleName from "../constants/toggleName";

const filter = (table, selectedValues, searchValue, toggleValue) => {
  console.log();
  table.forEach((tableRow) => {
    switch (toggleValue) {
      default:
      case toggleName.ALL:
        tableRow.visible =
          selectedValues.includes(
            tableRow[tableHeaderData.company.name].name
          ) &&
          Object.values(tableRow).some((tableCol) => {
            return typeof tableCol !== "boolean"
              ? tableCol.name
                  .toString()
                  .toLowerCase()
                  .includes(searchValue)
              : false;
          });
        break;
      case toggleName.STUDENT:
      case toggleName.EMPLOYEE:
        tableRow.visible =
          selectedValues.includes(
            tableRow[tableHeaderData.company.name].name
          ) &&
          Object.values(tableRow).some((tableCol) => {
            return typeof tableCol !== "boolean"
              ? tableCol.name
                  .toString()
                  .toLowerCase()
                  .includes(searchValue)
              : false;
          }) &&
          tableRow[toggleName.STATUS].name === toggleValue;
        break;
    }
  });
};

export default filter;
