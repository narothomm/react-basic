import React,{useState} from "react";
const Counter=()=>{
   const [counter,setCounter]=useState(0)
   const [user,setUser]=useState(null)
   return(
      <div>
         Count:{counter} <br/>
         <button 
         onClick={()=>setCounter(counter+1)}
         className='p-1 border rounded-lg'>
         increment</button><br/>
         
         <button onClick={()=>setUser({name:"joy", age:27})} className="p-1 border rounded-lg">
            setUser</button><br/>
         {user? "name:"+user.name+" "+"age:"+user.age: ""}
      </div>
   )

}
export default Counter