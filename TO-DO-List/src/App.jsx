import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function addTask() {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setList([...list, newTask]);
    setTask("");
  }

  function toggleTask(id) {
    const updatedList = list.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setList(updatedList);
  }

  function deleteTask(id) {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  }

  return (
    <div className="container">
      <h1 className="heading">To-Do List</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="input"
        />
        <button onClick={addTask} className="add-btn">
          Add
        </button>
      </div>

      <ul className="list">
        {list.map((item) => (
          <li key={item.id} className="list-item">
            <span
              onClick={() => toggleTask(item.id)}
              className={item.completed ? "completed" : ""}
            >
              {item.text}
            </span>

            <button
              onClick={() => deleteTask(item.id)}
              className="delete-btn"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
