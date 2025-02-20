import styles from "./Module_CSS_Paragraph.module.css"

export function Paragraph2(){
      const prod=["Prod1","Prod2","Prod3","Prod4"]

      return (
        <>
         {
          prod.map((item,index)=>{
            return (
              <div key={index} className="para-div">
                <h2 className={styles.heading}>{item}</h2>
                <button className={styles.btn}>Click</button>
              </div>
            )
          })
         }
        </>
      )
}