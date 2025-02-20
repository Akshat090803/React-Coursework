function Container({children}){
  return (
   <div className="xyz">
     <div className="card " style={{width:" 40rem"}}>
  
  <div className="card-body abc">
    {children}   
  </div>
</div>
   </div>
  )
}

export default Container