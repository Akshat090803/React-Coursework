import "./style.css" //?example of external css

export function Paragraph(){
      const prod=["Prod1","Prod2","Prod3","Prod4"]

      return (
        <>
         {
          prod.map((item,index)=>{
            return (
              <div key={index} className="para-div">
                <h2 className="heading">{item}</h2>
                <button className="btn">Click</button>
              </div>
            )
          })
         }
        </>
      )
}