import { memo } from "react";

 function ChildComponent({ onIncrement }) {
  console.log("ChildComponent rendered"); // Only re-renders when onIncrement changes
  return (
    <button onClick={onIncrement}>Increment in Child</button>
  );
}

export default memo(ChildComponent);


//!Try running without memo than with memo .See differnece in console


// !why memo is necessary (even with useCallback):

// While useCallback prevents the function from being recreated, the ChildComponent will still re-render if the parent component re-renders for any reason (even if countOne hasn't changed).  This is because React's default behavior is to re-render children when the parent re-renders.

// memo provides that extra layer of optimization. It says, "Only re-render this component if the props have actually changed."  It works in conjunction with useCallback to achieve optimal performance.  useCallback makes sure the function prop doesn't change unnecessarily, and memo makes sure the child component doesn't re-render unnecessarily.


//!Previosuly if we not used memo here
//due to change in name , handleNameHcnage func rerenders pareent Component
//?As in Parent Handle INcrement func is in in call backback with dependency of count it will not recreated  
//But as parent is rendered (Even though handleIncrement not recreated , Child componenet will still re-render)
//?so to prevent re-render of child , we use memo also algon with useCallback which tells that only re-render the child prop when its prop changes



// Because incrementCountOne is memoized with useCallback, its reference never changes unless countOne changes.
// memo sees that the onIncrement prop (the function) is the same reference as before (thanks to useCallback). And count prop is only changing when it should.
// Therefore, memo prevents the ChildComponent from re-rendering unless either the count or onIncrement props have actually changed.