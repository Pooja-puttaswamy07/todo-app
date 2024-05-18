import React, { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState([]); //an empty array is initialized, todo is a state var, setTodos is a function
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodo([...todo, newTodo]); // Spread operator('...'), hold the value of todo array and new values from newTodo
      setNewTodo("");
    }
  };
  return (
    <div>
      <h2>My new list</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add item</button>
      <ul>
        {todo.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
