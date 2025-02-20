// ?The useMemo hook in React is a performance optimization tool that helps you prevent unnecessary re-renders of components by memoizing (caching) the result of expensive calculations.  It's particularly useful when you have computations that are:

// Expensive: They take a significant amount of processing time.
// Deterministic: They produce the same output given the same input.
// Used in rendering: The results of these computations are used in the component's JSX, and changes to these results trigger re-renders.
// How useMemo Works:

// useMemo takes two arguments:

// A function: This function performs the expensive calculation.
// A dependency array: This array lists the values that the calculation depends on.
// useMemo will only re-run the calculation function if one or more of the values in the dependency array have changed since the last render. If the dependencies haven't changed, useMemo will return the cached (memoized) result from the previous calculation, preventing the expensive computation from being performed again.


import  { useMemo, useState } from 'react';

function UseMemoHook() {
  const [count, setCount] = useState(0);
  const [otherValue, setOtherValue] = useState('');

  const expensiveCalculation = useMemo(() => {
    console.log("Calculating..."); // This will only log when count changes

    // Simulate a very expensive calculation:
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += count;
    }
    return result;
  }, [count]); // Dependency array: only re-calculate when count changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <p>Other Value: {otherValue}</p>
      <input type="text" value={otherValue} onChange={e => setOtherValue(e.target.value)} />

      <p>Expensive Calculation Result: {expensiveCalculation}</p>

      {/* expensiveCalculation will excute only when count changes .if otherValue changes it will not exceute and return the previous value only */}
    </div>
  );
}

export default UseMemoHook;




// Explanation:

// expensiveCalculation: This variable stores the result of the useMemo call.

// useMemo(() => { ... }, [count]): The useMemo hook takes a function that performs the expensive calculation (simulated in the example) and a dependency array [count].

// Dependency Array: The dependency array [count] is crucial.  It tells useMemo that the calculation only depends on the count state variable.

// Memoization: When the component first renders, useMemo executes the calculation function and stores the result.  On subsequent renders:

// If the count value has changed, useMemo re-executes the calculation function and updates the stored result.
// If the count value has not changed, useMemo returns the cached result from the previous render, without re-executing the calculation function.
// otherValue State: The otherValue state and its input are there to demonstrate that changes to other state variables (that are not in the dependency array) do not cause the useMemo calculation to be re-run.  This is the key benefit of useMemo – it prevents unnecessary re-calculations.

// When to use useMemo:

// Expensive calculations: When you have computationally intensive operations.
// Referential equality: When you're passing props to child components and you want to prevent re-renders of those child components unless the props have actually changed (using useMemo can help maintain referential equality of calculated values).
// Memoizing functions (less common): While useCallback is usually better for memoizing functions, useMemo can also be used if the function's return value is a result of an expensive calculation.
// When not to use useMemo:

// Trivial calculations: For simple calculations, the overhead of useMemo itself might outweigh the performance benefits. Don't overuse it.
// Non-deterministic calculations: If your calculation function produces different results given the same input (e.g., it uses Math.random() or the current time), useMemo will not work correctly.
// Key takeaway: useMemo is a valuable tool for optimizing React component performance by caching the results of expensive, deterministic calculations.  Use it judiciously and only when necessary to avoid unnecessary re-renders.  Pay close attention to the dependency array to ensure correct memoization.