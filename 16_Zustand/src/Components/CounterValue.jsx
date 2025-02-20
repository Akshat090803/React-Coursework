import useCounter from "../Zustand Store/useCounter";


export function ShowCounterValue(){
 
const {count}=useCounter((state)=>state)
// const {count}=useCounter((state)=>state) //?this is also correct


  return(
    <>
  
      <p>{`Counter : ${count}`}</p>
     
    </>
  )
}