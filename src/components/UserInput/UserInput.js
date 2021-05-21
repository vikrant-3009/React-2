import { useState } from "react";

import "./UserInput.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const UserInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const changeNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const changeAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    // Passing the entered nme and age to App.js
    props.onAddData(enteredName, enteredAge);

    // Reseting the input fields
    setEnteredName("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={formSubmitHandler}>
        <div className="form-control">
          <label>Username</label>
          <input
            type="text"
            value={enteredName}
            onChange={changeNameHandler}
          ></input>
        </div>
        <div className="form-control">
          <label>Age (Years)</label>
          <input
            type="number"
            value={enteredAge}
            onChange={changeAgeHandler}
          ></input>
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
};

export default UserInput;
