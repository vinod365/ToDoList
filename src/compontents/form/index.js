import { useState } from "react";
import "./style.css";

function Form({ onAddItems }) {
  const [value, setValue] = useState("");
  const [isDateShown, setIsDateShown] = useState(false);
  const [helpfulMsg, setHelpfulMsg] = useState("Please enter something");

  function handleChange(e) {
    setValue(e.target.value);
    if (e.target.value !== "") {
      setHelpfulMsg("");
    } else {
      setHelpfulMsg("Please enter something");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddItems((items) => {
      return [...items, value];
    });
  }

  return (
    <div className="form">
      <p className="heading">To-do List</p>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="forms"
      >
        <input placeholder="Enter item" onChange={handleChange}></input>
        <button>Submit</button>
      </form>
      {helpfulMsg == "" ? (
        <div className="date">
          <input type="date"></input>
        </div>
      ) : (
        <p className="helpful__message"> {helpfulMsg}</p>
      )}
    </div>
  );
}

export default Form;
