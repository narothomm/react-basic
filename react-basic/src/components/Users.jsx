import React,{useEffect,useState} from 'react'
import axios from 'axios'
//import { useLoaderData } from 'react-router-dom'

const Users = () => {
   const [users,setUsers]=useState(null)

   useEffect(()=>{
      const getUsers=async()=>{ 
      const response= await axios.get('https://jsonplaceholder.typicode.com/users')
      console.log(response)
      const users=response.data 
      if(users){
         setUsers(users)
      }
   }
   getUsers()
},[])


  return (
    <div className='p-5'>
      <h2 className='font-bold text-3xl mb-4 text-center text-red-600'>User info</h2>
      {
         users&& users.map((user)=>(

         <div key={user.id} className='mb-3 border p-5 rounded-lg shadow-lg hover:bg-green-100 transition duration-400'> 
           <b>ID:</b> {user.id}<br/> 
           <b>name:</b> {user.name} <br/> 
           <b>Email:</b> {user.email}
         </div>
            
         ))
      }
   </div>
  )
}

export default Users

//React-এ লিস্ট রেন্ডার করার সময় key খুব জরুরি, যাতে প্রতিটি item ইউনিক থাকে
//or <div key={user}</div>  it work same, first search so it show slow 
//user, we use any name of props 