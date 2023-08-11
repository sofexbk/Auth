import { Card } from 'flowbite-react';
import axios from 'axios';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import Swal from 'sweetalert2';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'



const WorkoutDetails = ({workout,index}) => {   
const {dispatch}=useWorkoutsContext()

  const handleClick=async()=>{
    try {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full', // Added mr-4 for spacing
          cancelButton: 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full',   // Added ml-4 for spacing
        },
        buttonsStyling: false
      })      
     swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then( async (result) => {
      if (result.isConfirmed) {
        const response = await axios.delete('/api/workouts/'+workout._id) 
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success',
          dispatch({type:'DELETE_WORKOUT',payload:response.data})
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
    } catch (error) {
       console.log(error.response.data.error)
    } }

    const handleEdit=async()=>{
      try {
         const response=await axios.patch('/api/workouts/'+workout._id)
         console.log(response.data)
      }catch (error) {
         console.log(error.response.data.error)
      } 
  }

  return (
    <>
        <div className="flex">
  <Card className="max-w-sm m-7 text-center content-center" key={index}>
     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">  {workout.title} </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">    
       <strong>Load (Kg):</strong> {workout.load}<br />
       <strong>Reps:</strong> {workout.reps}<br />
       {formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}
    </p>
 
      <button onClick={handleClick} className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
	      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
	        <path  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
	       </svg>
	        Delete
        </button>
        <button onClick={handleEdit}
            className="flex space-x-2 items-center px-4 py-2 bg-green-600 hover:bg-amber-600 rounded-full drop-shadow-md">
            <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20"
                viewBox="0 0 50 50">
                <path
                    d="M 46.574219 3.425781 C 45.625 2.476563 44.378906 2 43.132813 2 C 41.886719 2 40.640625 2.476563 39.691406 3.425781 C 39.691406 3.425781 39.621094 3.492188 39.53125 3.585938 C 39.523438 3.59375 39.511719 3.597656 39.503906 3.605469 L 4.300781 38.804688 C 4.179688 38.929688 4.089844 39.082031 4.042969 39.253906 L 2.035156 46.742188 C 1.941406 47.085938 2.039063 47.453125 2.292969 47.707031 C 2.484375 47.898438 2.738281 48 3 48 C 3.085938 48 3.171875 47.988281 3.257813 47.964844 L 10.746094 45.957031 C 10.917969 45.910156 11.070313 45.820313 11.195313 45.695313 L 46.394531 10.5 C 46.40625 10.488281 46.410156 10.472656 46.417969 10.460938 C 46.507813 10.371094 46.570313 10.308594 46.570313 10.308594 C 48.476563 8.40625 48.476563 5.324219 46.574219 3.425781 Z M 45.160156 4.839844 C 46.277344 5.957031 46.277344 7.777344 45.160156 8.894531 C 44.828125 9.222656 44.546875 9.507813 44.304688 9.75 L 40.25 5.695313 C 40.710938 5.234375 41.105469 4.839844 41.105469 4.839844 C 41.644531 4.296875 42.367188 4 43.132813 4 C 43.898438 4 44.617188 4.300781 45.160156 4.839844 Z M 5.605469 41.152344 L 8.847656 44.394531 L 4.414063 45.585938 Z">
                </path>
            </svg>
            <span className="text-white text-md">Edit</span>
        </button>

  </Card> 


</div>
    </>

  )
}

export default WorkoutDetails