'use client';
import axios from 'axios';
import { Button,  Label, TextInput } from 'flowbite-react';
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import {useWorkoutsContext} from '../hooks/useWorkoutsContext'
import { useAuthContext } from '../hooks/useAuthContext';

const WorkoutForm = () => {
    const {dispatch}=useWorkoutsContext()
    const [title,setTitle]=useState('')
    const [load,setLoad]=useState('')
    const [reps,setReps]=useState('')
    const[error,setError]=useState('')
    const [emptyFields,setEmptyFields]=useState([])
    const navigate = useNavigate();
    const {user}=useAuthContext()
    
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {

          if(!user){
           setError('You must be logged in')
           return 
          }
        const workout={title,load,reps}
        const response = await axios.post('/api/workouts',workout,{
          headers:{
            'Authorization':`Bearer ${user.token}`
          }
        })
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            setEmptyFields([])
            console.log('new workout added',response.data)
            //in case you want data t afficha une fois e addi 
            dispatch({type:'CREATE_WORKOUT',payload:response.data}) //prob here
            navigate('/');
        }
         catch(error) {
            console.log('Other error:', error.response.data.error);
            setError(error.response.data.error)
            setEmptyFields(error.response.data.emptyFields)
         }
    }

    return (
        <div> 
            <hr/>
            <h3 className='flex justify-center p-3 font-serif text-2xl text-cyan-800' >Add a new workout</h3>
            <div className='flex justify-center'> 
            <form className="flex max-w-md m-8 flex-col gap-4 w-[32rem]" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="title1"
                value="Exercice Title:"
              />
            </div>
            <TextInput
              id="title1"
              type="text"
              onChange={(e)=>setTitle(e.target.value)}
              value={title}
              //className={emptyFields.includes('title')?'error':''}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="load1"
                value="Load (Kg):"
              />
            </div>
            <TextInput
              id="load1"
              type="number"
              onChange={(e)=>setLoad(e.target.value)}
              value={load}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="reps1"
                value="Reps:"
              />
            </div>
            <TextInput
              id="reps1"
              type="number"
              onChange={(e)=>setReps(e.target.value)}
              value={reps}
            />

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
          <Button type="submit" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Submit
          </Button>
          
        </form>
        </div>
        </div>
       
       
      )
}

export default WorkoutForm
