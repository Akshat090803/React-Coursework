
import './App.css'
import { Count } from './components/Count'
import { Theme } from './components/Theme'
import MyContextState from './context Store/contextApi'

function App() {
 

  return (
    <>
    <MyContextState>
      <Count/>
      <Theme/>
    </MyContextState>
    </>
  )
}

export default App
