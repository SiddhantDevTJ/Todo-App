import { MdCheck, MdDeleteForever } from "react-icons/md";
import "./Todo.css";

export const TodoList = ({
  key,
  index,
  data,
  editTask,
  deleteTask,
  checked,
  handleCheckTodo,
}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      {/* <button className="check-btn" onClick={() => handleCheckTodo(data)}>
        <MdCheck />
      </button> */}
      <button className="check-btn" onClick={() => editTask(data)}>
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => deleteTask(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};
