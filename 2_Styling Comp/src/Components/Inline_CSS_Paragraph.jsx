export function Paragraph3(){
      const prod=["Prod1","Prod2","Prod3","Prod4"]

      return (
        <>
         {
          prod.map((item,index)=>{
            return (
              <div key={index}  style={{padding:"20px", border:"1px solid red ", marginBottom:"5px"}}>
                <h2 style={{color:"blue"}}>{item}</h2>
                <button style={{color:"black", backgroundColor:"white"}}>Click</button>
              </div>
            )
          })
         }
        </>
      )
}