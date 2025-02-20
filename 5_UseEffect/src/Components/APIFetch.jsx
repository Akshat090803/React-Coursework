import { useEffect, useState } from "react"

export function APIFetch(){

     const [quotes,setQuotes] =useState([])
     const [isPending,setIsPending]=useState(false)

     async function fetchQuotes(){
           try {
            setIsPending(true)
            const res = await fetch("https://dummyjson.com/quotes")
            const data=await res.json();
            console.log(data.quotes)
            if(data?.quotes){
              setQuotes(data?.quotes)
            }

           } catch (error) {
             console.log(error)
           }
           finally{
             setIsPending(false)
           }
     }

     //!calling api on page load
     useEffect(()=>{
           fetchQuotes()
     },[])

     if(isPending) {
      return <h1>Fetching...</h1>
     }

  return (
    <>
    <h1>Quotes List</h1>
     <ul>
      {
        (quotes && quotes.length) ? quotes.map((item)=>{
          return <li key={item?.id}>
            <div style={{position:"relative", border:"1px solid red" , padding:"20px", marginBottom:"20px",}}>
              <p >{item?.quote}</p>
              <span style={{position:"absolute", left:"90%", bottom:"10%",margin:"0px 10px"}}>~ {item?.author}</span>
            </div>
          </li>
        }) : <h2>No quotes to show</h2>
      } 
     </ul>
    </>
  )
}