import { createContext, useState } from "react";



export const MyContext=createContext({
  //this is wriiten only so that we can get suggestion when use useConetxt in compoenents
  //else we can do like this also const MyContext=createContext(null)
  count:0,
  toggleTheme() {},
  updateCount(){},
  theme:'light'

})

export default function MyContextState({children}){
   
  const [count,setCount]=useState(0)
  function updateCount(){
    setCount(count+1)
  }

  const [theme,setTheme]=useState('light')

  function toggleTheme() {
    let newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  
    if (newTheme === 'light') {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    }
  }
  
  return <MyContext.Provider value={{count ,updateCount ,theme , toggleTheme}}>
    {children}
  </MyContext.Provider>
}



// ?The Context API in React is a powerful way to manage and share data across your component tree without the need for prop drilling.  Let's break down why it's useful and how it works.

//! The Problem: Prop Drilling
// Imagine you have a deeply nested component structure:

// App
//   -> Parent
//     -> Child
//       -> Grandchild
// If you need to pass data from App all the way down to Grandchild, you have to pass it through Parent and Child even if those components don't actually use the data. This is called "prop drilling," and it can become messy and difficult to maintain as your application grows.

// The Solution: Context API

// The Context API provides a way to create a "context" that holds data.  Any component within the context's scope can then access that data directly, without needing to receive it through props.

// How Context API Works

// Creating a Context:

// JavaScript

// import React, { createContext } from 'react';

// const MyContext = createContext(defaultValue); // defaultValue is optional
// createContext() creates a new context object.  The defaultValue is what components will receive if they try to access the context before a provider is set up.

// Providing the Context:

// JavaScript

// function App() {
//   const value = { /* data you want to share */ };

//   return (
//     <MyContext.Provider value={value}>
//       {/* Your component tree */}
//       <Parent />
//     </MyContext.Provider>
//   );
// }
// The MyContext.Provider component makes the context's value available to all components within its tree.  The value prop is what you want to share.

// Consuming the Context:

// There are two main ways to consume context:

// useContext Hook (Recommended):

// JavaScript

// import { useContext } from 'react';

// function Grandchild() {
//   const contextValue = useContext(MyContext); // Access the context value

//   return (
//     <div>
//       {/* Use the context value */}
//       {contextValue.someData}
//     </div>
//   );
// }
// The useContext hook makes it easy to access the context's value.  You pass it the context object (MyContext), and it returns the current value.

// Consumer Component (Less common now):