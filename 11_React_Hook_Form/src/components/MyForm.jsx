import { useForm } from "react-hook-form";

function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Log the form data, including the file
    if (data.file) {
      // Check if a file was selected
      console.log("File details:", data.file[0]); //Log file info
      const reader = new FileReader();
      reader.onload = (e) => {
        // The file's text content will be available here
        console.log("File content:", e.target.result);
      };
      reader.readAsText(data.file[0]); // Or readAsDataURL, readAsBinaryString, etc.
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        alignItems: "center",
      }}
    >
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          {...register("firstName", { required: "First name is required" })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" {...register("lastName")} />
      </div>

{/* custom validation for email field see */}
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <div>
        <label htmlFor="file">File Upload</label>
        <input type="file" id="file" name="file" {...register("file")} />{" "}
        {/* Register the file input */}
        {errors.file && <p>{errors.file.message}</p>}{" "}
        {/* Display file-related errors, if any */}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;

//!React Form HOOK
//? React Hook Form is a popular library for form management in React applications. It simplifies form handling by providing a declarative way to manage form state, validation, and submission.  It's known for its performance, ease of use, and flexibility.

// Here's a breakdown of its key features and how to use it:

// !Key Features:

// Simplified State Management: React Hook Form manages the form state for you, so you don't have to manually handle input changes.
// Declarative Validation: Define validation rules directly in your form components, making your code cleaner and easier to understand.
// Performance: Optimized for performance, minimizing re-renders and improving form responsiveness.
// Easy Integration: Works well with other UI libraries and components.
// Customizable: Highly customizable to fit your specific needs.

//!Usage
// useForm(): This hook is the core of React Hook Form. It returns several important properties:

// register: A function used to register your input fields. You spread the result of this function onto your input elements.
// handleSubmit: A function that you wrap your form's onSubmit handler with. It handles form submission and validation.
// formState: An object containing information about the form's state, including errors. errors is a key property within formState.
// register():  This function connects your input fields to React Hook Form.  You call it with the input's name (which will be used as the key in the form data) and an optional validation object.  The spread operator (...) spreads the necessary props onto the input element (like onChange, onBlur, name, ref).

// handleSubmit(): This function takes your form submission handler as an argument.  It will validate the form, and if valid, it will call your handler with the form data as an object.

// errors:  The errors object contains any validation errors.  You can use it to display error messages to the user.  The keys of the errors object correspond to the names of your input fields.

// !Advanced Usage:

// Validation Rules: You can define a wide range of validation rules, including required, minLength, maxLength, pattern, and custom validation functions.

// Controlled Inputs: React Hook Form works seamlessly with controlled inputs.

// Asynchronous Validation: You can perform asynchronous validation, such as checking if a username is already taken.

// Custom Components:  You can use React Hook Form with custom input components.

// Form Methods:  The useForm hook also provides other useful methods, such as setValue, getValues, reset, clearErrors, and more, for more advanced form manipulation.

// Controller Component: For integrating with UI libraries that provide their own input components, the Controller component is very helpful.  It bridges the gap between the library's input and React Hook Form.

// !Benefits of Using React Hook Form:

// Reduced Boilerplate: Less code for managing form state and validation.
// Improved Performance: Optimized for re-renders.
// Better User Experience: Easy to implement validation and provide helpful error messages.
// Cleaner Code: More declarative and maintainable form code.

//!File input

// Key Changes and Explanations:

// File Input: The <input type="file" id="file" {...register("file")} /> line is the most important addition.  Notice how the register function is used with the name "file". This is how React Hook Form manages the file input.

// Accessing the File: In the onSubmit function, the data object will now contain a file property.  Because the user can potentially select multiple files, this data.file will be a FileList object (even if only one file is selected).   data.file[0] gives you the first file in the list (if one exists).

// File Information: data.file[0]  will give you a File object.  This object has properties like name, size, type, etc., which you can use to display information about the selected file.

// Reading File Contents (Optional): The code now includes an example of how to read the content of the selected file using the FileReader API.  This is important if you need to process the file's data (e.g., parsing a CSV file, displaying an image preview, etc.).  The FileReader has methods like readAsText, readAsDataURL, readAsBinaryString, etc., depending on what type of file you're expecting.

// Displaying File Errors:  If you want to validate the file input (e.g., check file type, size, etc.), you can add validation rules to the register call for the file input and then display the errors using errors.file.  However, client-side file validation is easily bypassed, so always validate on the server as well.

//! Important Considerations for File Uploads:

// Server-Side Handling: The code above only handles the client-side part. You must have server-side code to actually process the uploaded file (saving it to storage, database, etc.). React Hook Form only helps you manage the file selection on the client-side.
//? Form Data: When you submit the form with a file input, you'll typically need to use FormData to send the file to the server. Here's how you would modify the onSubmit function:

//!For submitting the form with file input to server use form data
// const onSubmit = (data) => {
//   const formData = new FormData();
//   formData.append('firstName', data.firstName); // Add other form fields
//   formData.append('lastName', data.lastName);
//   if (data.file && data.file[0]) {
//     formData.append('file', data.file[0]); // Append the file
//   }

//   fetch('/your-upload-endpoint', { // Replace with your server endpoint
//     method: 'POST',
//     body: formData, // Send FormData
//   })
//   .then(response => { /* ... handle response ... */ })
//   .catch(error => { /* ... handle error ... */ });
// };
