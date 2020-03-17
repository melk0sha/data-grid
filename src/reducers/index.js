import tableData from "../data/tableData";
import { SORT_COLUMN } from "../constants/actionTypes";

const dataGridApp = (state = tableData, action) => {
  switch (action.type) {
    case SORT_COLUMN:
      return action.columnName;
    default:
      return state;
  }
};

export default dataGridApp;
