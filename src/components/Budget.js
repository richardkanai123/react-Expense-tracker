import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

function Budget() {
  const { budget, dispatch } = useContext(AppContext);

  const [editingBudget, setEditingBudget] = useState(false);

  const handleEdit = () => {
    setEditingBudget(true);
  };

  const updateBudget = () => {
    const spanguy = document.querySelector("#current_budget");

    if (editingBudget) {
      dispatch({
        type: "SET_BUDGET",
        payload: parseInt(spanguy.textContent),
      });
    }
    setEditingBudget(false);
  };

  return (
    <div
      className={
        editingBudget
          ? "alert bg-info d-flex justify-content-between align-items-center text-white"
          : "alert bg-success d-flex justify-content-between align-items-center text-white"
      }
    >
      <span>
        Budget : Ksh.{" "}
        <span
          id="current_budget"
          className="border px-5"
          contentEditable="true"
          value={budget}
          onClick={handleEdit}
        >
          {!editingBudget && budget}
        </span>
      </span>
      <button
        onClick={updateBudget}
        className="btn btn-rounded bg-primary text-white"
      >
        {editingBudget ? "Save" : "Update"}
      </button>
    </div>
  );
}

export default Budget;
