import { useEffect, useState } from "react";

export function UseEffectHook() {
  const [changeColor, setChangeColor] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);

  function handleClick() {
    setToggle(!toggle);
  }

  function handleCount() {
    setCount(count + 1);
  }

  //useEffect
  //?when page load , it will set toggle
  //!It wis working like component DidMount . See classCompanet foleder to see same with classComponent
  useEffect(() => {
    console.log("PAge loaded for once");
    setToggle(true);
  }, []);

  //!UseEffct with dependnecy arr
  //?act as compinentDidUpdate
  useEffect(() => {
    if (count >= 10) setChangeColor(prev=>{
      return !prev
    });

    document.title = `Count: ${count}`;

    //cleanup func
    return () => {
      console.log(`Component unmounted or count about to change: ${count}`);
    };
  }, [count]);


  return (
    <>
      <div>
        <p style={{ color: changeColor ? "red" : "white" }}>{`${
          toggle ? "Hello my name is Akshat. My Roll No is 22/486" : ""
        }`}</p>
        <button
          onClick={handleClick}
          style={{ display: "inline-block", margin: "12px" }}
        >{`${toggle ? "Hide Text" : "Show Text"}`}</button>
        <button onClick={handleCount}>Click</button>
        <p>{`Count : ${count} `}</p>
      </div>
    </>
  );
}

//!Use Effect is similar to class componentDidMount, componentDidUpdate , componentWillUnmount
// useffect with emty dependency arr [] is  componentDidMount
//useEffect with dependency arr fillled [dep1, dep2] is componentDidUpdate
//useEffcet with cleanup func is componentWillUnmount

//? The useEffect Hook in React is your go-to tool for managing side effects within functional components.  Let's break down what that means and how it works:

// !What are Side Effects?

// In React, a "side effect" is anything that interacts with something outside of the component's core rendering logic.  Think of it as the component reaching out and touching the real world (or the browser).  //?Common examples include:

// Fetching data: Making an API call to get information from a server.
// DOM manipulations: Directly changing the HTML structure of the page (though often less necessary with React's declarative approach).
// Setting up subscriptions: Listening for events, like a timer or a WebSocket connection.
// Logging: While often used for debugging, logging can be considered a side effect as it interacts with the console.

//? Why useEffect?
// useEffect provides a way to perform these side effects in a predictable and manageable way within your functional components.  It's the equivalent of componentDidMount, componentDidUpdate, and componentWillUnmount from class components, but combined into a single, more flexible hook.

//! How useEffect Works

// The basic structure of useEffect looks like this:

// JavaScript

// useEffect(() => {
////sideEffect code
// }, [dependencies]);
// The Function: The first argument is a function. This is where you put the code that performs your side effect.

// The Dependency Array (Optional): The second argument is an optional array of dependencies.  This array is crucial for controlling when the effect runs.

//? Empty Dependency Array []: If you provide an empty array, the effect will run only once after the initial render, similar to componentDidMount.  This is often used for things like fetching data when the component first loads.

// ?Dependency Array with Values: If you include values in the array, the effect will run:
// After the initial render.
// Every time any of the values in the dependency array change.

//? No Dependency Array: If you omit the dependency array entirely, the effect will run after every render.  This can be useful in some situations but can also lead to performance issues if not used carefully.

// !Cleanup Function

// useEffect can also return a cleanup function.  This function is essential for undoing or cleaning up your side effect.  For example:

// JavaScript

// useEffect(() => {
//   const timer = setTimeout(() => {
//     // Do something
//   }, 1000);

//   return () => {
//     clearTimeout(timer); // Clear the timer when the component unmounts or the dependencies change
//   };
// }, [/* dependencies */]);

//? The cleanup function will run:
// Before the effect runs again (if the dependencies change).
// When the component unmounts.
// This prevents memory leaks and ensures that your side effects are properly managed.
