// actions.js
import * as type from "constants/index.js";
export default function showData() {
  return {
    type: type.SHOW_DATA
  };
}

export const showDataEmployee = () => {
  return {
    type: type.SHOW_EMPLOYEE
  };
};
export const addDataEmployee = task => ({
  type: type.ADD_EMPLOYEE,
  task
});
export const editDataEmployee = (newData, oldData) => ({
  type: type.EDIT_EMPLOYEE,
  newData,
  oldData
});
export const deleteDataEmployee = oldData => ({
  type: type.DELETE_EMPLOYEE,
  oldData
});
