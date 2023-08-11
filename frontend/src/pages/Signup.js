import { useState } from "react"
import { Link } from "react-router-dom"
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const {signup,error,isLoading}=useSignup()


    const handleSubmit=async(e)=>{
       e.preventDefault()
        //console.log(email,password)
        await signup(email,password)
    }
  return (
    <div className="flex justify-center mt-20 p-20  border-8 border-yellow-600">
        <form className=" space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                      <label >Your email:</label>
                      <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" name="email"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                  </div> 
                  <div>
                      <label >Password:</label>
                      <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" name="password"  placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                  {error&&
                   <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
                   <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                   </svg>
                   <span className="sr-only">Info</span>
                   <div>{error}</div>
                   </div>
                     }
                  <button disabled={isLoading} type="submit" className="w-full text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                  </p>

        </form>
    </div>
  )
}

export default Signup
