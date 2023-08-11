import { useState } from "react"

import Login from "./Login"
import { Link } from "react-router-dom"

const Signup = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    
    const handleSubmit=async(e)=>{
       e.preventDefault()
        console.log(email,password)
    }
  return (
    <div className="flex justify-center mt-20 p-20  border-8 border-yellow-600">
        <form className=" space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div> 
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <button type="submit" className="w-full text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <Link to="/Login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                  </p>
        </form>
    </div>
  )
}

export default Signup
