import React, { useContext } from 'react' 
import { userContext } from "./ContextProvider"; 
import { useLocation, useNavigate } from "react-router-dom" 

const Login = () => {
   const { login,setUser,googleSignIn } = useContext(userContext) // কনটেক্সট থেকে setUser ফাংশন নেওয়া
   const location = useLocation() // ইউজার কোথা থেকে এসেছে তা জানার জন্য
   const navigate = useNavigate() // প্রোগ্রামেটিক রিডাইরেকশনের জন্য

   const handleLogin = (event) => { 
      event.preventDefault(); // ফর্ম রিফ্রেশ বন্ধ করার জন্য

      const email = event.target.email.value;   // ইনপুট ফিল্ড থেকে নাম সংগ্রহ
      const password = event.target.password.value; // ইনপুট ফিল্ড থেকে ইমেইল সংগ্রহ
      
      login(email,password)
         .then(user=>{
            console.log(user)
            console.log(location.state)

          if (location?.state?.from) {
            navigate(location.state.from);        
          }
         else {
            navigate('/'); 
         }
     })
  
   }
    const handleGoogleSignIn=()=>{
      googleSignIn()
      .then(res=>console.log(res.user))
   }
   return (

      <div className='max-w-md max-auto mt-10 p-6 border-rounded shadow-lg'>
         <h2 className='text-xl font-bold mb-4'>Login Now</h2>

         <form onSubmit={handleLogin} className="space-y-4"> 

            <div>
               <label className='block mb-1 font-semibold'>Email:</label>
               <input type='email' name='email' className='w-full border p-2 rounded-lg' /> 
            </div>
            <div>
               <label className='block mb-1 font-semibold'>Password:</label>
               <input type='password' name='password' className='w-full border p-2 rounded-lg' /> 
            </div>
            <button type='submit' className='bg-green-600 text-red w-full px-4 py-1 rounded-lg hover:cursor-pointer'>
               Login</button>
         </form>

         <div>
            <button onClick={handleGoogleSignIn}className='border rounded-lg w-full px-3 py-1 text-bold bg-blue-500'>Sign in with google</button>
         </div>
      </div>
   )
}

export default Login 










