import { useRef } from "react"
import { useDispatch } from "react-redux"

function Control(){
  let inputElement=useRef()
  const dispatch=useDispatch()
   const handleIncrement=()=>{
    dispatch({type:'INCREMENT'})
   }
   const handleDecrement=()=>{
    dispatch({type:'DECREMENT'})
   }
   
   const handlePrivacy=()=>{
    dispatch({
      type:"PRIVATE"
    })

   }

   const handleEvent=(e)=>{
    if (e.target.classList.contains('increment')){
      handleIncrement()
      
    }
    else if(e.target.classList.contains('decrement')){
      handleDecrement()
      
    }
    else if(e.target.classList.contains('privacy')){
      
      handlePrivacy()
      
    }
  
   }

   const handleAdd=()=>{
    dispatch({
      type:"ADD",
      payload:{
        number:inputElement.current.value
      }
    })
   
    inputElement.current.value=""
   }
   const handleSub=()=>{
    dispatch({
      type:"SUB",
      payload:{
        number:inputElement.current.value
      }
    })
    inputElement.current.value=""
   }



  return(
   <>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center" onClick={handleEvent}>
    <button type="button" className="btn btn-primary btn-lg px-4 gap-3 increment" fdprocessedid="ni73f4">+1</button>
    
    <button type="button" className="btn btn-success btn-lg px-4 gap-3 decrement">-1</button>
    <button type="button" className="btn btn-warning privacy">Privacy Toggle</button>
  </div>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center second" >
     <input type="text" className="input" placeholder="enter" ref={inputElement}/>
    <button type="button" className="btn btn-info" onClick={handleAdd}>Add</button>
    <button type="button" className="btn btn-danger" onClick={handleSub}>Subtract</button>
  </div>
   </>
  )
}
export default Control