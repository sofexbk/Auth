import axios from "axios"
import { useEffect, useState } from "react"//elimonated useState //useState
import {useWorkoutsContext} from '../hooks/useWorkoutsContext'
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