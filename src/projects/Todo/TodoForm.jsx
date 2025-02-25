import { useState } from "react";
import "./Todo.css";

export const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState({});

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.content) return; // Prevent empty submissions

    onAddTodo(inputValue);
    setInputValue({ id: "", content: "", checked: false }); // Reset input field
  };

  const handleInputChange = (value) => {
    setInputValue({ id: value, content: value, checked: false });
  };

  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="Add Todo"
          autoComplete="off"
          value={inputValue.content}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <button type="submit" className="button" autoComplete="off">
          Add
        </button>
      </form>
    </section>
  );
};
