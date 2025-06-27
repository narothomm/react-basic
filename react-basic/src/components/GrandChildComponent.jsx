import React, { useContext } from "react";
import { userContext } from './ContextProvider';


export const GrandChildComponent=()=>{
   const{user,setUser}=useContext(userContext)
   return(
      <div>
         <h3>Granschilscomponent</h3>
       
         <span>name:{user.name}</span><br/>
         <span>email:{user.email}</span> 
         
         <button className='border p-2 mt-3' 
         onClick={() => setUser({ name: "mahamud", email: "mahamud@gmail.com" })}>
         Change user</button>

  </div>

   )
}