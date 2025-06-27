import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'

const Cart = () => {
   const location=useLocation()
   const navigate=useNavigate()
   console.log(location)
  return (
    <div>
     <h2> Cart:</h2> 
     <p> product Name:{location?.state.name}</p>
     <button onClick={()=>navigate(-1)}>back</button>
    </div>
  )
}

export default Cart