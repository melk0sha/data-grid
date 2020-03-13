// import { combineReducers } from "redux";
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

// function visibilityFilter(state = SHOW_ALL, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return action.filter;
//     default:
//       return state;
//   }
// }

// function todos(state = [], action) {
//   switch (action.type) {
//     case ADD_TODO:
//       return [
//         ...state,
//         {
//           text: action.text,
//           completed: false
//         }
//       ];
//     case TOGGLE_TODO:
//       return state.map((todo, index) => {
//         if (index === action.index) {
//           return Object.assign({}, todo, {
//             completed: !todo.completed
//           });
//         }
//         return todo;
//       });
//     default:
//       return state;
//   }
// }

// const todoApp = combineReducers({
//   visibilityFilter,
//   todos
// });
