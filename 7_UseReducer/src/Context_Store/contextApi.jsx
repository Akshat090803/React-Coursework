import React, { createContext, useContext, useReducer } from 'react';

// 1. Create a Context
const CounterContext = createContext();

// 2. Define your reducer function (outside the component)
const initialState = { count: 0 };
const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const RESET = 'reset';
const INC_PAYLOAD = 'inc_payload';


function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    case RESET:
      return { count: 0 };
    case INC_PAYLOAD:
      return { count: state.count + action.payload.value };
    default:
      return state;
  }
}

// 3. Create a Context Provider component
export default function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Value to be provided to consuming components
  const value = { state, dispatch };

  return (
    <CounterContext.Provider value={value}>
      {children}
    </CounterContext.Provider>
  );
}
