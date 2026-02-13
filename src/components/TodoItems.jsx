import React from "react";

const TodoItems = ({data}) => {
  console.log(data);
  function handleDelete(id) {
    const items = document.querySelectorAll(".main__todo-item");
    items[id].classList.add("removed");
    console.log(items[id]);
  }

  return data?.map((item) => {
    function handleId() {
      handleDelete(item.id) 
    }
    return (
      <div key={item} className="main__todo-item">
        <span className="main__todo-id">{item?.id}</span>
        <p className="main__todo-text">{item?.text}</p>
        <button key={item.id} onClick={handleId} className="main__todo-del">
          delete
        </button>
      </div>
    );
  });
};

export default TodoItems;
