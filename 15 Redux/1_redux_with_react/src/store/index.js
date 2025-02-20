import {createStore} from "redux"

let initialCounter={
  counter:0,
  privacy:false
}
const reducer=(counterStore=initialCounter,action)=>{

  if(action.type==="INCREMENT"){
    return {...counterStore,counter:counterStore.counter+1}
  }
  else if(action.type==="DECREMENT"){
    return {...counterStore,counter:counterStore.counter-1}
  }
  else if(action.type==="ADD"){
    return {...counterStore,counter:counterStore.counter+Number(action.payload.number)}
  }
  else if(action.type==="SUB"){
    return {...counterStore,counter:counterStore.counter-Number(action.payload.number)}
  }
  
  else if(action.type==="PRIVATE"){
    return {...counterStore,privacy:!counterStore.privacy}
  }
  

  return counterStore



}

const counterStore=createStore(reducer)



export default counterStore
