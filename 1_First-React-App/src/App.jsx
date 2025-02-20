
import './App.css'
import ClassBasedComponent from './Components/1_Class_Based_Comp'
import { FunctionComponent } from './Components/2_Functional_Comp'
import AllProducts from './Products/Components';


function App() {
 
 const prod=["Product1" , "Product2" , "Product3","Product4"];
  return (
    <>
      <ClassBasedComponent/>
      <FunctionComponent/>
      <AllProducts products={prod} />
    </>
  )
}

export default App
