import  { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

function Debouncing() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [debouncedValue, setDebouncedValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputValue = watch("username");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue]);

  useEffect(() => {
    if (debouncedValue) {
      setIsLoading(true);
      console.log("Debounced value:", debouncedValue);

      // Example API call (replace with your actual API endpoint)
      fetch('/api/check-username?username=' + debouncedValue)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok'); // Handle errors
          }
          return response.json(); // Or response.text() if it's not JSON
        })
        .then(data => {
          // Process the response data (e.g., set form errors)
          console.log("API response:", data);
          // Example: if the API returns { available: false }, set an error
          if (!data.available) {
             // You would typically use setError from react-hook-form to set the error
             // but I am not including that to keep the focus on debouncing
             console.error("Username is not available")
          }
        })
        .catch(error => {
          console.error("API error:", error);
          // Handle errors, e.g., display an error message
        })
        .finally(() => setIsLoading(false));
    }
  }, [debouncedValue]);

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">Username</label>
      <input id="username" {...register("username", { required: "Username is required" })} />
      {errors.username && <p>{errors.username.message}</p>}
      {isLoading && <p>Checking username...</p>} {/* Display loading message */}

      <button type="submit">Submit</button>
    </form>
  );
}

export default Debouncing;


// Explanation:

// watch(): The watch function from useForm allows you to track the value of a specific field. Here, we're watching the "username" field.

// useState for Debounced Value: The debouncedValue state variable will hold the debounced value of the input.

// useEffect for Debouncing:

// The first useEffect hook is responsible for implementing the debouncing logic.
// setTimeout is used to create a delay. If the input changes before the timeout completes, clearTimeout is called to clear the previous timer, effectively resetting the debounce.
// After the delay, setDebouncedValue is called with the current inputValue.
// useEffect for Action:

// The second useEffect hook is triggered whenever debouncedValue changes. This is where you'll perform your actions that should be debounced (API calls, validation, etc.). You can use debouncedValue to make API calls, validate against a database, etc.
// Key Improvements and Best Practices:

// Clear Timeout: Clearing the timeout with clearTimeout is crucial. It ensures that only the last input triggers the action.
// watch hook: Using the watch hook gives you the current value of the field being watched.
// Separate useEffect Hooks: Using separate useEffect hooks for debouncing and the action makes the code cleaner and easier to understand.
// Adjust Delay: The 500ms delay can be adjusted as needed.
// Error Handling: Don't forget to handle potential errors in your API calls or validation logic.
// Loading State: Consider using a loading state while the debounced action is in progress to provide feedback to the user.