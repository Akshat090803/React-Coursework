import { Link, Outlet } from "react-router-dom";

export default function Explore(){
  return (
    <>
    <div>
      <h1>Explore Page</h1>

    </div>
    <div style={{display:"flex",justifyContent:"center",gap:"10px",marginBottom:"20px"}}>
      <button><Link to={'/'}>Home</Link></button>      
      <button><Link to={'/about'}>About</Link></button>      
    </div>

    <div style={{display:"flex",flexDirection:"column",gap:"10px",alignItems:"center"}}>
    <button><Link to={'/explore/1'}>Page 1</Link></button> 
    <button><Link to={'/explore/2'}>Page 2</Link></button> 
    <button><Link to={'/explore/3'}>Page 3</Link></button> 
    <button><Link to={'/explore/4'}>Page 4</Link></button> 
    </div>

     {<Outlet/>}
    </>
  )
}