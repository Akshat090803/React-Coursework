import { useState } from "react"


export function Forms (){

  //?way 1 create seperate seperate useState for input and email and respective onchange function for them

  //!for name

  const [nameValue,setNameValue]=useState('');
  function nameChangeHandler(event){
    // console.log(event)

    setNameValue(event.target.value);
    // const {value}=event.target;
    // setNameValue(value)
  }

  //!for email
  const [emailValue,setEmailValue]=useState('');
  function emailChangeHandler(event){
    // console.log(event)

    setEmailValue(event.target.value);
    // const {value}=event.target;
    // setEmailValue(value)
  }

  //!submit
  function formSubmit(event){
    event.preventDefault();

    console.log("name: ",nameValue)
    console.log("email: ",emailValue)
  }

  //!--------------------------------------------------------

  //?Way 2 , we will create a common state for all fields and handle their onchangle accordingly /dynamically

  //!common state
  const [formState,setFormState]=useState({
    name:"",
    email:""
  })

  function formStateHandler(event){
    // console.log(event.target.value);
    // console.log(event.target.name); //?it given the name attribute of input field
    //?so using name attribute we can dynamically handle changes
    
    
    // const {name,value}=event.target

    setFormState({
      ...formState,
      [event.target.name] : event.target.value , //[] square bracket means key will come dynamically

      //we can do like this also
      // [name] : value
    })

  }
  
  //!submit
  //!submit
  function formStateSubmit(event){
    event.preventDefault();

    console.log("name: ",formState.name)
    console.log("email: ",formState.email)
  }

  



  return (
    <>

    <h1>Handling Form data</h1>

    <form  onSubmit={formStateSubmit}>
      
      <div>
      <label htmlFor="name">Name: </label>
      <input value={formState.name} type="text"  id="name" name="name" placeholder="Enter name" onChange={formStateHandler}/>
      </div>
      
      <br />
      
      {/* email */}
      <div>
      <label htmlFor="email">E-mail: </label>
      <input value={formState.email} type="email"  id="email" name="email" placeholder="Enter email" onChange={(e)=>formStateHandler(e)}/>
      </div>
       
       <br />
      <button type="submit">Submit</button>
    </form>
    </>
  )
}