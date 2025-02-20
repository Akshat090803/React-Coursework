import { useState } from "react"

export function StateUpdate(){
   
  //using UseState to amnage count
  const [count,setCount]=useState(0); //count set To 0
  //Using usestate to manage text of input field
  const [text,setText]=useState("");

  //using useState to manage boolean value
  const[isToggle,setIsToggle]=useState(false);

  //using useState to manage obect
  const [user,setUser]=useState({
    name:"AKshat",
    age:20
  });
//using useState to manage array     
  const [items,setItems] = useState([1,2,3]);

  function incrementCount(){
    
    setCount(count+1);
    console.log("count: ",count) //see at last for the reason why different value on ui and in console
    //using callback
    // setCount((prevState)=>{
    //   return prevState+1
    // })
  }

  function updateText(event){
      //  const txt=(event.target.value).trim()
      setText(event.target.value)
     

  }

  const toggle = () => {
    setIsToggle(!isToggle);
  };

  const updateUserAge = () => {
    // Updating state objects requires creating a *new* object
    // and spreading the existing properties.  Direct mutation is a no-no!
    setUser({...user, age: user.age + 1});
    // or using a callback for the previous state:
    // setUser(prevUser => ({...prevUser, age: prevUser.age+1}))
  };

  const addItem = () => {
    setItems([...items, items.length + 1]); // Add a new item to the array.  Again, create a new array.
    // or using a callback for the previous state:
    // setItems(prevItems => [...prevItems, prevItems.length + 1]);
  }


  return (
    <>
         <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>

      <p>Text: {text}</p>
      <input type="text" value={text} onChange={updateText} />

      <p>Toggled: {isToggle ? "Yes" : "No"}</p>
      <button onClick={toggle}>Toggle</button>

      <p>User Name: {user.name}</p>
      <p>User Age: {user.age}</p>
      <button onClick={updateUserAge}>Increment User Age</button>

      <p>Items: {items.join(", ")}</p>
      <button onClick={addItem}>Add Item</button>

    </div>
    </>
  )
}



// !Key Points and Explanations:

// useState() Hook: The useState() hook is the fundamental way to add state to functional components in React.  It takes an initial value as an argument and returns an array containing two elements:

// The current state value.
// A function to update the state.
// Declaring State Variables:  You can declare multiple state variables using useState() as shown in the example: count, text, isToggled, user, and items.  Each one is independent.

// Updating State:  You must use the state updater function (e.g., setCount, setText, setIsToggled, setUser, setItems) to modify the state.  Directly changing the state variable (e.g., count = count + 1) will not cause a re-render and is highly discouraged.

// Immutability (Important for Objects and Arrays):  When updating state that is an object or an array, you must create a new object or array.  Do not modify the existing object or array directly.  The spread syntax (...) is essential for this:

// For objects: setUser({...user, age: user.age + 1}) (creates a new user object with the updated age).
// For arrays: setItems([...items, newItem]) (creates a new array with the added item).
// Functional Updates (Recommended for Complex State):  For more complex state updates, especially when the new state depends on the previous state, it's best practice to use a functional update.  This involves passing a function to the state updater.  React will then provide the most recent state value to your function:

// JavaScript

// setCount(prevCount => prevCount + 1);
// setUser(prevUser => ({...prevUser, age: prevUser.age + 1}));
// setItems(prevItems => [...prevItems, prevItems.length + 1]);
// This is particularly important when dealing with asynchronous operations or multiple updates in quick succession, as it helps prevent unexpected behavior.

// Initial State: The value you pass to useState() is the initial value of the state.

// Re-renders: When you update state using the state updater function, React automatically re-renders the component to reflect the changes in the UI.


//!why different value of count in console and in UI
// You're observing a difference between the count value displayed in the UI and the count value logged to the console immediately after setCount is called. This is a classic example of React's asynchronous state updates.

// Here's why this happens:

// setCount is Asynchronous:  setCount (and all state updater functions returned by useState) does not immediately update the state.  Instead, it schedules an update. React batches state updates for performance reasons.  This means that multiple state updates might be grouped together and applied in a single re-render.

// Console Logging Happens Before the Update:  Your console.log("count: ", count) statement executes before React has actually applied the state update and re-rendered the component.  So, the count value you're logging is still the previous state value.

// UI Updates After Re-render: The UI updates only after React performs the re-render.  This re-render is triggered by the scheduled state update.  It's during this re-render that the new state value is used to update the displayed count.

// How to See the Correct Value:

// Log Inside the Component (After the Re-render):  The most reliable way to see the updated state value is to log it inside the component, after the re-render has occurred.  You can use useEffect for this:

//?useEffect(() => {
//   console.log("Count in useEffect: ", count); // This will log the updated count
// }, [count]); // This effect runs whenever 'count' changes
