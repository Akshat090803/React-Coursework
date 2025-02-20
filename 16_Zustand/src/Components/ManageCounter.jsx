

import useCounter from "../Zustand Store/useCounter"
import { useRef } from "react"


export function ManageCounter(){
 const {handleIncrement,handleDecrement,handleAddByValue}=useCounter((state)=>state)


 const inPutRef=useRef()
  function handleAdd(){
    let value=Number(inPutRef.current.value);
    
    if (isNaN(value)) {
      alert('Please enter a valid number');
      return;
    }
    
    handleAddByValue(value);
    inPutRef.current.value="";

  }
  
 

  return(
    <>
   
   <div style={{display:"flex", flexDirection:"column", gap:"20px"}}>
   <button onClick={handleIncrement}>Increment Count</button>
   <button onClick={handleDecrement}>Decrement Count</button>

   <div style={{display:"flex", flexDirection:"column", gap:"20px"}}>
      <div>
      <label >Enter Value: </label>
      <input type="text" ref={inPutRef}  />
      </div>
     
      <button onClick={handleAdd}>Add</button>
    </div>
   </div>
    
    
    </>
  )
}