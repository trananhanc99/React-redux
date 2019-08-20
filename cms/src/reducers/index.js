import { combineReducers } from "redux";
import Products from "./product.js";
import Employee from "./employee.js";

const myReducer = combineReducers({
  Products,
  Employee
});
export default myReducer;
