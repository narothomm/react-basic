import React from "react";
import ChildrenCompondnt from './childComponent';
const ParentComponent=()=>{
   return(
      <div>
         <h2>From ParentComponent</h2>
         
         <ChildrenCompondnt></ChildrenCompondnt>
         </div>
   )
}
export default ParentComponent