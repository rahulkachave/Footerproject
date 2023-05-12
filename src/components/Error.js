import React from 'react'
import { useNavigate} from 'react-router-dom'  //it is used for go to return page
const Error = () => {   //its for showing the error page suppose give wrong path showing the error page

    const navigate =useNavigate()
  return (
    <div>
   <div>404 Page Not Found</div>
   <button onClick={()=> navigate(-1)}>Go Back</button>
   </div>
  )
}

export default Error