import React, { useState } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../redux/todoSlice";

export const TodoView = () => {
  const [text, setText] = useState("");
  const todoList = useSelector((state) => state.todos.todo);//state.[slicename]
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div>
      <h1>Todo</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>add</button>
      <ul>
        {todoList.map((data) => (
          <li
            key={data.id}
            style={{
              textDecoration: data.status ? "line-through" : "none",
            }}>
            {data.text}{" "}
            <button onClick={() => dispatch(deleteTodo(data.id))}>
              delete
            </button>
            <button onClick={() => dispatch(updateTodo(data.id))}>
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
