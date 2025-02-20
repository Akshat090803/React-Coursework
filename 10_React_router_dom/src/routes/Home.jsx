import { Link, useNavigate } from "react-router-dom";

export default function Home(){
  const navigate=useNavigate()

  function clickHandler(){
    navigate('/explore')
  }
  return (
    <>
    
    <div>
      <h1>Home Page</h1>
    </div>
    <div style={{display:"flex",justifyContent:"center",gap:"10px"}}>
      <button><Link to={'/explore'}>Explore</Link></button>      
      <button><Link to={'/about'}>About</Link></button>      
      <button onClick={clickHandler}>Navigate to explore Page suing useNavigate hook</button>
    </div>
    
    </>
  )
}