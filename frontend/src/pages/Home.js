import axios from "axios"
import { useEffect, useState } from "react"//elimonated useState //useState
import {useWorkoutsContext} from '../hooks/useWorkoutsContext'

import { Button } from 'flowbite-react'
import {Link} from 'react-router-dom'
//components
import WorkoutDetails from '../components/WorkoutDetails'
import Lazy from "../utils/Lazy"

const Home = () => {
  const {workouts,dispatch}= useWorkoutsContext()
  const [loader,setLoader]=useState(true)
  useEffect(()=>{
     const fetchWorkouts=async()=>{
        setLoader(false);
        const response = await axios.get('/api/workouts')
        if(response.data){
           dispatch({type:'SET_WORKOUTS',payload:response.data})
        } 
     }
     fetchWorkouts()
  },[])
  return (
   <div>
        <Link to='/work'>
             <Button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 p-2 m-5">Add a workout</Button>
        </Link>
       <div className="flex flex-wrap">
        {loader && <div>
          <Lazy/>
        </div> }
       {workouts && workouts.map((workout) => (
           <div key={workout._id} className="w-1/4 p-2">
             <WorkoutDetails workout={workout} />
           </div>
         ))}
       </div>
   </div>
 );
}

export default Home