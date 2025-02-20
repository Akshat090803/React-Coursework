import { useReducer } from "react"

const initialState={
  count:0
}

function reducer(state,action){
    
  switch(action.type) {
    case 'increment':
      return {count:state.count+1}
    case 'decrement' :
      return {count : state.count-1}
    case 'reset' :
      return {count:0}
    case 'inc_payload':
      return {count:state.count+action.payload.value}
    default:
      return state

  }
}
export function UseReducerHook(){

  const [state,dispatch]=useReducer(reducer,initialState);

  return (
    <div>
    <p>{`Count: ${state.count}`}</p>
    <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
    <br/>
    <br/>
    <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    <br/>
    <br/>
    <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    <br/>
    <br/>
    <button onClick={() => dispatch({ type: 'inc_payload' ,payload:{value:10} })}>INC_by_Payload</button>
  </div>
  )
}




//!Use Reducer HOOK

//? useReducer is a React Hook that's used for managing and updating complex state logic within functional components. It's an alternative to useState, 
//? and it's particularly useful when you have state that involves:
// Multiple sub-values: When your state is an object with several properties, and changes to one property might affect others.
// Complex state transitions: When the next state depends on the previous state in a non-trivial way, or when you have many different actions that can affect the state.
// Related state updates: When multiple pieces of state need to be updated together consistently.
// Here's a breakdown of how useReducer works and why you might choose it over useState:

//! How useReducer Works:
// Reducer Function:  The core of useReducer is the reducer function.  This function takes two arguments:
//? state: The current state.
// ?action: An object describing the change you want to make to the state. Actions typically have a type property (a string) that identifies the kind of update to perform, and may also include other data (like the new value) in a payload property.
//! The reducer function must be pure.  This means it should:
// Always return a new state object (never modify the existing state directly).
// Be deterministic (given the same state and action, it always returns the same new state).
// Not have any side effects (no network requests, logging, etc.).
// useReducer Hook: You call useReducer in your functional component like this:

// JavaScript
//? const [state, dispatch] = useReducer(reducer, initialArg);
// reducer: The reducer function you defined.
// initialArg: The initial value of your state. This can be any data type. If the initial state is complex, it's often a good practice to initialize it as an object.
// state: The current state value. React will update this value whenever you dispatch an action.
// dispatch: A function you use to trigger state updates. You pass an action object to dispatch.
// Dispatching Actions:  To update the state, you call the dispatch function, passing it an action object.  React then calls your reducer function with the current state and the action you dispatched. The reducer returns the new state, and React updates the component.




// !Why Use useReducer?
// Improved State Management: useReducer makes complex state logic easier to manage and reason about, especially as your component grows.
// Centralized Logic: The reducer function centralizes the logic for updating the state, making it more organized and maintainable.
// Predictable State Updates: Because the reducer is a pure function, state updates are predictable and easier to debug.
// Complex State Transitions: useReducer handles complex state transitions more elegantly than useState, especially when the new state depends on the previous state.
// Performance Optimization (Sometimes): In some specific scenarios, especially with deep state updates, useReducer can offer performance benefits by preventing unnecessary re-renders. However, useState is often sufficient and performant for most cases.

// !When to Use useReducer:

// State logic is complex, involving multiple sub-values or intricate update logic.
// You have many related state updates that need to happen together.
// You want to improve the organization and maintainability of your component's state management.

//! When to Use useState:
// State logic is relatively simple.
// You only have a few independent state variables.
// You don't need the centralized logic of a reducer.

//? In summary, useReducer is a powerful tool for managing complex state in React components. It promotes cleaner, more predictable state updates and is particularly beneficial when dealing with intricate state logic.  However, for simpler state management, useState is often sufficient.  Choose the hook that best suits the complexity of your state

//!----------------------------------------------------------------------------------------------------
//?------------------------------------------------------------------------------------------------------


//!We can use UseReducer with Context Api for global State management , for complex states
//insetad of suing useStae in conetxt api we can use useReduceer there


// Using useReducer with the Context API is a powerful way to manage complex, global state in your React applications.  It allows you to centralize your state logic and make it accessible to any component within your application without prop drilling.

// Here's how you can combine useReducer and the Context API:

//! see ContextStore folder to see how we can do so
