import { useLocation, useParams } from "react-router-dom"

export default function Detail(){

  const params=useParams();
  const location=useLocation();
  const {id}=params
  return (
    <>
    <div>
      <h2>Details</h2>
    </div>

    <div>
      <p>{`Showing Details of Page ${id}`}</p>
      <p>{`current path: ${location?.pathname}`}</p>
    </div>
    </>
  )
}