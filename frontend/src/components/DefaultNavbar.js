import {Link} from 'react-router-dom'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import { useLogout } from '../hooks/useLogout'


const DefaultNavbar = () => {
   const {logout}=useLogout()

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
         <div>
            <button onClick={handleClick}>Log Out</button>
         </div>
         <div className="flex space-x-4 items-center">
           <Link to="/Login" className="text-gray-800 text-sm">LOGIN</Link>
           <Link to="/Signup" className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">SIGNUP</Link>
         </div>
       </div>
     </div>
   </nav>
  )
}

export default DefaultNavbar



   