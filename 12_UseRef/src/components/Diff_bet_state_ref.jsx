import { useRef } from "react";
import { useState } from "react";

export function Difference_between_useRef_and_State(){
  const [count,setCount]=useState(0)
  const countRef=useRef(0)


  function handleRef(){
    countRef.current++;
    console.log("ref: ",countRef.current)
  }

  function handleState(){
    setCount(count+1);
    console.log("count: ",count)
  }

  return(
    <>
     <div>
     <button onClick={handleRef}>Update Ref Value</button>
     <p >{`Ref: ${countRef?.current}`}</p>
     </div>

     <div>
     <button onClick={handleState}>Update State Value</button>
     <p >{`State: ${count}`}</p>
     </div>
    </>
  )
}


//!Difference
// You've created a classic example to illustrate the difference between useState and useRef in React. Let's break down why you're seeing the output you're seeing and how these hooks behave:

// !Understanding the Behavior:

// useState(0):

//? useState is used for managing reactive state. When you call setCount(count + 1), React re-renders the component. This is because useState notifies React that the state has changed, and React schedules an update.
// The count variable will hold the latest state value after the re-render.
// useRef(0):

//? useRef creates a mutable object whose .current property is initialized with the value you provide (0 in this case). It's used for storing values that persist across renders without causing re-renders.
// useRef is often used for things like:
// Storing a reference to a DOM element (e.g., for focusing an input).
// Storing values that you want to keep track of but don't want to trigger re-renders (like a timer ID, or in your case, a counter that you want to track independently of the UI).
// Inside handle():

// countRef.current++: This directly modifies the value of countRef.current. Because useRef doesn't trigger re-renders, the UI won't update immediately to reflect this change.
// setCount(count + 1): This updates the count state, which does cause a re-render.
// console.log("count: ", count): This is the crucial part. Inside the handle function, before the re-render happens, count will still have its old value. The re-render hasn't occurred yet, so the closure inside handle is still working with the previous count value.
// console.log("ref: ", countRef.current): This will show the updated value of countRef.current because you directly modified it.


//? Example Walkthrough (First Click of Each Button):

// "Update Ref Value" Button:

// countRef.current becomes 1.
// console.log("ref: ", countRef.current) logs "ref: 1".
// The UI does not update.
// "Update State Value" Button:

// setCount(0 + 1) is called (but the re-render hasn't happened yet).
// console.log("count: ", count) logs "count: 0" (the old value).
// React re-renders the component.
// After the re-render, the UI shows "State: 1".

//! Why the Discrepancy?

// The difference in behavior comes down to how these hooks interact with React's rendering cycle:

// useRef:  Changes to countRef.current are immediate and do not trigger re-renders.  The UI won't update unless something else causes a re-render.

// useState:  Changes to count via setCount are queued and trigger a re-render.  The UI updates after the re-render. The value of count inside the event handler will be the value from before the re-render has taken place.


// !Key Difference:

// The key difference is that useState triggers re-renders, and the updated value is available after the re-render.  useRef does not trigger re-renders, and the value is updated immediately, but the UI won't reflect the change until the next re-render (which might be caused by something else, like a useState update).

// How to Use useRef Correctly for Tracking Values:

// If you want to use useRef to track how many times the button has been clicked without displaying that count in the UI, then your current code is exactly correct.  countRef.current will accurately track the click count.

