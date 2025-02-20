import {create} from 'zustand';


const useCounter=create((set)=>{

  return {
    count:0,
    fsxd:0,

    handleIncrement:()=> set((state)=>{
      return {count:state.count+1}
    }),

    handleDecrement:()=>set((state)=>({count:state.count-1})),

    // !Imp see below for explanation
    handleDecrementFsxd: () => set({ fsxd: 23 }),

    //? set does shallow merges that why doing this will will not erase other property like count etc 
    //count and other func still exist if we do like this

    handleDecrementFsxd2: () => set((state) => ({ ...state, fsxd: 23 })),
    //!But this is prefferred as if there are nested objects  above way will not perform as intended

    handleAddByValue:(value)=>set((state)=>{
      return {count:state.count+value};
    })

  }
})

export default useCounter


//!We can also make a function for api call in useCounter and call it in app.jsx or any other component inside useEffect

// You're absolutely correct to point that out!  My previous explanation was slightly oversimplified and missed a crucial detail about how Zustand's set works.

// Even when you use set({ fsxd: 23 }) without the spread syntax, count and the other functions will still persist.  This is because Zustand, by default, shallow merges the new state object you provide with the current state.

// Here's a breakdown of what's happening:

// Initial State: Your initial state is:

// JavaScript

// {
//   count: 0,
//   fsxd: 0,
//   handleIncrement: ...,
//   handleDecrement: ...,
//   handleAddByValue: ...
// }
// handleDecrement: When you call handleDecrement, you're providing a new state object:

// JavaScript

// {
//   fsxd: 23
// }
// Zustand's Shallow Merge: Zustand performs a shallow merge. This means it copies the properties from the new state object ({ fsxd: 23 }) into the current state.  Crucially, if a property already exists in the current state but is not present in the new state object, it is not removed.

// Because count, handleIncrement, and handleAddByValue are not in the new state object, they are simply kept in the state. Only fsxd is updated.

// Why the spread syntax is still preferred (and generally necessary for more complex states):

// While your example works, it's a bit of a special case.  The shallow merge behavior is convenient here, but it can become problematic when you have more complex state structures, especially nested objects or arrays.

// Nested Objects: If your state had nested objects, a shallow merge would only copy the reference to the nested object, not the object itself.  This could lead to unintended mutations if you modify the nested object later.

// Arrays:  Similar to nested objects, a shallow merge with arrays could lead to issues.

// The spread syntax (...state) is essential for correctly updating nested objects and arrays:

// JavaScript

// handleDecrement: () => set((state) => ({ ...state, fsxd: 23 })),
// This ensures that you're creating a new object for the entire state, including any nested objects or arrays.  Modifications to this new object won't affect the original state, preserving immutability.

// In summary:

// Zustand's set performs a shallow merge by default. This is why count and other functions persist even when you don't use the spread syntax.
// While your specific example works, it is highly recommended to use the spread syntax (...state) when updating state, especially for nested objects or arrays, to ensure proper immutability and prevent unintended mutations. It is the standard and best practice for Zustand.