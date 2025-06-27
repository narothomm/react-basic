import React from "react";
const ConditionalRendering=()=>{
   const show=false
   if(show){
      render(
         <div>
            <h3> Hello I am in form if block </h3>
         </div>
      )
   }
   return(
      <div>
         <h2> Hello I am from cinditional block</h2>
      </div>
   )
}
export default ConditionalRendering