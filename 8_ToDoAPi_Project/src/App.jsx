
import { useEffect, useState } from 'react'
import './App.css'
import { ToDoItem } from './Components/ToDoItem';
import classes from './style.module.css'
import { ToDoDetail } from './Components/ToDoDetail';
import { Typography } from '@mui/material';





function App() {
  const [tasks,setTasks]=useState([]);
  const [loading,setLoading]=useState(false);
  const [err,setErr]=useState('')
  const [detail,setDetail]=useState('')
  const [open,setOpen]=useState(false)

  async function fetchTasks(){

    try {
      setLoading(true)
      const result=await fetch('https://dummyjson.com/todos')
    const data=await result.json()

     if(data?.todos){
      setTasks(data?.todos)
      setLoading(false)

     }
     else{
      setTasks([])
     }
    } catch (error) {
      setErr(error.message)
    }
    
   
  }

  async function fetchDetail(todoId){
      try {
        setLoading(true)
        const result=await fetch(`https://dummyjson.com/todos/${todoId}`)
        const data=await result.json()
        if(data){
          setOpen(true)
          setDetail(data)
          setLoading(false)
        }
        else{
          setOpen(false)
          setDetail('')
        }
      } catch (error) {
        setErr(error.message)
      }
      
  }

  useEffect(()=>{
    fetchTasks()
  },[])
  
  if(loading){
    return <Typography variant="h5" component="div">Loading...</Typography>
  }
   
  return (
    <>
    <h1>To Do Tasks..</h1>
     <div className={classes.container}>
      
       {
        tasks && tasks.length ? tasks.map((item)=>{
          return <ToDoItem item={item} fetchDetail={fetchDetail} key={item?.id}/>
        }) : <h2>{err}</h2>
       }
     </div>

     <ToDoDetail openDialog={open} setOpen={setOpen} detail={detail}/>
    
    </>
  )
}

export default App
