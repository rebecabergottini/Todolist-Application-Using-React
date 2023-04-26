import React, { useState } from "react";

//create your first component
const Home = () => {
  const [tasks, setTasks] = useState("");
  const [toDoList, setToDoList] = useState([]);

  function handleTasks(event) {
    setTasks(event.target.value);
  }

  function addTasks(event) {
    if (event.key === "Enter" && tasks.trim() !== "") {
      setToDoList([...toDoList, tasks]);
      setTasks("");
    }
  }

  function removeTasks(index) {
    const newList = [...toDoList];
    newList.splice(index, 1);
    setToDoList(newList);
  }

  return (
    <div className="text-left w-50 mx-auto mt-5">
      <h1
        className="text-center fw-light fs-1 mb-2"
        style={{ color: "#FFC0CB" }}
      >
        todos
      </h1>
      <ul className="list-group list-group">
        {toDoList.length === 0 ? (
          <li className="list-group-item px-5">
            <input
              className="w-100 border border-0 fs-5"
              onChange={handleTasks}
              onKeyDown={addTasks}
              value={tasks}
              type="text"
              id="todos"
              placeholder="No tasks, add a task"
            />
          </li>
        ) : (
          <li className="list-group-item px-5">
            <input
              className="w-100 border border-0 fs-5"
              onChange={handleTasks}
              onKeyDown={addTasks}
              value={tasks}
              type="text"
              id="todos"
              placeholder="What needs to be done?"
            />
          </li>
        )}
        {toDoList.map((task, index) => (
          <li
            key={index}
            id="cruz"
            className="list-group-item fs-5 text-left px-5 d-flex justify-content-between"
          >
            {" "}
            {task}
            <button
              id="eliminarcruz"
              onClick={() => removeTasks(index)}
              type="button"
              className={"btn-close fs-6 mt-1"}
              aria-label="Close"
            ></button>
          </li>
        ))}
        <li className="list-group-item text-left fs-6 fw-light text-black-50">
          {toDoList.length} item left
        </li>
      </ul>
    </div>
  );
};

export default Home;
