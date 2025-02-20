import { useSelector } from "react-redux"

function Content(){
let counterValue=useSelector((store)=>store.counter)
  return  <p className="lead mb-4">Counter Current Value:{counterValue}</p>
}
export default Content