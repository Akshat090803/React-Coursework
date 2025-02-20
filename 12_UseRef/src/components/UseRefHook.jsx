import { useEffect, useRef } from "react";

export function UseRefHook(){

  const inputRef = useRef(null);


  useEffect(() => {
    // Access the DOM element using inputRef.current
    if (inputRef.current) {
      console.log('Input element:', inputRef.current);   //inputRef.current will have this <input type="text" ref={inputRef} defaultValue="Initial Value" />

      // Example: Focus the input element
      inputRef.current.focus();

      // Example: Get the value of the input element
      console.log('Input value:', inputRef.current.value);


      // Example: Change the background color
      inputRef.current.style.backgroundColor = 'red';
      

    }
  }, []); // Empty dependency array ensures this runs only once after the component mounts





    const handleClick = () => {
        if(inputRef.current){
          
            console.log("Button clicked. Input Value: ", inputRef.current.value);
            // You can perform other actions with the ref here
        }
    }

 

  return (
    <div>
      <input type="text" ref={inputRef} defaultValue="Initial Value" />
      <br />
      <br />
      <button onClick={handleClick}>Get Input Value</button>
       
       <br />
       <br />
     
    </div>
  ); 
  
  
}




//! The useRef hook in React is a powerful tool primarily used for two main purposes:

// Accessing DOM elements directly:  This is its most common use case.  useRef lets you get a direct reference to a DOM element (like an input, a div, or any other HTML element) and manipulate it. This is useful for things like:

// Focusing an input field programmatically.
// Getting the dimensions or position of an element.
// Directly manipulating the styles of an element.
// Triggering animations or interacting with third-party libraries that require direct DOM access.
// Storing mutable values that don't trigger re-renders:  useRef can also be used to store any mutable value that you want to persist across renders without causing the component to re-render.  This is different from state, where changing the state does trigger a re-render.  This is useful for things like:

// Storing a previous value of a prop.
// Storing a timer ID.
// Keeping track of a counter without re-rendering the component.
// How useRef works:

// Creating a ref: You create a ref object using useRef(initialValue).  The initialValue is the initial value of the ref.  It can be anything: null, a number, a string, an object, etc.

// Attaching the ref to a DOM element: You attach the ref to a DOM element using the ref prop.  For example: <input type="text" ref={myRef} />.  React will then automatically assign the DOM element to the current property of the ref object.

// Accessing the DOM element or value: You access the DOM element or the stored value using myRef.current.