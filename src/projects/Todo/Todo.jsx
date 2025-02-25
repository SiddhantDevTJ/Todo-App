import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

const todosKey = "todos";

const getLocalStorageTodoData = () => {
  const savedTasks = localStorage.getItem(todosKey);
  if (savedTasks) {
    return JSON.parse(savedTasks);
  }
  return [];
};

export const Todo = () => {
  const [tasks, setTasks] = useState(() => getLocalStorageTodoData());

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return;
    // if (tasks.includes(inputValue)) {
    //   alert("Task already exists");
    //   return;
    // }

    const ifTodoContentMatch = tasks.find((task) => task.content === content);
    if (ifTodoContentMatch) {
      alert("Task already exists");
      return;
    }

    setTasks((tasks) => [
      ...tasks,
      { id: id, content: content, checked: checked },
    ]);
  };

  /// add data to localstorage
  localStorage.setItem(todosKey, JSON.stringify(tasks));

  /// delete data from localstorage

  const deleteTask = (value) => {
    const newTasks = tasks.filter((task) => task.content !== value);
    setTasks(newTasks);
  };

  /// edit data from localstorage

  const editTask = (value) => {
    const newTasks = tasks.map((task) => {
      if (task.content === value) {
        const updatedContent = prompt("Edit Task", task.content);
        if (updatedContent) {
          return { ...task, content: updatedContent }; // Maintain object structure
        }
      }
      return task;
    });
    setTasks(newTasks);
  };

  const handleCheckTodo = (content) => {
    const newTasks = tasks.map((task) => {
      if (task.content === content) {
        return { ...task, checked: !task.checked };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <section className="todo-contsiner">
      <header>
        <h1>Todo App</h1>
        <TodoDate />
        <TodoForm onAddTodo={handleFormSubmit} />
        <section className="myUnOrdList">
          <ul>
            {tasks.map((task, index) => {
              return (
                <TodoList
                  key={task.id}
                  index={index}
                  data={task.content}
                  editTask={editTask}
                  deleteTask={deleteTask}
                  checked={task.checked}
                  handleCheckTodo={handleCheckTodo}
                />
              );
            })}
          </ul>
        </section>
      </header>
    </section>
  );
};
