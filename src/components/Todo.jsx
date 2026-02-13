import React, {useState} from "react";
import {useAsyncError} from "react-router-dom";
import TodoItems from "./TodoItems";
let data = [];
const Todo = () => {
  const [todoData, setTodoData] = useState([]);
  const [id, setId] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setId((eid) => eid + 1);
      const objData = {
        id,
        text: inputValue.trim(),
      };
      if (data[0]) {
        setTodoData(data)
      } else {
        setTodoData([...todoData, objData]);
      }
    }
  };
  return (
    <div className="main__todo">
      <form onSubmit={(e) => handleSubmit(e)} className="main__form" action="">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          className="main__input"
          type="text"
        />
        <button className="main__todo-button">Add</button>
      </form>
      <div className="main__todos">
        <TodoItems data={todoData} />
      </div>
    </div>
  );
};

export default Todo;
