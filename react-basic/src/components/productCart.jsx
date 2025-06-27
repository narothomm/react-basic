//import React from 'react'
import { userContext } from './ContextProvider'
import React, { useContext } from "react";

const ProductCart = ({name,price,isAvailable,description,onAddToCart}) => {const {user,setUser}=
useContext(userContext)
  return (
    <div className='border border-gray-300 p-4 m-4 rounded-lg shadow-lg'>
      <h2 className='text-xl font-medium text-gray-800 mb-1'>Product details </h2>
      <span className='text-[18px] text-gray-500 mb-1'> name:{name} </span> <br/>
      <span className='text-gray-700 mb-1'>  price:{price} </span> <br/>
      <span className='text-sm text-gray-600'>
         available:
         <span className={isAvailable? 'text-green-600':'text-red-600'}> 
          {isAvailable?"in stock":"not in stock"}
          </span><br/> 
          </span> 
     
      <p className='text-sm text-red-600 mb-5'>{description}</p>

      <span> name:{user.name},email:{user.email}</span><br/>
      
      <button onClick={ ()=>onAddToCart(name)} 
      className='border p-1 hover:cursor-pointer'>
        Add to cart</button>

    </div>
  )
}

export default ProductCart