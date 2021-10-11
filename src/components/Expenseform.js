import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

function Expenseform() {
  const [name, setname] = useState("");
  const [cost, setcost] = useState("");
  const { dispatch } = useContext(AppContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    // clear the form
    setcost("");
    setname("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            required
            className="form-control"
            onChange={(event) => {
              setname(event.target.value);
            }}
          />
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            type="text"
            id="cost"
            value={cost}
            required
            className="form-control"
            onChange={(event) => {
              setcost(event.target.value);
            }}
          />
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

export default Expenseform;
