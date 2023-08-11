import {Link} from 'react-router-dom'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const DefaultNavbar = () => {
   const {logout}=useLogout()
   const {user} = useAuthContext()

  const handleClick=()=>{
    logout()
  }
  return (

     <nav>
     <div className="">
       <div className="flex justify-between h-16 px-10 shadow items-center">
         <div className="flex items-center space-x-8">
           <h1 className="text-xl lg:text-2xl font-bold cursor-pointer">Workout</h1>
           <div className="hidden md:flex justify-around space-x-4">
             <Link to ="/" className="hover:text-indigo-600 text-gray-700">Home</Link>
           </div>
         </div>
          {user &&(<div>
          <span>{user.email}</span>
            <button  className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 ml-2" onClick={handleClick}>Log Out</button>
         </div>) }
           {
           !user &&( <div className="flex space-x-4 items-center">
            <Link to="/Login" className="text-gray-800 text-sm">LOGIN</Link>
           <Link to="/Signup" className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">SIGNUP</Link>
             </div>)
             }
       </div>
     </div>
   </nav>
  )
}

export default DefaultNavbar



   