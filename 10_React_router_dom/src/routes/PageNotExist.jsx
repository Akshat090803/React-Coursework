import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function PageNotexist(){
  
  const [time,setTime]=useState(10);
  const navigate=useNavigate()
  useEffect(() => {
    let intervalId; // Store the interval ID

    intervalId = setInterval(() => {
      setTime((prevTime) => prevTime - 1); // Use functional update
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalId); // Clear the interval
      navigate('/');
    }, 10000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []); //
  return(
    <div>
      <p>Page Not Exist 🐣</p>
      <button><Link to={'/'}>Click to Redirect to Home</Link></button>    
      <p>{`Automatically redirectly to home in ${time} ...`}</p>  
    </div>
  )
}