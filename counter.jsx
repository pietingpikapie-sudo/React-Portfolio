import React, { useReducer } from 'react';

// Reducer function that determines how state changes
const reducer = (state, action) => {
  switch (action.type) {

    // Increase count by 1
    case 'INCREMENT':
      return { count: state.count + 1 };

    // Decrease count by 1
    case 'DECREMENT':
      return { count: state.count - 1 };

    // Return current state if action type is unknown
    default:
      return state;
  }
};

function Counter() {

  // Initialize state and dispatch function
  // state = current state object
  // dispatch = function used to send actions to reducer
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>

      {/* Heading */}
      <h2>Counter!</h2>

      {/* Display current count */}
      <p>Count: {state.count}</p>

      {/* Button to increment count */}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        Increment
      </button>

      {/* Button to decrement count */}
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>
        Decrement
      </button>

    </div>
  );
}

export default Counter;