import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import Swal from "sweetalert2";

export const useSignup = () => {

    const [error,setError]=useState(null)
    const [isLoading,setIsLoading]=useState(null)
    const {dispatch}=useAuthContext()

    const signup=async(email,password)=>{
        setIsLoading(true)
        setError(null)
        try {
           const response=await axios.post('/api/user/signup',{email,password})
            console.log(response)
         if(response.data){
            //save the user to local storage
              localStorage.setItem('user',JSON.stringify(response.data))
            //update auth context
            dispatch({type:'LOGIN',payload:response.data})
            setIsLoading(false)
            Swal.fire({
              position: 'middle',
              icon: 'success',
              title: 'Your account has been created',
              showConfirmButton: false,
              timer: 1500
            })
         }
        } catch (error) {
          setIsLoading(false)

            console.log(error.response.data.error)
            setError(error.response.data.error)
        }
      }
      return {signup,isLoading,error}
}