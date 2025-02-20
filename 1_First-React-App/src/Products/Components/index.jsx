function AllProducts ({products}){

  return (
    <div>
      <h2>All Products</h2>
      
      <ul>
        {
          products.map((item,index)=>{
            return <li key={index}>{item}</li>
          })
        }
      </ul>
       
      
    </div>
  )
}

export default AllProducts
