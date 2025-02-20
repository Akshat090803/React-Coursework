import { useContext } from "react"
import { MyContext } from "../context Store/contextApi"

export function Count (){
    
  const {updateCount,count}=useContext(MyContext) //using count from context api

  return (
    <>
    <p>{`Count : ${count}`}</p>
    <button onClick={updateCount}>Increase Count</button>
    </>
  )
}