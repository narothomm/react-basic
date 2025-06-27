import React from "react";
import {GrandChildComponent} from './GrandChildComponent'
const childComponent=()=>{ 
   return(
      <div>
         <h1>From childComponent</h1>
          <GrandChildComponent></GrandChildComponent>
      </div>
   )
}
export default childComponent