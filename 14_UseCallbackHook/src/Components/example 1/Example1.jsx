//? The useCallback hook in React is a performance optimization tool specifically designed for memoizing functions.  It's very similar in concept to useMemo, but instead of memoizing the result of a calculation, it memoizes the function itself.  This is crucial when you're passing functions as props to child components.

// Why Memoize Functions?

// In React, functions are also objects.  If you define a function directly within a component (e.g., const handleClick = () => { ... };), a new function is created every time the component re-renders.  Even if the logic inside the function is the same, React sees it as a new object, which can cause unnecessary re-renders of child components that rely on that function prop.

// useCallback solves this problem by returning a memoized version of the function.  The memoized function will only change if one of its dependencies changes.  If the dependencies remain the same, useCallback will return the same function instance from the previous render, preventing child components from re-rendering unnecessarily.

// How useCallback Works:

// useCallback takes two arguments:

// A function: The function you want to memoize.
// A dependency array: An array of values that the function depends on.
// useCallback will only create a new function instance if one or more of the values in the dependency array have changed.  If the dependencies are the same, it returns the same function instance from the previous render.


import  { useState, useCallback } from 'react';
import ChildCom_1 from './ChildCom_1';


function MyComponent_1() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  ///!callaback
  const handleIncrement = useCallback(() => {
    console.log("Incrementing..."); // Only logs when count changes
    setCount(c => c + 1); // Correct way to update state based on previous state

  }, [count]); // Dependency array: only recreate the function when count changes

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
       
      <p>Name: {name}</p>
      <input type="text" value={name} onChange={handleNameChange} />

      <ChildCom_1 onIncrement={handleIncrement} /> {/* Passing the memoized function */}
      {/* in child comp we used memo which insure that childcomp will only re-render when its prop change */}
      {/* if we not used memo in childComp than evn though handleIncrement not changed , and we type something in Input handleNamechange will re-render parent , handleIncrement will not re-created bu child component still re-render;
      so to ensure childcomp  also only re-render  when handleIncrement chnages , we use memo in  hild which tells only re-render when prop changes */}
    </div>
  );
}



export default MyComponent_1;