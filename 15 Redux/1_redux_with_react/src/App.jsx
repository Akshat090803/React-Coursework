
import './App.css'

import Heading from './components/Heading'
import Content from './components/Content'
import Control from './components/Controls'
import Container from './components/Container'
import { useSelector } from 'react-redux'
import Privacy from './components/Privacy'

function App() {
     
  const privacy=useSelector(store=>store.privacy)
console.log(privacy)
  
  return (

       <Container >
   
     <div className="px-4 py-5 my-5 text-center">
    <Heading></Heading>
    <div className="col-lg-6 mx-auto">
     {privacy?<Privacy/> : <Content/>}
      <Control></Control>
    </div>
  </div>
  </Container>
   
   
  )
}

export default App
