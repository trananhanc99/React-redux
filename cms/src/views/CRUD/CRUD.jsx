import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "actions/index.js";

function MaterialTableDemo() {
  const dataEmployees = useSelector(state => state.Employee);
  const onAdd = useDispatch();
  const [state, setState] = useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "Surname", field: "surname" },
      { title: "Birth Year", field: "birthYear", type: "numeric" },
      {
        title: "Birth Place",
        field: "birthCity",
        lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
      }
    ]
  });
  const addListEmployee = () => dataEmployees.listEmployee;
  useEffect(() => {
    console.log(dataEmployees + "in ra");
  });

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={dataEmployees}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...dataEmployees];
              data.push(newData);
              onAdd(actions.addDataEmployee(newData));
              setState({ ...state, addListEmployee });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              onAdd(actions.editDataEmployee(newData, oldData));
              setState({ ...state, dataEmployees });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              onAdd(actions.deleteDataEmployee(oldData));
              setState({ ...state, dataEmployees });
            }, 600);
          })
      }}
    />
  );
}

export default MaterialTableDemo;
