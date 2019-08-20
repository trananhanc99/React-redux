import uniqid from "uniqid";
const initialState = [
  {
    id: uniqid(),
    name: "Traan Anh",
    surname: "Baran",
    birthYear: 1987,
    birthCity: 63
  },
  {
    id: uniqid(),
    name: "Tran ngoc",
    surname: "Baran",
    birthYear: 1987,
    birthCity: 63
  },
  {
    id: uniqid(),
    name: "Traan chau",
    surname: "Baran",
    birthYear: 1987,
    birthCity: 63
  }
];

const employee = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_EMPLOYEE":
      return state;
    case "ADD_EMPLOYEE": {
      const dataNew = action.task;
      let pushData = function(newData) {
        let stateOld = state;
        stateOld.push(newData);
      };
      pushData(dataNew);
      return state;
    }
    case "EDIT_EMPLOYEE": {
      const newData = action.newData;
      const oldData = action.oldData;
      const data = state;
      data[data.indexOf(oldData)] = newData;
      return data;
    }
    case "DELETE_EMPLOYEE": {
      const oldData = action.oldData;
      const data = state;
      data.splice(data.indexOf(oldData), 1);
      return data;
    }
    default:
      return state;
  }
};

export default employee;
