import { useState } from "react";
import { addTodo, deleteTodo } from "../features/todo/todoSlice";
import { useSelector, useDispatch } from "react-redux";

function TodoApp() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addTodo(text));
    setText("");
  };
  return (
    <div style={{ padding: "20px" }}>
      <h1> Todo App</h1>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => dispatch(deleteTodo(index))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoApp;
