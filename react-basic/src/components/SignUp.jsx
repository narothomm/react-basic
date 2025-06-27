import React,{useContext} from 'react'
import { userContext } from './ContextProvider'
import { useLocation,useNavigate } from 'react-router-dom'

const SignUp = () => {
   const{signUp}=useContext(userContext)

   const navigate=useNavigate()

   const handleSignup=(event)=>{
      event.preventDefault()
      const email=event.target.email.value
      const password=event.target.password.value

      signUp(email,password)
       .then(user=>{
        console.log(user)
        navigate('/login')
       })
   }

  return (
    <div className='mx-w-md mx-auto mt-10 p-4 border round shadow-lg'>
      <h2 className='text-xl font-bold mb-4'>Register Now</h2>

      <form onSubmit={handleSignup} className='space-y-4'>

        <div>
          <label className='block mb-1 font-semibold'>Email:</label>
          <input type='email' name='email' className='w-full border p-2 rounded-lg'/>
        </div>
        <div>
          <label className='block mb-1 font-semibold'>Password:</label>
          <input type='password' name='password' className='w-full border p-2 rounded-lg'/>
        </div>
        
        <div>
          <button type='submit' 
          className='bg-green-600 text-green px-4 py-1 border rounded hover:bg-red-500'>
          SignUp</button>
        </div>
      </form>

    </div>

  )
}

export default SignUp