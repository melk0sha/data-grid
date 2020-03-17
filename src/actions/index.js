import { SORT_COLUMN } from "../constants/actionTypes";

export const sortColumn = (columnName) => {
  return { type: SORT_COLUMN, columnName };
};
