
import { Outlet } from 'react-router-dom'
import './App.css'


function App() {
  
  return (
    <>
     <div style={{display:"flex",justifyContent:"center",gap:"30px",alignItems:"center",height:"20px",backgroundColor:"grey",padding:"5px 10px",width:"100vw", position:"fixed", top:0, left:0}}>
      <span>Login</span>
      <span>Register</span>
      <span>Contact</span>
    </div>

    {<Outlet/>}
    </>
  )
}

export default App



// React Router DOM provides a set of powerful components and hooks for handling navigation in your React applications. Here's a breakdown of the key ones:

// Key Components:

// <RouterProvider router={router} />: This is the core component for routing in React Router v6.4 and later.  It takes a router instance (created with createBrowserRouter or createHashRouter) and makes the routing context available to your application.  It's the recommended way to set up routing.

// <Link to={path} />:  Creates a navigation link.  Clicking a <Link> component will update the URL and render the corresponding route without a full page reload.  Think of it like the <a> tag in HTML, but for single-page applications.

// <NavLink to={path} [className/style/isActive/etc.] />: Similar to <Link>, but provides extra functionality for styling or indicating the active link.  It's useful for highlighting the currently selected navigation item.  You can use className, style, or the isActive prop to customize the appearance of the active link.

// <Outlet />:  Used in parent route components to render nested routes.  When a child route is matched, its component will be rendered within the <Outlet> of the parent route.  This enables nested layouts and hierarchical navigation.

// <Navigate to={path} [replace={true}] />:  Performs a navigation redirect.  When <Navigate> is rendered, it will navigate the user to the specified path.  The replace prop (default false) determines whether the current entry in the history stack is replaced (like a redirect) or a new entry is added (like a push).

// Key Hooks:

// useNavigate(): Returns a function that you can use to navigate programmatically.  This is useful for navigating in response to user actions, form submissions, or other events.

// useParams(): Returns an object containing the URL parameters for the current route.  For example, if your route is /products/:id, useParams() will return an object like { id: '123' }.

// useLocation(): Returns the current location object.  This object contains information about the current URL, including the pathname, search, and hash.  Useful for accessing query parameters or reacting to URL changes.

// useMatch(path):  (Less commonly used directly)  Allows you to programmatically check if a given path matches the current URL. It returns a match object if there's a match, and null otherwise.  Often used internally by other hooks.

// useSearchParams():  Provides access to the query parameters in the URL.  It returns an array with two elements: the current search parameters object (like URLSearchParams) and a function to update the search parameters.



//!Lazy Loading ...........

// Lazy loading with React Router DOM is a crucial optimization technique to improve the initial load time of your application. It allows you to load components only when they are needed, rather than loading everything upfront. Here's how you can implement lazy loading using React Router DOM:

// Using React.lazy() and Suspense:

// This is the standard and recommended way to lazy load components in React, and it works perfectly with React Router DOM.

// JavaScript

// import React, { lazy, Suspense } from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// // Import components lazily
// const Home = lazy(() => import('./pages/Home'));
// const About = lazy(() => import('./pages/About'));
// const Product = lazy(() => import('./pages/Product')); // Example: lazy loading a product page

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: (
//       <Suspense fallback={<div>Loading...</div>}> {/* Display a loading indicator */}
//         <Home />
//       </Suspense>
//     ),
//   },
//   {
//     path: '/about',
//     element: (
//       <Suspense fallback={<div>Loading...</div>}>
//         <About />
//       </Suspense>
//     ),
//   },
//     {
//     path: '/products/:id', // Example: Route with a parameter
//     element: (
//       <Suspense fallback={<div>Loading product details...</div>}>
//         <Product />
//       </Suspense>
//     ),
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;

// Explanation:

// React.lazy(): This function takes a function that dynamically imports the component.  The dynamic import (import('./pages/Home')) returns a Promise that resolves to the component.  Crucially, the component is only loaded when it's actually needed (i.e., when the route is matched).

// Suspense:  The Suspense component is essential for handling the asynchronous loading of the lazy-loaded component.  It takes a fallback prop, which is a React element to display while the component is loading.  This provides a better user experience by showing a loading indicator instead of a blank screen.

// Dynamic Imports: The import('./pages/Home') syntax is a dynamic import.  It's what enables code splitting and lazy loading.  Webpack (or similar bundlers) will treat these imports specially, creating separate chunks for each lazy-loaded component.

// Route Definitions:  You define your routes as usual, but now the element prop will wrap the lazy-loaded component within Suspense.

// Key Improvements and Best Practices:

// Clearer Loading States: The fallback prop of Suspense allows you to customize the loading indicator.  You can use a simple message, a spinner, or a more sophisticated loading animation.

// Code Splitting: Dynamic imports automatically handle code splitting, which is a major performance benefit.  Each lazy-loaded component will be in its own chunk, reducing the size of the initial JavaScript bundle.

// Error Boundaries (Optional):  For more robust error handling, you can wrap your Suspense components with an Error Boundary.  This will prevent the entire application from crashing if a lazy-loaded component fails to load.

// Named Exports:  It's generally recommended to use named exports for your components when lazy loading.  This can sometimes improve tree shaking (removing unused code) and reduce bundle sizes further.  For example: export const Home = () => { ... } instead of export default Home;.

// Example with Nested Routes:

// Lazy loading also works seamlessly with nested routes:

// JavaScript

// const Dashboard = lazy(() => import('./pages/Dashboard'));
// const Settings = lazy(() => import('./pages/Settings'));

// // ... inside your routes array:
// {
//   path: '/dashboard',
//   element: (
//     <Suspense fallback={<div>Loading Dashboard...</div>}>
//       <Dashboard />
//     </Suspense>
//   ),
//   children: [
//     {
//       path: 'settings',
//       element: (
//         <Suspense fallback={<div>Loading Settings...</div>}>
//           <Settings />
//         </Suspense>
//       ),
//     },
//   ],
// },
// By using React.lazy() and Suspense with React Router DOM, you can significantly improve the performance of your application by loading components on demand, resulting in faster initial load times and a better user experience.  This is a best practice for modern React development.