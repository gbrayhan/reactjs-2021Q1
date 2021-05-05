import React, { useReducer } from "react";

const types = {
  increment: "increment",
  decrement: "decrement",
  reset: "reset",
};

// counterReducer if exist more reducers
function reducer(prevState, action) {
  switch (action.type) {
    case types.increment:
      return { count: prevState.count + 1 };
    case types.decrement:
      return { count: prevState.count - 1 };
    case types.reset:
      return init({ count: 0 });
    default:
      throw new Error();
  }
}

function init(initialState) {
  return initialState;
}

const initialState = { count: 0 };

const CounterApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  return (
    <div>
      <h1>Clicks: {state.count}</h1>
      <button onClick={() => dispatch({ type: types.increment })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: types.decrement })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: types.reset })}>Reset</button>
    </div>
  );
};

export default CounterApp;
