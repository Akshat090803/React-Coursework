import { Link } from "react-router-dom";

export default function About(){
  return (
    <>
    <div>
      <h1>About Page</h1>
    </div>
    <div style={{display:"flex",justifyContent:"center",gap:"10px"}}>
      <button><Link to={'/'}>Home</Link></button>      
      <button><Link to={'/explore'}>Explore</Link></button>      
    </div>
    </>
  )
}