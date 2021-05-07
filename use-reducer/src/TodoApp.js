import React, { useReducer, useState } from "react";

const initialTodo = [
  { id: 1, title: "Todo #1" },
  { id: 2, title: "Todo #2" },
];

const types = {
  delete: "delete",
  update: "update",
  add: "add",
};
const reducer = (state, action) => {
  switch (action.type) {
    case types.delete:
      return state.filter((todo) => todo.id !== action.payload.id);
    case types.update: {
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    }
    case types.add:
      return [...state, action.payload];
    default:
      return state;
  }
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(reducer, initialTodo, undefined);
  const [text, setText] = useState("");
  return (
    <div>
      <h1>TodoApp</h1>
      <div>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          value={text}
        />
        <button
          onClick={() =>
            dispatch({
              type: types.add,
              payload: { title: text, id: Date.now() },
            })
          }
        >
          Add Task
        </button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button
              onClick={() =>
                dispatch({
                  type: types.update,
                  payload: { id: todo.id, title: text },
                })
              }
            >
              Update
            </button>
            <button
              onClick={() =>
                dispatch({ type: types.delete, payload: { id: todo.id } })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
