import { useContext, useEffect } from "react"
import { MyContext } from "../context Store/contextApi"

export function Theme(){
  const {theme,toggleTheme}=useContext(MyContext)

  
  useEffect(()=>{
    toggleTheme()
},[])
   
  return (
    <>
    <p>{`Current Theme : ${theme}`}</p>
    <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  )
}