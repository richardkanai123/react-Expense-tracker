import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDelete = () => {
    alert("Delete me!!!");

    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="badge bg-primary rounded-pill mr-3">{props.cost}</span>
        <TiDelete
          size="1.5em"
          onClick={handleDelete}
          style={{
            cursor: "pointer",
            pointerEvents: "all",
          }}
        ></TiDelete>
      </div>
    </li>
  );
};

export default ExpenseItem;
