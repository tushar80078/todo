import React, { useState } from "react";
import "./Todos.css";
import HandleTodos from "./HandleTodos";
import { v4 as uuidv4 } from "uuid";

const Todos = () => {
  const [inputs, setinput] = useState(" ");

  const [state, setstate] = useState([]);

  const inputchange = (e) => {
    setinput(e.target.value);
  };

  const buttonClick = () => {
    const value = [
      ...state,
      {
        id: uuidv4(),
        todo: inputs,
        isUpdate: false,
      },
    ];
    setstate(value);

    setinput(" ");
  };

  function gettodoid(id) {
    let store = state.map((ele) => {
      if (id == ele.id) {
        ele.isUpdate = true;
        return ele;
      } else {
        ele.isUpdate = false;
        return ele;
      }
    });
    setstate(store);
    console.log("Todos:", state);
  }

  function deletestate(id) {
    let data = state.map((ele) => {
      if (id != ele.id) {
        return ele;
      }
    });
    setstate(data);
  }

  return (
    <div className="main-container">
      <div className="content">
        <input type="text" onChange={inputchange} value={inputs} />
        <button onClick={() => buttonClick()} id="btn">
          Add Todos
        </button>
      </div>

      <HandleTodos
        data={state}
        gettodofromchild={(id) => gettodoid(id)}
        deletedata={(id) => deletestate(id)}
      />
    </div>
  );
};

export default Todos;
